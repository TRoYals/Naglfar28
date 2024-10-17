---
title: 彻底搞懂吃透 Webpack
date: 2024-07-14
article: false
tag: books
---

![](https://i2.hdslb.com/bfs/archive/9492cc1d2b20554ec907282d68527ae8b98abffe.png)

## 模块化规范
#### CommonJS
一个文件就是一个模块  
每个模块都有单独的作用域  
通过 module.exports 导出成员  
通过 require 函数载入模块

问题： 启动时执行， 在 node 环境时会在运行开始时请求；  
在浏览器中不行 (编译动态运行时)

#### AMD（Asynchronous Module Definition）
[Require.js](Require.js)
```js
//定义一个馍快
define('module1', ['jquery', '/module2'], function ($, module2) {
    return {
        start: function () {
            $('body').animate({
                margin: '200px'
            });
            module2();
        }
    };
});
require(['module1'], function(module1) { module1.start(); });
```

## ES Module（浏览器）

ECMAScript 2015(ES6) 出现浏览器不支持，通过 webpack 打包使得普及。

 ES Module 特性
 1. ESM 采用严格模式，忽略 'use strict'
 2. 每个 ES Module 都是进行在单独的私有作用域中
 3. ESM 是通过 CORS 的方式请求外部 JS 模块的
 4. ESM 的 script 标签会延迟执行脚本（自带 defer）

todo：  
解决常见的循环依赖场景。（表单规则）

UMD 实现（todo）
1. webpack 打包导出几种模式
2. webpack gulp redux

## Webpack 打包
### 为什么
1. ES Module 存在环境兼容问题
2. 模块文件过多，网络请求频繁
3. 其他的前端资源也需要模块化
4. ES6 的新特性

步骤：
1. 编译代码（ES6->ES5）
2. 模块打包（解决网络请求问题）
3. 多类型模块支持
 ## Webpack 工作模式
mode 来决定

## Webpack 插件
### Webpack 插件列表
#### 自动清除输出目录插件
`clean-webpack-plugin`
#### 自动生成 HTML 插件
意思就是 html 文件在根目录里而不是 `dist` 目录里  
需要这个插件来把 html 生成到 `dist` 里。  
`html-webpack-plugin` 插件  
![image.png](https://oss.naglfar28.com/naglfar28/202407221017209.png)  
每个 `HtmlWebpackPlugin` 生成一个页面实例
#### 拷贝静态资源实例
`CopyWebpackPlugin`  
![image.png](https://oss.naglfar28.com/naglfar28/202407221020453.png)  
拷贝 `publc` 下的内容到 `dist` 目录

### Webpack plugin 开发
`Plugin` 通过 `hooks` 机制来实现  
插件必须是一个函数或者是一个包含 `apply` 方法的对象

[compiler 钩子 | webpack 中文文档](https://webpack.docschina.org/api/compiler-hooks/)  
[Tapable，看这一篇就够了 - 掘金](https://juejin.cn/post/7040982789650382855)

tapable 是 Webpack 的核心  
[聊聊 Webpack 那些事 - 丑陋的 tapable - 掘金](https://juejin.cn/post/6860688500392787982?from=search-suggest)  
[简单认识下tapable - 掘金](https://juejin.cn/post/7289767547330773047)

### Webpack 开发体验
1. 在使用 `webpack` 时使用 `webpack --watch` 来监视  

#### Webpack-dev-server
Webpack Dev Server 提供用于开发的 http server  
![image.png](https://oss.naglfar28.com/naglfar28/202407221058185.png)

`changeOrigin` 这里的概念还需要在清楚一些，这里更改是的请求头中的 `host` 字段。

#### Source map
![image.png](https://oss.naglfar28.com/naglfar28/202407221359107.png)  
![image.png](https://oss.naglfar28.com/naglfar28/202407221402436.png)

![](https://oss.naglfar28.com/naglfar28/202407221332468.png)

[不同模式下的对比](https://github.com/zce/webpack-demo/blob/511e55334bf605bb1616ecec1630f9e090ac18b4/22-devtool-diff/dist/cheap-eval-source-map.html#L9)

##### 选择哪个 sourceMap 呢？
开发模式

#### Hot Module Replacement （HMR）
模块**热**替换/模块热更新 （热拔插）  
即可以在一个正在运行的机器上随时更新设备，应用运行状态不更改

HMR 是 Webpack 最核心的功能之一！！

![image.png](https://oss.naglfar28.com/naglfar28/202407221410996.png)  
在当前模式下，样式文件是开箱即用的，因为在 `style-loader` 中经过处理。  
而 JavaScript 文件中，没有很好的模式替换规则，所以无法使用。  
在框架体系中（如 React App），存在很好的替换办法，这时 HMR 对于 JS 的变化是支持的。  

[HMR API 手动控制JS热替换](https://www.bilibili.com/video/BV1kP41177wp?t=21.0&p=54)  
![image.png](https://oss.naglfar28.com/naglfar28/202407221419533.png)

![image.png](https://oss.naglfar28.com/naglfar28/202407221422926.png)  
一个手动替换方案，这也太麻烦了！

## 生产环境
**生产环境注重运行效率**
### 不同环境下的配置方式
![image.png](https://oss.naglfar28.com/naglfar28/202407221437404.png)  
![image.png](https://oss.naglfar28.com/naglfar28/202407221444626.png)  
![image.png](https://oss.naglfar28.com/naglfar28/202407221444377.png)

## Webpack 优化
### DefinePlugin
![image.png](https://oss.naglfar28.com/naglfar28/202407221603657.png)

### Tree Shaking
Dead Code 删除**未引用**代码  
![image.png](https://oss.naglfar28.com/naglfar28/202407221617387.png)
### Code Splitting
#### 多入口打包
不同入口中会有公共模块  
这样同一个模块会被重复导入  
通过 SplitChunks 配置
#### 动态导入
[详解JavaScript中的'动态 import ()'用法 - 掘金](https://juejin.cn/post/7222577873793777723)

使用 `MiniCssExtractPlugin` 来分包打包 CSS 文件  
![image.png](https://oss.naglfar28.com/naglfar28/202407221900181.png)

### Webpack 输出文件名 Hash
生成模式下，文件名使用 Hash
::: info
为什么？

因为这样可以解决缓存问题，每次请求的都是新文件，可以设定长时间过期文件。
:::
在 `filename` 设置 `[hash]` 和 `[chunkhash]` 和 `[contenthash]`  
通过 `[hash:8]` 来指定 hash 长度。

## TODO
> webpack 想学好还是需要不少前置知识的，就比如文件名为什么要带 contenthash，就涉及到 http 缓存的东西。又比如 hmr 为什么要用 module.hot.accept，这里面涉及到 devServer 与浏览器建立 socket 以及 webpack 注入运行时的一些处理。我第一遍看的时候也是很懵，知道怎么做但是不知道为什么这样做。后面慢慢的完善了知识体系才算入门了 webpack。有空可以多看看相关的技术文章，视频最多只是入门，有很多东西光看视频是不会知道

1. eslint 和 babel 的策略问题
2. umd 导出兼容（babel）
3. 循环依赖