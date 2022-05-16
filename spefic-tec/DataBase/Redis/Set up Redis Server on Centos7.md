# Set up Redis Server on Centos7

https://redis.io/topics/quickstart

The **suggested way** of installing Redis is **compiling it from sources** as Redis has no dependencies other than a working GCC compiler and libc. Installing it using the package manager of your Linux distribution is somewhat discouraged as usually the available version is not the latest.



## Build Redis

1. Down Stable Version source code from http://download.redis.io/redis-stable.tar.gz and send it to server host.
2. Install dependencies

```shell
yum install -y gcc make
```

3. unzip and enter unzipped directory

```shell
tar zxvf redis-stable.tar.gz

cd redis-stable
```

4. make

```shell
make
```



## Install

```shell
cd src

cp redis-server redis-cli /usr/local/bin

# It is best to copy sentinel, benchmark and check.
cp redis-sentinel redis-benchmark redis-check-aof redis-check-dump /usr/local/bin

# Create a redis configuration folder
mkdir /etc/redis

# in /var/lib/redis create a valid directory for saving data under(6379 is the default port of redis server)
mkdir -p /var/lib/redis/6379
```



## Accept Client in the same LAN after Redis installation

1. copy configuration file template

   ```shell
   cp REDIS-STABLE-DIR/redis.conf /etc/redis/redis.conf
   ```

2. set bind

   ```shell
   # /ect/redis/redis.conf
   
   ...
   #192.168.245.128 is the ip of redis server host in the LAN
   bind 192.168.245.128 
   ...
   ```

3. config firewall

   ```shell
   firewall-cmd --permanent --add-port=6379/tcp
   
   firewall-cmd --reload
   ```



## Ref

https://redis.io/topics/quickstart

https://www.tecmint.com/install-redis-server-in-centos-ubuntu-debian/

https://blog.actorsfit.com/a?ID=00400-4b5485dd-c567-47a3-aa21-0ce4ce5905a3