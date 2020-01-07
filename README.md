## 学习typescript的代码

### 全局安装typescript
```
  yarn global add typescript 
```

### 编译ts
tsc命令会直接根据tsconfig.json配置进行编译
```
  tsc  
```

### watch模式
在配置中开启"compileOnSave": true,告诉IDE要开启自动编译
```shell
 tsc -w  // 之后代码改变保存之后会自动进行编译

```

### 执行
编译的目标是es5代码，可以直接用node执行

```
  node dist/

```








