---
title: JS基础
date: 2024-05-21
article: false
tag:
---

### [面试官：说说var、let、const之间的区别 | web前端面试 - 面试官系列](https://vue3js.cn/interview/es6/var_let_const.html#%E4%B8%80%E3%80%81var)  
 
- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量

### [面试官：ES6中数组新增了哪些扩展？ | web前端面试 - 面试官系列](https://vue3js.cn/interview/es6/array.html#%E4%B8%80%E3%80%81%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6%E7%9A%84%E5%BA%94%E7%94%A8)  
 
- `[...[1,2,3]]`
- Array.from(),Array.of()
- flat()，flatMap()

[面试官：对象新增了哪些扩展？ | web前端面试 - 面试官系列](https://vue3js.cn/interview/es6/object.html#%E4%B8%80%E3%80%81%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99)  
 

### 手写 instanceOf
 
```js
const instanceof_ = function (A, B) {
	if (typeof A !== 'object' || A === null || typeof B != 'function') {
		return false;
	}
	const prototype = B.prototype;
	let __proto__ = A.__proto__;
	while (true) {
		if (__proto__ === null) {
			return false;
		}

		if (prototype === __proto__) {
			return true;
		}

		__proto__ = __proto__.__proto__;
	}
};
class Person {
	constructor() {
		this.a = 123;
	}
}
let b = new Person();
console.log(instanceof_(b, Person)); //true
console.log(b instanceof Person); //trues
```