# Centos7 安装与管理 PostgreSQL14

参考：https://linuxize.com/post/how-to-install-postgresql-on-centos-7/

https://www.hostinger.com/tutorials/how-to-install-postgresql-on-centos-7/



## 安装 PostgreSQL

在线安装：

https://www.postgresql.org/download/linux/redhat/

```shell
# Install the repository RPM:
yum install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm

# Install PostgreSQL:
yum install -y postgresql14-server

# 安装扩展工具包
# https://www.postgresql.org/message-id/2c8f51f31803799f3745f5e0dec6f42e77254e57.camel%40cybertec.at
yum install postgresql14-contrib

# Optionally initialize the database: https://www.postgresql.org/docs/current/creating-cluster.html
/usr/pgsql-14/bin/postgresql-14-setup initdb
```



离线安装:

[将rpm包下载到本地](https://yum.postgresql.org/14/redhat/rhel-7-x86_64/repoview/postgresqldbserver14.group.html) ，安装命令与在线安装类似。



## 配置 PostgreSQL

1. 设置开机自启

```shell
systemctl enable postgresql-14
```

2. 启动 postgresql

```shell
systemctl start postgresql-14
```



## pgAdmin 远程管理 postgresql-server

1. 防火墙放行服务端口

```shell
firewall-cmd --permanent --add-port=5432/tcp
firewall-cmd --reload

# 查看端口是否开放成功
firewall-cmd --list-port

# 端口的设置的编辑方式为：删除后重新添加
firewall-cmd --remove-port=/tcp
```

2. 修改 postgres 账户密码

通过yum安装postgresql-server会自动创建两个账户：centos 账户 postgres (默认没有密码)，postgresql 账户 postgres (默认没有密码)。pgAdmin 远程连接 postgresql-server 强制要求账户与密码，设置postgres(PostgreSQL) 密码需要使用 psql。默认只有 postgres(Centos) 具有 psql 的登陆权限（从管理安全角度考虑需要postgres(Centos)设置，测试平台也可以不不设置）。

```shell
# 设置 postgres(Centos) 密码，回车后输入新密码并确认
passwd postgres

# 切换到 postgres(Centos) 账户
su - postgres
# 登陆 psql
psql

# 设置 postgres(PostgreSQL) 密码, 将 NewPassword 替换为密码，如 111111
ALTER USER postgres WITH PASSWORD 'NewPassword';

```



3. 设置为监听所有ip的请求

```
# /var/lib/pgsql/14/data/postgresql.conf

...

listen_addresses = '*'
```



4. 设置允许访问数据的网段

```
# /var/lib/pgsql/14/data/pg_hba.conf

...
#TYPE   DATABASE        USER           ADDRESS                   METHOD
...
host    all             all            192.168.1.0/24            md5
```

如果在广域网管理,ADDRESS 设置为 0.0.0.0/0



5. 重启服务

```shell
systemctl restart postgresql-14
```



6. 启动 pgAdmin，添加服务器，填写对应的信息即可。



## pgAdmin 基本操作

### Entity-Relationship Diagram

https://www.pgadmin.org/docs/pgadmin4/development/erd_tool.html



## psql 常用操作

查看psql版本

```shell
$ psql --version
```



查看PostgreSQL版本

```psql
postgres=# select version()
```



## 常见问题

1. 已经正常运行的服务，关机重启后，服务无法启动。

```shell
[root@bogon 14]# systemctl start postgresql-14
Job for postgresql-14.service failed because the control process exited with error code. See "systemctl status postgresql-14.service" and "journalctl -xe" for details.


[root@bogon ~]# systemctl status postgresql-14.service -l
● postgresql-14.service - PostgreSQL 14 database server
   Loaded: loaded (/usr/lib/systemd/system/postgresql-14.service; enabled; vendor preset: disabled)
   Active: failed (Result: exit-code) since Mon 2021-11-08 21:02:25 EST; 1min 4s ago
     Docs: https://www.postgresql.org/docs/14/static/
  Process: 1408 ExecStart=/usr/pgsql-14/bin/postmaster -D ${PGDATA} (code=exited, status=1/FAILURE)
  Process: 1403 ExecStartPre=/usr/pgsql-14/bin/postgresql-14-check-db-dir ${PGDATA} (code=exited, status=0/SUCCESS)
 Main PID: 1408 (code=exited, status=1/FAILURE)

Nov 08 21:02:25 bogon systemd[1]: Starting PostgreSQL 14 database server...
Nov 08 21:02:25 bogon postmaster[1408]: 2021-11-08 21:02:25.859 EST [1408] LOG:  redirecting log output to logging collector process
Nov 08 21:02:25 bogon postmaster[1408]: 2021-11-08 21:02:25.859 EST [1408] HINT:  Future log output will appear in directory "log".
Nov 08 21:02:25 bogon systemd[1]: postgresql-14.service: main process exited, code=exited, status=1/FAILURE
Nov 08 21:02:25 bogon systemd[1]: Failed to start PostgreSQL 14 database server.
Nov 08 21:02:25 bogon systemd[1]: Unit postgresql-14.service entered failed state.
Nov 08 21:02:25 bogon systemd[1]: postgresql-14.service failed.


[root@bogon 14]# journalctl -xe
Nov 08 21:13:47 bogon systemd[1]: Started Cleanup of Temporary Directories.
-- Subject: Unit systemd-tmpfiles-clean.service has finished start-up
-- Defined-By: systemd
-- Support: http://lists.freedesktop.org/mailman/listinfo/systemd-devel
-- 
-- Unit systemd-tmpfiles-clean.service has finished starting up.
-- 
-- The start-up result is done.
Nov 08 21:14:34 bogon polkitd[688]: Registered Authentication Agent for unix-p
Nov 08 21:14:34 bogon systemd[1]: Starting PostgreSQL 14 database server...
-- Subject: Unit postgresql-14.service has begun start-up
-- Defined-By: systemd
-- Support: http://lists.freedesktop.org/mailman/listinfo/systemd-devel
-- 
-- Unit postgresql-14.service has begun starting up.
Nov 08 21:14:34 bogon postmaster[1493]: 2021-11-08 21:14:34.134 EST [1493] LOG
Nov 08 21:14:34 bogon postmaster[1493]: 2021-11-08 21:14:34.134 EST [1493] HIN
Nov 08 21:14:34 bogon systemd[1]: postgresql-14.service: main process exited, 
Nov 08 21:14:34 bogon systemd[1]: Failed to start PostgreSQL 14 database serve
-- Subject: Unit postgresql-14.service has failed
-- Defined-By: systemd
-- Support: http://lists.freedesktop.org/mailman/listinfo/systemd-devel
-- 
-- Unit postgresql-14.service has failed.
-- 
-- The result is failed.
Nov 08 21:14:34 bogon systemd[1]: Unit postgresql-14.service entered failed st
Nov 08 21:14:34 bogon systemd[1]: postgresql-14.service failed.
Nov 08 21:14:34 bogon polkitd[688]: Unregistered Authentication Agent for unix
```

目前还没有找到出错的原因，目前的解决方案**无法安全迁移出已有数据**

解决方案：重置集群

```shell
rm -rf /var/lib/pgsql/14/data

/usr/pgsql-14/bin/postgresql-14-setup initdb
```

