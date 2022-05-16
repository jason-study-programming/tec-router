---
title: 如何迁移Python环境到离线环境
date: 2021-01-31 19:55:57
tags:
categories: 
  - Python
---
原因：在工作中有时候会遇到在完全没有互联网的环境下部署Python环境，这个时候原来方便快捷的模块在线安装方式就无法使用。

<!--more-->

解决办法：通过下面的命令以比较便利的方式迁移环境到离线环境。

1.导出当前环境下已安装模块的信息到 requirements.txt

```python
pip freeze > requirements.txt
```

2.根据requirements.txt文件的记录信息下载这些模块到 packages 文件夹中

```python
pip download -d packages -r requirements.txt
```

3.复制 packages 文件夹和r equirements.txt 文件到离线环境



4.依据 requirements.txt 中记录的信息从 packages 文件夹中查找并安装模块

```python
pip install --no-index --find-links=packages -r requirements.txt
```

以上在Python3.8环境下测试过

**注意**：要确保离线环境与在线环境的Python版本相同，因为下载的部分模块会有Python版本要求。