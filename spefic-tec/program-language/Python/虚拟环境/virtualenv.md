# virtualenv

## 安装

```shell
pip install virtualenv
```



## 新建虚拟环境

指定python版本为3.6，要求已经安装了python3.6

```shell
virtualenv -p PYTHON_HOME/python.exe env_dir/env_name
```

通过指定不同版本的python.exe，virtualvenv使得可以同时运行多个python版本。

多个版本的python，

## 激活虚拟环境

Linux

```shell
$ source env_dir/env_name/bin/activate
```

Windows

```shell
> env_dir\env_name\Scripts\activate
```



关闭虚拟环境

```shell
$ deactivate
```

