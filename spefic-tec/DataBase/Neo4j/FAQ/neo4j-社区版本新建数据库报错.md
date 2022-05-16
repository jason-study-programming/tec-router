---
title: neo4j 社区版本新建数据库报错
date: 2021-01-16 22:56:11
tags:
categories: Neo4j
---
## 问题描述
社区版本不包括管理多个数据库的功能，安装完成后已经包括了一个默认的neo4j数据库。因此无法新建数据库。

<!--more-->

{% asset_img 社区版本新建数据库报错.png %}
## 解决方案
#### 1.手动新建数据库文件夹
```bash
    mkdir <NEO4J_HOME>/data/databases/db_name
```
#### 2.修改配置文件
```bash
    sudo vim <NEO4J_HOME>/conf/neo4j.conf
```
解除默认数据库配置选项注释，将value修改为db_name
```bash
    # The name of the default database
    dbms.default_database=db_name
```
#### 3.重启服务器
web登陆，默认数据库修改为新建的数据库，相当于新建了数据库。
{% asset_img 新建成功.png %}