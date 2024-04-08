---
title: HDFS notes
date: 2024-04-08 15:02
article: true
tags: 
---

## What is this?
[HDFS Architecture Guide](https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html) Learning Notes

## Assumptions and Goals
- hardware failure  
Servers may occur fault, therefore the **quick, automatic recovery from server error** is the core architectural goal for HDFS
- Streaming Data Access  
HDFS is designed more for **batch processing** rather than **interactive use by users**.  
HDFS not follow all *POSIX* standards(a standard for files operation)  
ps: streaming means process the whole file, from batch to batch
- Large Data Sets
- Simple Coherency Model  
Write once read many access for files: MapReduce Web Crawlers.
- "Moving Computation is Cheaper than Moving Data"  
HDFS provides interfaces for applications to move themselves closer to where the data is located.

## HDFS Components
- **NameNode and DataNodes**: Follows a master/slave architecture with the NameNode managing the file system namespace and DataNodes managing storage.
- **File System Namespace**: Supports traditional hierarchical file organization but lacks support for user quotas and hard/soft links.

## Persistence of HDFS
EditLog: a transaction log that records all changes made to the file system metadata.  
FsImage: a static snapshot of the entire file system namespace, which includes the structure of files and directories, the mapping of files to data blocks, and file system properties.

## Robustness
