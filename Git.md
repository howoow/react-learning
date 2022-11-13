![image-20220316220240293](C:\Users\Wh\AppData\Roaming\Typora\typora-user-images\image-20220316220240293.png)

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
git push origin master(分支名，可以改成其他分支)

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
git config --global https.proxy https://127.0.0.1:7890

//取消全局代理设置
git config --global --unset https.proxy
```

