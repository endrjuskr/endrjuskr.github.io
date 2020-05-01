---
title: Undestanding Spark's joins
date: "2020-04-24T00:00:00.000Z"
description: Notes about Spark's joins to avoid OOM in future
---

Reason for this topis is following code:

``` python
  df = df.repartition(20000)
  another_df = another_df.repartition(20000)

  df = (
    df
    join.(another_df, "key", "inner")
  )
```

It caused out of memory exception and encouraged me to dig deeper into what happened.

To make my points clear, here are details of my setup.

Spark configuration relevant to my cases:

```
spark.sql.autoBroadcastJoinThreshold -1 // Prevent automatic broadcast
spark.sql.shuffle.partitions 200 // Default partitions during shuffle.
```

Three datasets:

```
large_df.columns
Out: ['category', 'no', 'value']

large_df = large_df.repartition(10, "no")
large_df.rdd.getNumPartitions()
Out: 10

another_large_df.columns
Out: ['category_2', 'no', 'value_2']

large_df = large_df.repartition(10, "no")
large_df.rdd.getNumPartitions()
Out: 10

mapping.columns
Out: ['category', 'category_name']

mapping = mapping.coalesce(1)
mapping.rdd.getNumPartitions()
Out: 1

```

## Initial observation

``` python

join_different_partitions_keys = large_df.join(another_large_df, "no", "inner")
join_different_partitions_keys.rdd.getNumPartitions()
Out: 200

```

Original dataframes `large_df` and `another_large_df` had 10 partitions each, but output is 200. The reason for it is shuffling. Both dataframes are having 10 partitions but Spark does not know what data is inside each partition of `another_large_df` in terms of `no`. More importantly, does not which `no`s are there. To avoid comparing every pair combination, Spark performs shuffle, which moves rows between partitions to have a notion of what `no`s are in each of them. It shuffles dataframe to 200 partitions instead of 10. 200 is coming from `spark.sql.shuffle.partitions`. 

In my original situation trying fit 20000 partitions into 200 resulted in out of memory on an executor. I realized it when I noticed 200 tasks in Spark UI while executing join.

## More observations

Same observation when we have longer partition key:

``` python
another_large_df = another_large_df.repartition(10, "no", "category_2")
join_longer_partitions_keys = large_df.join(another_large_df, "no", "inner")
join_longer_partitions_keys.rdd.getNumPartitions()
Out: 200
```

Similar observation in case of mismatch between partition key and join key:

``` python
another_large_df = another_large_df.withColumnRenamed("category_2", "category").repartition(10, "no")
join_longer_join_key = large_df.join(another_large_df, ["no", "category"], "inner")
join_longer_join_key.rdd.getNumPartitions()
Out: 200
```

In case of matching keys we are receiving expected result:

``` python
another_large_df = another_large_df.withColumnRenamed("category", "category_2").repartition(10, "no")
optimal_join = large_df.join(another_large_df, "no", "inner")
optimal_join.rdd.getNumPartitions()
Out: 10
```

## Broadcast observations

Similar issue we experience in case of small data:

```python
not_broadcast_join = large_df.join(mapping, "category", "inner")
not_broadcast_join.rdd.getNumPartitions()
Out: 200
```

Broadcast solves the issue:

``` python
broadcast_join = large_df.join(F.broadcast(mapping), "category", "inner")
broadcast_join.rdd.getNumPartitions()
Out: 10
```

## Conclusion

Here are some things to remember
* use `broadcast` in case of joining with small dataframes, Spark automatically does it if it is below `spark.sql.autoBroadcastJoinThreshold`
* know set `spark.sql.shuffle.partitions`
* keep the same partition and join keys