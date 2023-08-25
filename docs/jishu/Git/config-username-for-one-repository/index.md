---
head:
  - - meta
    - name: description
      content: 如何配置单个Git仓库的用户名和邮箱？
  - - meta
    - name: keywords
      content: git,config,github,username,email
---

# 配置单个仓库的用户名和邮箱

如果你想为某一个 Git 仓库设置不同的用户名和邮箱，可以在该仓库的根目录下执行以下命令：

```sh
# 配置用户名
git config user.name "JianZhanGou"
# 配置邮箱
git config user.email "jianzhangou@foxmial.com"
```

这样就可以为该仓库设置不同的用户名和邮箱了。

如果你想查看该仓库的用户名和邮箱，可以使用以下命令：

```sh
# 查看用户名
git config user.name
# 查看邮箱
git config user.email
```

也可以直接编辑 ` /.git/config ` 文件：

```sh {6-7}
....
[branch "main"]
	remote = origin
	merge = refs/heads/main
[user]
	name = JianZhanGou
	email = jianzhangou@foxmail.com
```


如果你想为所有 Git 仓库设置默认的用户名和邮箱，可以使用 ` --global ` 参数执行上述命令。如：

```sh
# 配置全局用户名
git config --global user.name "JianZhanGou"
# 配置全局邮箱
git config --global user.email "jianzhangou@foxmail.com"
```