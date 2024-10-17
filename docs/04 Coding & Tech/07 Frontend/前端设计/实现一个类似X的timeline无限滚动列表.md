---
title: 实现一个类似X的timeline无限滚动列表
date: 2024-05-17
article: false
tag:
---

[设计高性能无限滚动加载，了解高效页面秘密 - 知乎](https://zhuanlan.zhihu.com/p/25767226)

[性能优化](../前端专题/性能优化)  
使用 console.time 方法与 console.timeEnd 方法进行性能测量

在无限下滑的例子中  
我们需要设计一个懒加载效果，使得页面速度更快  
为了避免到真正的页面底部时才进行加载和渲染，而造成用户较长时间等待。我们可以设置一个合理阈值，在用户滚动到页面底部之前，先进行提前加载  
另外，页面滚动的事件肯定是需要监听的。同时，页面滚动问题也比较棘手，后面将专为滚动进行分析。

## 整体设计
1. 懒加载 (提前渲染)
2. 监听滚动事件

## 监听滚动事件
高频率的触发滚动事件处理上

[IntersectionObserver API 使用教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

