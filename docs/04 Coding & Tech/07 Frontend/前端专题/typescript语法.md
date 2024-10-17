---
title: typescript语法
date: 2024-05-14
article: false
tag:
---

## 类
### [面试官：说说你对 TypeScript 中类的理解？应用场景？ | web前端面试 - 面试官系列](https://vue3js.cn/interview/typescript/class.html)
  
`es6` 后 `javascript` 引入 `class` 类型  
但是 `JavaScript` 的 `class` 依然有一些特性还没有加入，比如修饰符和抽象类  
`typeScript` 的 `class` 支持面向对象的所有特性，比如 类、接口等  
继承: 使用 `extends` 关键字  
修饰: 使用 `public`, `private`,`protect`  
静态属性: `static`  
抽象类: 
```ts
abstract class Animal {  
	abstract makeSound(): void;  
	move(): void {  
		console.log('roaming the earch...');  
	}  
}
```
日常使用:
```
export default class Carousel extends React.Component<Props, State> {}
```

