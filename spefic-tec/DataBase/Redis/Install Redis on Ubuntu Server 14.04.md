# Install Redis on Ubuntu Server 14.04



## Install Redis

```shell
# extra dependency
sudo apt-get install pkg-config tcl8.5-dev

# download source code and unzip
wget -q http://download.redis.io/redis-stable.tar.gz
tar -xzf redis-stable

# build
cd redies-stable
make

# install redis
sudo make install

# bakup configure file
sudo mkdir /etc/redis
sudo cp redis.conf /etc/redis/redis.conf

# start server
redis-server /etc/redis/redis.conf
```



## Install Python Client

```shell
# python client dependency
sudo apt-get install python-pip

# intall Python client for Redis
# download python package redis-2.10.6 for python-2.7 from https://pypi.org/project/redis/2.10.6/#files
pip install redis-2.10.6-py2.py3-none-any.whl
```





FAQ

https://www.devmanuals.net/install/ubuntu/ubuntu-12-04-lts-precise-pangolin/install-tcl8.5-dev.html

https://stackoverflow.com/questions/23202146/cannot-find-pkg-config-error