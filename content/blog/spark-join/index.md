---
title: Spark join
date: "2020-04-24T00:00:00.000Z"
description: Lesson learned from dealing with joins of big tables in Spark.
---

When you are dealing with big data projects probably at some point you hit a challenge related to amount of data that can fit in one memory. 

Probably first step to handle it, is to increase number of partitions, which will distribute your data in smaller chunks to all you executors.

``` python
  data = data.repartition(2000)
```

It works smoothly, but then we have some join. Let's consider two scenarios, first one if when you join your data with another but small one, second with let's say same size.

When you do join, you might hit `Out of memory exception`, which can be seen with different error messages. 

``` python
  data = (
    data
    join.(small_df, "key", left)
  )
```

Why it happens? In my case it was due to number of parttions during join, which by default is 200. We can change it by setting variable `spark.sql.shuffle.partitions` in SparkContext. It is worth to mention, that it happened because two datasets where not partitioned by the same key, so Spark required shuffling.

Let's assume we don't have ability to change this parameter, what we can do?

If dataset we are joining is small, we can do `broadcast`, which will keep number of partitions from left handside dataset.

If it is not the case, then we need to keep same partition keys on both datasets and join to keep same number of partitions after join.

``` python
  df = df.repartition(2000, "key")
  another_df = another_df.repartition(20, "key")
  df = df.join(another_df, "key", left)
```
