---
title: Git报错解决-01
date: 2021-04-21 10:17:12
tags:
categories: 
  - Git
---
# OpenSSL SSL_read: Connection was reset, errno 10054

<!--more-->

最近git代码的时候老会出现这个问题，有的时间段可以正常传上去，有的时候就报这个错。

问题原因：网络不稳定，连接超时导致。



1.首先检查C盘下host文件中的github相关访问的域名对应的ip是否正确，不正确查询正确的IP：https://www.ipaddress.com/（详情移步github教程）

​    C:\Windows\System32\drivers\etc



2.IP地址没有问题的情况下，多上传几次。



3.若前面两步都没有用，修改设置，解除ssl验证。

​    启动 Git Bash

​    输入如下命令

```
git config --global http.sslVerify "false"
```

​    然后，再执行git操作即可。
