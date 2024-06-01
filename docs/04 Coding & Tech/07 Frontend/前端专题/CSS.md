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
  
![](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071001.gif)  
如何指定 flex 布局
```css
.box{
  display: flex;
行类元素: 
  display:inline-flex;
}
```
![image.png](https://oss.naglfar28.com/naglfar28/202405171816852.png)  
容器的属性
```css
- flex-direction (决定主轴的方向): row|row-reverse|column|column-reverse;
- flex-wrap (定义一条轴线排不下如何换行): nowrap(不换行)|wrap(换行,第一行在上)|wrap-reverse(换行,第一行在下);
- flex-flow (flex-direction和flex-wrap的简写): <flex-direction>||<flex-wrap>
- justify-content (定义了项目在主轴上的对齐方式): flex-start(左对齐)|flex-end(右对齐)|center(居中)|space-between(两端对齐,间隔相等)|space-a(每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。)
- align-items (定义项目在交叉轴上如何对齐): flex-start(交叉轴的起点对齐)|flex-end(交叉轴的终点对齐)|center(中点)|baseline(项目的第一行文字的基线对齐。)|stretch(默认值:如果项目未设置高度或设为auto，将占满整个容器的高度。)
- align-content(定义多根轴线的对齐方式):flex-start|flex-end|center|space-between|space-around|strench:
```
![](https://oss.naglfar28.com/naglfar28/202405171822392.png)  
![align-items 属性](https://oss.naglfar28.com/naglfar28/202405171825397.png)  
![align-content属性](https://oss.naglfar28.com/naglfar28/202405171826622.png)
#### 项目属性
```css
- `order`: <integer> 定义了具体盒子的顺序,数值越小越靠前, 默认为0.
- `flex-grow`:<number> 默认定义项目放大的比例,默认为0.
- `flex-shrink`:<number> 膜热缩小比例, 默认为1.
- `flex-basis`: <length>|auto 默认为auto. 定义了在分配多余空间之前, 项目占据的主轴空间
- `flex`: 是flex-grow, flex-shrink,和flex-basis的缩写, 默认值为 0 1 auto,优先使用这个属性而不是三个分别写
- `align-self`: auto|flex-start|flex-end|center|baseline|stretch 同align-items
```
![](https://oss.naglfar28.com/naglfar28/202405172036523.png)  


[position的种类和relative与absolute的区别 - 作业部落 Cmd Markdown 编辑阅读器](https://www.zybuluo.com/panhonhang/note/1144259)  

```
1. position:absolute;   
```
生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。  
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。  
[您可以亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=csse_position_absolute)
```
2. position:fixed;  
```
生成绝对定位的元素，相对于浏览器窗口进行定位。  
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。  
[您可以亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=csse_position_fixed)
```
3. position:relative;   
```
生成相对定位的元素，相对于其正常位置进行定位。  
比如 "top:100px" 会向元素的 TOP 位置添加 100 像素。而 "top:-100" 会向元素的 TOP 位置减少 100 像素。  
[您可以亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=csse_position_relative)
```
4. position:static;
```
默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。如果没有设置则默认为 position:static。
```
 5. position:inherit;
```
规定应该从父元素继承 position 属性的值。
```
6. z-index
```
优先级。默认的 z-index 是 0。如果要一个元素放置在另一个后面可以将它的 z-index 设置为负数，比如 "z-index:-1"。同理假如要一个元素放置在另一个的前面就将它的 z-index 设置为正数，比如 "z-index:1"。这是由于默认的 z-index 是 0。z-index 值越高优先级越高。  
[详情参考W3School](http://www.w3school.com.cn/cssref/pr_class_position.asp)  
relative 与 absolute 的区别
```
absolute是绝对定位；而relative是相对定位；
```
解释：  
绝对定位就是相对于父元素的定位，不受父元素内其他子元素的影响；  
而相对定位是相对于同级元素的定位，也就是上一个同级元素!  
position:relative 相对定位。  
relative 是相对定位，相对于本身的位置，元素的位置通过 "left", "top", "right" ，"bottom" 属性进行定位。left 是离原坐标 x 轴的距离，top 是离原坐标 y 轴的距离，它本身的位置还在。  
absolute 是绝对定位，相对于窗口左上角的位置，元素的位置通过 "left", "top", "right" 以，"bottom" 属性进行定位。left 是离窗口左上角 x 轴的距离，top 是离窗口左上角标 y 轴的距离，不占有空间。  
如果你有两个包含关系的 div，父 div 的样式是 position：relative，子 div 的样式是 position：absolute，那么子 div 的位置是相对于父的 div 的来进行定位的  


[面试官：谈谈你对BFC的理解？ | web前端面试 - 面试官系列](https://vue3js.cn/interview/css/BFC.html#%E4%B8%89%E3%80%81%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)  
  
**Block Formatting Context**  
[前端人员不要只知道KFC，你应该了解 BFC、IFC、GFC 和 FFC - 前端南玖 - 博客园](https://www.cnblogs.com/songyao666/p/15975026.html)  
在前端开发中，BFC（Block Formatting Context）是一个独立的布局环境，元素在该环境中按照特定的规则布局，不会影响外部元素，并且可以用来解决各种布局问题如清除浮动和避免重叠。
- Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。  
就是说, 同一个 CSS 布局下的元素,可能会出现 block 重叠!  
这篇文章写的太好了, 给我看!!  
[前端人员不要只知道KFC，你应该了解 BFC、IFC、GFC 和 FFC - 前端南玖 - 博客园](https://www.cnblogs.com/songyao666/p/15975026.html)  


[面试官：什么是响应式设计？响应式设计的基本原理是什么？如何做？ | web前端面试 - 面试官系列](https://vue3js.cn/interview/css/responsive_layout.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88)  
 
```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no”>
```


CSS 画三角  
 
```
.trang {
height: 0;
width: 0;
border-left: 25px solid transparent;
border-right: 25px solid transparent;
border-top: 50px solid #C8A2C8;
border-bottom: 50px solid #C8A2C8; 
}
```


### [面试官：怎么理解回流跟重绘？什么场景下会触发？ | web前端面试 - 面试官系列](https://vue3js.cn/interview/css/layout_painting.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88)
  
回流： 布局引擎根据各种样式计算每个盒子在页面的大小和位置  
重绘： 当计算好盒模型的位置，大小及其他属性后，浏览器根据每个盒子的特性进行绘制。  
![](https://static.vue-js.com/2b56a950-9cdc-11eb-ab90-d9ae814b240d.png)
- 解析 HTML，生成 DOM 树，解析 CSS，生成 CSSOM 树
- 将 DOM 树和 CSSOM 树结合，生成渲染树 (Render Tree)
- Layout(回流): 根据生成的渲染树，进行回流 (Layout)，得到节点的几何信息（位置，大小）
- Painting(重绘): 根据渲染树以及回流得到的几何信息，得到节点的绝对像素
- Display: 将像素发送给 GPU，展示在页面上  
触发回流一定会触发重绘

