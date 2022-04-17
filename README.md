## picgo-plugin-addpath

a plugin for picgo , append additional path of upload file.

通过命令行动态修改路径，参考 picgo-plugin-super-prefix 开发

---

## usage:

`picgo u  :addpath /localimg/test.jpeg`

the remote path is  ori-path+ addpath + test.jpeg

the addpath is the param which start with a colon
In typora, Preferences -> Image -> Image Upload Setting, select Custom Command , command = picgo u ":${filename}"

## 使用方法:

`picgo u  :addpath /localimg/test.jpeg`

将上传到原先路径 path+ addpath + test.jpeg 文件

在入参数中，冒号开头的参数即表示此为额外添加的路径。

注意: 如果配置

```json
"picgo-plugin-addpath": {
    "remotePath": ""
  }
```

当命令行不填写 路径参数时，将用 remotePath 的路径添加，默认remotePath 为空
在typora 中，设置自定义模式，直接用 picgo u ":${filename}" 即可

## picgo 界面客户端

如果在配置 “远端添加路径”，则会在原先图库path的路径后添加新的路径

比如原先远端路径是 /img/ ,添加路径为  myfile ，添加文件名为 myPic.png，则最终远端路径为 /img/myfile/myPic.png
