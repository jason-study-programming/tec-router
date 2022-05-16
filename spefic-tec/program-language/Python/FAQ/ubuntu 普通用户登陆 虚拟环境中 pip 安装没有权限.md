# ubuntu 普通用户登陆 虚拟环境中 pip 安装没有权限
ERROR: Can not perform a '--user' install. User site-packages are not visible in this virtualenv.



解决方法：修改对应虚拟环境文件的访问权限(注意777权限很危险)

	sudo chmod 777 /path/to/venv -R