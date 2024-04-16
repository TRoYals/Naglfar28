---
title: vuepress blog
date: 2024-04-16
article: false
tags: 
---

## 中文字母编码问题
### 问题描述
[2024-04-15](../../../10IMYMEMINE/日记/2024-04-15) 的时候尝试更新 Vuepress 到 V2, 所有的内容都更新部署完后, 在实际使用时发现了一个问题:  
任何被 url 编码过的含中文字符和空格字符的 url 都无法直接访问, 并且网页刷新时会报 404 的错误.  
举例, 形如  
<https://www.naglfar28.com/02%20Reading/02%20%E4%B9%A6%E7%B1%8D/The%20art%20of%20impossible.html>  
的网页无法访问, 元链接是  
<https://www.naglfar28.com/02> Reading/02 书籍/The art of impossible.html>
### 环境背景
以 dev 形式在本地上时并不会出现这种问题,但是部署在 netilfy 之后会会出现这样的问题
### 可能的解决方案
1. netlify 路由问题?  
2. 域名问题 (cloudfare) 解析?  
3. Vuepress V2 问题, V1 没有这个问题.
4. CDN 问题?
### 现阶段解决方案
在 vuepress 中, 每一层路由的名称都是文件所属文件夹, 考虑到自己使用 obsidian 作为笔记软件, 不使用中文字符和空格作为文件夹名这一点很难做到.. 于是再三考虑, 将 Vuepress 版本回退到了 V1.
