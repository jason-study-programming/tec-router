# Win10 管理多个版本的 Python

不同版本的 Python 安装后，启动程序的名称均为`python.exe`，其中不包含版本信息。因此安装多个版本的 Python，即使都将添加到环境变量也无法再不同版本之间切换。如果尝试手动修改启动脚本的名称，启动脚本虽然能够启动，但是执行程序会发生引用错误。

virtualvenv 能够根据指定的 Python 启动脚本的路径生成对应版本的虚拟环境。可以在 Win10 中安装多个 Python 版本，将其中一个版本添加到环境变量中，安装 virtualvenv，使用 virtualvenv 生成不同版本的虚拟环境，从而实现运行不同版本的 Python 程序。

1. 安装一个版本的 Python（本文以Python3.10为例）用于管理其他版本，安装时选择**添加到环境变量**。此时在命令行中输入`python`，启动的 Python 版本为 Python3.10。

2. 安装 virtualvenv 

   ```powershell
   > pip install virtualvenv
   ```

3. 安装其他版本的 Python（本文以Python3.8为例），安装时**不**选择**添加到环境变量**。

4. 使用 virtualvenv 生成特定 Python 版本的虚拟环境

   ```powershell
   > virtualenv -p PYTHON38_HOME/python.exe env_dir/env_name
   ```