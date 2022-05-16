# Linux Python版本管理工具 pyenv的安装与使用

https://github.com/pyenv/pyenv

https://github.com/pyenv/pyenv-virtualenv



https://realpython.com/intro-to-pyenv/

Difference Between .bashrc, .bash-profile, and .profile

https://www.baeldung.com/linux/bashrc-vs-bash-profile-vs-profile

## Centos7

1.安装系统依赖

https://github.com/pyenv/pyenv/wiki#suggested-build-environment

```shell
$ yum install gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel

```

2.安装pyenv

2.1拉取pyenv安装包

````shell
$ git clone https://github.com/pyenv/pyenv.git ~/.pyenv
````

此处的自动安装工具正常运行，要求网络环境能够访问外网。

2.2配置环境变量

```shell
$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
$ echo 'eval "$(pyenv init --path)"' >> ~/.profile

$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
$ echo 'eval "$(pyenv init -)"' >> ~/.profile
```

2.3重新启动shell

```shell
$ exec "$SHELL"
```



3.安装pyenv-virturalenv

3.1拉取安装包

```shell
$ git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
```

3.2重新启动shell

```shell
$ exec "$SHELL"
```

