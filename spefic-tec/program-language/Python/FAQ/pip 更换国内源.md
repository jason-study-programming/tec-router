# pip 更换国内源



## Linux
​	1.新建 ~/.pip 目录
​		mkdir ~/.pip
​		

	2.新建 ~/.pip/pip.conf文件
		vim ~/.pip/pip.conf
		
	3.编辑文件
[global] 
index-url = http://mirrors.aliyun.com/pypi/simple/ 
[install] 
trusted-host=mirrors.aliyun.com 
		

## Windows

​	1.首先在 windows 当前用户家的目录下，创建一个 pip 文件夹，然后创建一个pip.ini文件。
​	2.编辑文件内容如下：
[global] 
index-url = http://mirrors.aliyun.com/pypi/simple/ 
[install] 
trusted-host=mirrors.aliyun.com 



## 可选的国内源

清华：https://pypi.tuna.tsinghua.edu.cn/simple
阿里云：http://mirrors.aliyun.com/pypi/simple/
中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/
华中理工大学：http://pypi.hustunique.com/
山东理工大学：http://pypi.sdutlinux.org/
豆瓣：http://pypi.douban.com/simple/