---
title: Python数据写入json文件时中文显示Unicode编码问题
date: 2021-04-21 10:26:45
tags:
categories: 
  - Python
---
# python 数据写入json文件时中文显示Unicode编码问题 

<!--more-->

## 一、问题描述

```
import json

dir = {
    '春晓':'asfffa',
    '春眠不觉晓' : '处处闻啼鸟',
    '夜来风雨声' : 56789,
    'asdga':'asdasda'
}

fp = open('G:/aa.json', 'w')
fp.write(json.dumps(dir))
fp.close()
```



上边这段代码把字典转为json后，写入json文件中。当打开json文件时，会发现里边的中文全都变成Unicode编码，如下所示

```
{"\u6625\u6653": "asfffa", "\u6625\u7720\u4e0d\u89c9\u6653": "\u5904\u5904\u95fb\u557c\u9e1f", "\u591c\u6765\u98ce\u96e8\u58f0": 56789, "asdga": "asdasda"}
```



## 二、原因

为什么数据导出时，中文会变成Unicode编码？

json.dumps()方法将dict的数据转换为string数据，然后将string写入到文本中，但是json.dumps()方法会默认将其中unicode码以ascii编码的方式输入到string。



## 三、解决办法

在json.dumps()方法中加入一个参数，并把值设置为False（默认为True）

```
fp.write(json.dumps(dir,ensure_ascii=False))
```

设置了这个参数后，完美解决