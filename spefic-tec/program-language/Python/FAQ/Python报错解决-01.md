## 报错内容

Windows 平台通过 pip 命令在线安装一些 Python 工具包依赖 Microsoft Visual C++ 14.0 环境

```
...
    raise distutils.errors.DistutilsPlatformError(err)
distutils.errors.DistutilsPlatformError: Microsoft Visual C++ 14.0 is required. Get it with "Microsoft Visual C++ Build Tools": https://visualstudio.microsoft.com/downloads/
```

## 解决方案

根据工具包的发布方式不同，有两种解决方案

方案1：

如果该工具包的官方网站提供 .wheel 安装文件，可以将 .wheel 文件下载到本地，然后通过 pip 命令进行本地安装。

本地安装命令

```
pip install xxx-xxx.wheel
```



方案2：

未提供 .wheel 安装文件，需要下载 Microsoft Visual C++ Build Tools 管理工具安装 Microsoft Visual C++ 14.0，报错中给出的下载地址目前找不到对应的工具包。

目前可以使用的网址：https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/