### 基本操作

更新到缓冲区

```
git add .
```

提交到本地仓库Head

```
git commit -m "描述性语言"
```

查看当前branch（默认都是master）

```bash
git branch 
```

上传到指定分支

```
git push origin master(分支名，根据实际情况写)

git push -f origin master(强制提交覆盖，不推荐)
```



查看当前较为变化时状态 

```
git status
```

查看add后的变化

```
git diff --cached
```

查看commit日志

```
git log
```

查看某次commit的变化

```
git show commit的id（在git log中可以看到）
```

撤回修改到上次add

```
git checkout .
(.是把所有文件都恢复至上次add)
```



查看当前分支

```
git branch
```

创建新的分支（以创建feature_x分支为例）

```
git checkout -b feature_x
或者直接
git branch feature_x
```

切换到目标分支

```
git checkout feature_x
```



使用 VPN Clone项目速度很慢，需要更改全局代理

```bash
//更改git全局代理
git config --global http.proxy http://127.0.0.1:7890

//取消全局代理设置
git config --global --unset http.proxy
```



### 问题解决

#### git push 出现Everything up-to-date

git push 出现Everything up-to-date，可用如下方法解决

1.创建一个新的分支：

```bash
git branch newBranch
```

2.查看分支是否创建成功：

```bash
git branch
```

3.切换到此分支：

```bash
git checkout newBranch
```

4.把代码直接提到远程的newBranch分支上，如果出现以下提示：

```bash
The current branch newbranch has no upstream branch.To push the current branch and set the remote as upstream, use...
```

直接执行

```bash
git push --set-upstream origin newbranch
```

就可以啦

5.切换到原来想要提交代码的分支，**把newBranch合并到master分支上：**

```bash
git merge newBranch
```

6.**合并之后如果发现有冲突，可git diff查看有冲突的文件**

7.**最后就可以重新提交一下代码了，直接git push就可**

8.newBranch分支别忘了删除哟 ！

```bash
本地删除：git branch -D newBranch
远程删除：git push origin --delete newBranch
远程分支查看是否删除成功：git branch -r
```



git clone 或 git push 出现443 Timeout



#### git push 后子文件夹无法打开

git bash执行 git rm -r --cached "灰色文件夹的名称"

删除本地文件夹隐藏的.git文件重新上传即可
