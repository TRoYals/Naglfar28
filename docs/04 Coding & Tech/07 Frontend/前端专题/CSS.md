---
title: CSS
date: 2024-05-15
article: false
tag:

---

source:  
[「2021」高频前端面试题汇总之CSS篇 - 掘金](https://juejin.cn/post/6905539198107942919)

### 什么是伪元素

- 伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：
- - 伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/TRoYals/embed/preview/rNgVrYY?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/TRoYals/pen/rNgVrYY">
  Untitled</a> by Naglfar28 (<a href="https://codepen.io/TRoYals">@TRoYals</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
https://codepen.io/TRoYals/pen/rNgVrYY


### 隐藏元素的方法有哪些

- **display: none**：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。
- **visibility: hidden**：元素在页面中仍占据空间，但是不会响应绑定的监听事件。
- **opacity: 0**：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。
- **position: absolute**：通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。
- **z-index: 负值**：来使其他元素遮盖住该元素，以此来实现隐藏。
- **clip/clip-path** ：使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。
- **transform: scale(0,0)**：将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。  


### display:none 与 visibility:hidden 的区别
  
（1）**在渲染树中**
- `display:none` 会让元素完全从渲染树中消失，渲染时不会占据任何空间；
- `visibility:hidden` 不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。  
 (2）**是否是继承属性**
- `display:none` 是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
- `visibility:hidden` 是继承属性，子孙节点消失是由于继承了 `hidden`，通过设置 `visibility:visible` 可以让子孙节点显示；  
（3）修改常规文档流中元素的 `display` 通常会造成文档的重排，但是修改 `visibility` 属性只会造成本元素的重绘；  
（4) 如果使用读屏器，设置为 `display:none` 的内容不会被读取，设置为 `visibility:hidden` 的内容会被读取。  


## 盒模型
###  对盒模型的理解
  
content - padding - border - margin  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4544d45b5a0c47a58c0c33a7d8fbac09~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)  
[盒模型 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)

### position:inline 和 position:block 区别
  
<https://codepen.io/TRoYals/pen/VwOLBdN>

## Flex 布局
[Flex 布局教程：语法篇 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)  
 



