# anydoor
A Tiny Nodejs Static Web Server
# node调试方法
## 一、chrome调试
 ### 1.chorme安装nim插件
 ### 2.命令行运行 node --inspect-brk 要调试的文件名
 ### 3.打开chrome浏览器，在地址栏输入 Chrome://inspect
 ### 4.在打开的浏览器调试栏中选择要调试的文件，设置断点，其他调试方法同html

 ## 二、vscode调试
 ### 1.点击debug图标
 ### 2.点击添加配置--》选择node环境
 ### 3.这时在项目目录下会生成一个.vscode文件夹，该文件夹下会生成一个launch.json文件
 ### 4.在launch.json文件,修改program文件为你项目的入口文件
 ```
 {
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动程序",
            "program": "${workspaceFolder}/src/index.js"
        }
    ]
}
```
### 5.设置完成后点击启动程序，会自动进入调试界面


