## git是什么

```
分布式版本控制系统 (dvcs) => git 集中式版本控制系统 (vcs) => svn
```

## git的作用

```
在项目开发的进程中 对值得记录的时间节点进行“备份”方便后期恢复 （后悔药） 方便团队协作开发
```

## git管理文件的三种状态

```
Git 有三种状态，你的文件可能处于其中之一

已修改（modified）已修改表示修改(新增、更新、删除)了文件，但还没保存到数据库中。(红色)
已暂存（staged）已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。
已提交（committed）已提交表示数据已经安全地保存在本地数据库中。 已提交表示数据已经安全地保存在本地数据库中。

U 未跟踪 (新增)
A (added) 将所有文件放到暂存区(经常做的)
M (modified)跟踪后被修改
```

## 初次运行 GIT配置

```bash
配置用户名和邮箱
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com

查看用户名和邮箱
git config --list
git config user name
git config user.email
```
## 获取Git 仓库(repo)

```
--自行初始化git仓库 (git init)
--克隆远程仓库(git clone [repo_url])
git clone http://192.168.122.33:3080/shenhongchun/SLXM.git
```

## 命令的使用

```
查看状态
git status

创建仓库
git init

将所有文件提到暂存区
git add .

将所有文件从暂存区将暂存区文件提交到仓库（某个功能完成的时候/在必要的时候
git commit -m "提交信息"

查看提交
git log 

上传到云端
绑定
git remote add 【别名】 【地址】
查看
git remote -v
删除
git remote rm 【别名】
上传
git push -u 【别名】 master
推送本地分支
git push -u 【别名】 main

```



## 创建快照(备份)

```
git add  将所有文件放到暂存区(经常做的)
git commit -m '提交信息' 将暂存区文件提交到仓库(某一个功能完成的时候/在必要时提交)


[工作区]-->git add .[暂存区] ---git commit -m 'xxxx' -->[repo]
[工作区]-->git commit -a -m 'xxx' -->[repo](vim编辑器操作)\

git reset --soft commit_id 将指定版本退回到暂存区
git reset --hard commit_id  将当前版本删除
git reset --mixed  commit_id  将指定版本回退到工作区

HEAD=>当前版本
HEAD=^=>当前版本的上一个版本
HEAD~ n =>当前版本的n版本


[暂存区]<--git reset --soft commit_id---[repo]

[工作区]<--git reset -- commit_id---[repo]

[移除]git reset --hard commit_id [repo]


把第三次提交回炉重做

将修改的文件从工作区添加到暂存区：

git add <文件名>
将暂存区的文件提交到版本库（repo）：

git commit -m "提交信息"
查看当前状态，包括工作区、暂存区和版本库：

git status
查看文件的具体修改内容：

git diff <文件名>
撤销对文件的修改，将文件恢复到最后一次提交的状态（仅限工作区）：

git checkout -- <文件名>
撤销已经添加到暂存区的文件，将文件移出暂存区并恢复到工作区的状态：

git reset HEAD <文件名>
查看提交历史记录：

git log
创建新分支：

git branch <分支名>
切换到指定分支：

git checkout <分支名>
将一个分支的修改合并到当前分支：

git merge <分支名>
```

## 常用命令集合

```
git init：在当前目录初始化一个新的 Git 仓库。

git clone <repository>：克隆（下载）一个远程仓库到本地。

git add <file>：将文件添加到暂存区，准备进行提交。

git commit -m "commit message"：提交暂存区中的文件，并附上提交信息。

git status：查看当前工作区和暂存区的状态，显示是否有修改、新增或删除的文件。

git pull <remote> <branch>：从远程仓库拉取最新代码并合并到当前分支。

git push <remote> <branch>：将本地分支的提交推送到远程仓库。

git branch：列出所有本地分支，包括当前所在分支。

git checkout <branch>：切换到指定分支。

git merge <branch>：将指定分支的更改合并到当前分支。

git log：查看提交日志，显示历史提交记录。

git remote add <name> <url>：将远程仓库的 URL 添加到本地 Git 仓库，并指定一个简短的别名。

git remote -v：显示所有远程仓库的详细信息。

git diff：显示工作区和暂存区之间的差异。

git reset <file>：将文件从暂存区移除，但保留在工作区中。
```

