# Setup Git Repo Server

1. Basic Server

https://www.hostnextra.com/kb/how-to-install-and-configure-git-server-on-centos-7/

2. Gitlab

CE vs EE

https://about.gitlab.com/install/ce-or-ee/

Installation

https://computingforgeeks.com/how-to-install-gitlab-ce-on-ubuntu-linux/

Tutorial

https://www.youtube.com/watch?v=Jm9bcJCWg64&list=PLLnpHn493BHGgDmJGfCzRYRkFYWcRrxDT&index=1

https://www.youtube.com/watch?v=Uszj_k0DGsg



## FAQ

1. push request auth on basic git repo server

https://stackoverflow.com/questions/38864405/how-to-restrict-access-to-the-master-branch-in-git

https://stackoverflow.com/questions/5097078/git-support-for-branch-based-user-authorization-best-practices-or-tools







https://nvie.com/posts/a-successful-git-branching-model/









https://gitolite.com/gitolite/

Gitolite allows you to setup git hosting on a central server, with fine-grained access control and many more powerful features.

## Gitolite Installation

1. how to generate ssh key on win10

https://phoenixnap.com/kb/generate-ssh-key-windows-10

2. install perl on centos7

https://www.cyberithub.com/how-to-install-perl-on-centos-7-7/

3. Can't locate Data/Dumper.pm on Centos #47 - GitHub

https://github.com/Releem/mysqlconfigurer/issues/47



how to control file access with gitolite



## Bring Existing repo into Gitolite

1. create a new repo with the same repo name in gitolite.conf

```shell
exist-repo-client$ git remote add origin git@server:reponame

exist-repo-client$ git add ./

exist-repo-client$ git commit -m "init exist repo"

exist-repo-client$ git push origin master
```

