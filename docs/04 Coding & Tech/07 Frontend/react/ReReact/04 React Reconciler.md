---
title: 04 React Reconciler
date: 2024-05-16
article: false
tag:

---

## Reconciler 有什么用

### 什么是编译时,什么是运行时,在前端框架中
[理解前端框架的编译时与运行时 - 掘金](https://juejin.cn/post/7226160454794838053)  
[前端框架的运行时与编译时 - 徐航宇 - 博客园](https://www.cnblogs.com/xhyccc/p/16349481.html)  
这里用到了 递归 (仅作参考, 效率很低)  
这是 redener
```js
function render(vDom, container) {
  const el = document.createElement(vDom.tag);
  el.id = vDom.id;
  if (!vDom.children || vDom.children.length === 0) {
    container.append(el);
    return;
  }
  for (let i = 0; i < vDom.children.length; i++) render(vDom[i], el);
}
```
这是 VDom
```
const vDom = {
  tag: "div",
  id: "app",
  children: [
    {
      tag: "h1",
      children: ["Hello World"],
    },
  ],
};
```
直接写 VDom 太麻烦了, 所以我们需要 [JSX](03%20React%20JSX转换) 来实现  
```<div>{item1}</div>``` 通过使用 jsx 来快速渲染的目的, 这个过程称为 `complier/reconciler`  
简单来说就是 实际上 `reconciler` 很复杂, 因为他要实现一个能记录节点关系 的数据结果而不是 reactElement  
`JSX`=>(bible)=>`compiler/reconciler`=>`Vdom`=>`redener`=>`Dom`  
因为要记录节点间的关系, 我们引入了 `FiberNode`(虚拟 Dom 在 React)

### react 的 fiber 递归
```		
// 树结构
this.return = null;
this.sibling = null;
this.child = null;
this.index = 0;
```
[React技术揭秘双缓存](https://react.iamkasong.com/process/doubleBuffer.html#%E4%BB%80%E4%B9%88%E6%98%AF-%E5%8F%8C%E7%BC%93%E5%AD%98)

啓旋