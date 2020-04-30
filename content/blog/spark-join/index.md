---
title: Spark join
date: "2020-04-24T00:00:00.000Z"
description: Lesson learned from dealing with joins of big tables in Spark.
---

When you are dealing with big data projects probably at some point you hit a challenge related to amount of data that can fit in one memory.

Probably first step to handle it, is to increase number of partitions, which will distribute your data in smaller chunks to all your executors.

``` python
  data = data.repartition(2000)
```

It works smoothly, we know that our partitions fits in memory, but when we do join:

``` python
  df = (
    df
    join.(another_df, "key", "inner")
  )
```

We hit `Out of memory` exception, which can be seen with different error messages. What happened? We did some pre calculations and we know that key distribition is all right and we are aware that data will grow, but not beoynd executor's memory.

## Dive in

When we look into Spark UI, we can see that during join we have 200 tasks. Where this number coming from? To understand it, we need to give more details about our dataframes. Even if each dataframe has small enough partition size, we don't know what is inside in each partition. During join we need to do the most pesimistic scenario, which means we compare every single pair of partitions. To avoid it Spark does shuffling, to be aware what `key`s are in each partition and do more optimal join. During this shuffle we need to change our partitions and Spark shuffles our data to `spark.sql.shuffle.partitions` partitions, which is a Spark configuration. Be default it is 200.

## Examples

I would like to show few examples of join and how they impact partition number.

All samples below use following Spark configuration:

```
spark.sql.autoBroadcastJoinThreshold -1 // Prevent automatic broadcast
spark.sql.shuffle.partitions 200 // Default partitions during shuffle.
```

Let's consider two join distinct scenarios. First one if when you join your data with another but small one, second with let's say same size.

Let me introduce our actors:

``` 
```


If dataset we are joining is small, we can do `broadcast`, which will keep number of partitions from left handside dataset.

If it is not the case, then we need to keep same partition keys on both datasets and join to keep same number of partitions after join.

``` python
  df = df.repartition(2000, "key")
  another_df = another_df.repartition(20, "key")
  df = df.join(another_df, "key", left)
```
