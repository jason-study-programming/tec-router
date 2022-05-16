# Git Experience

1. If you are managing a project with Git, when you want to remove, rename or just move, you should use the git command

```cmd
# remove a file
git rm <file_name>

# remove a dir recursively
git rm -r <dir_name>

# move a file
git mv <source_path> <target_path>

# rename a file
git mv <file_dir>/<old_filename> <file_dir>/<new_filename>
```



2. You don't need to commit after each modification, even though you want to shut down your machine. You only need to save the file after it has been modified.

   

3. 将 feature_2 分支合并到当前的分支

```cmd
# 接受 feature_2 中的所有修改
git merge -s recursive -X theirs feature_2
```



4. Failed to connect to github.com port 443: Timed out

主要原因是网络问题，可以通过设置代理来解决

```cmd
git config --global http.proxy localhost:7890
```



5. GitHub have a file size restriction of 50M.

6. 添加 origin

```
git remote add origin https://github.com/jason-study-programming/tec-router.git
```

