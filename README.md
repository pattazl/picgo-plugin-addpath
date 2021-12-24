## picgo-plugin-addpath

a plugin for picgo , append additional path of upload file.

通过命令行动态修改路径，参考 picgo-plugin-super-prefix 开发

---

## usage:

`picgo u  :addpath /localimg/test.jpeg`

the remote path is  ori-path+ addpath + test.jpeg

the addpath is the param which start with a colon

## 使用方法:

`picgo u  :addpath /localimg/test.jpeg`

将上传到原先路径 path+ addpath + test.jpeg 文件

在传入的参数中增加 :开头的路径即可
