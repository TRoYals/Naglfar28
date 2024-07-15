---
title: JavaScript设计模式与开发实践
date: 2024-06-18
article: true
tag:
---

![](https://oss.naglfar28.com/naglfar28/202406181027889.png)

本书根据 JavaScript 语言的特性,全面总结了实际工作中常用的设计模式。全书共分为三个部分,第一部分讲解了 JavaScript 语言面向对象和函数式编程的知识及其在设计模式方面的作用; 第二部分通过一步步完善示例代码,由浅入深地讲解了 16 个设计模式; 第三部分讲述了面向对象的设计原则及其在设计模式中的体现,以及一些常见的面向对象编程技巧和日常开发中的代码重构。

## 前言
### 什么是设计模式？
设计模式的定义是: 在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。  
通俗一点说,设计模式是在某种场合下对某个问题的一种解决方案。如果再通俗一点说,设计模式就是给面向对象软件开发中的一些好的设计取个名字。

## 基础部分
### this, call 和 apply
call 和 apply 方法能很好的体现 Javascript 的函数式语言特性， 在 Javascript 中几乎每一次编写函数式语言风格的代码， 都离不开 call 和 apply。
#### call 和 apply 的用途（实际开发场景）
1. **改变 `this` 指向**
2. `Function.prototype.bind`  
   `bind` 方法返回一个新的函数，并且这个新函数的 `this` 被绑定到指定的对象，不会因为调用时的环境而改变。
```js
var obj = {
    name: 'sven',
    getName: function() {
        alert(this.name);
    }
};
document.getElementById('button').onclick = obj.getName.bind(obj);
```
3. 借用其他对象的方法  
![image.png](https://oss.naglfar28.com/naglfar28/202406181120921.png)  
	测试，实现一个 wrapper，能把输入的参数作为一个列表输出：
```js
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
function printArguments(func) {
    return function(...args) {
        console.log(args);
        return func.apply(this, args);
    };
}
const sumWithPrint = printArguments(sum);
sumWithPrint(1,2,3)
```

### 闭包和高阶函数
#### 闭包的开发作用
1. **封装变量**  
比如，做 leetcode 2 sum 的时候， 可以维护一个闭包 dir 来记录出现过的数字。即起到一个**缓存**的作用。
2. **延续局部变量的寿命**  
![image.png](https://oss.naglfar28.com/naglfar28/202406181617160.png)
3. **闭包和面向对象设计**  
   感觉挺抽象的。。。
4. **用闭包实现命令模式**

#### 高阶函数
1. 把函数作为参数传递
2. 把函数作为返回值输出
- 判断数据的类型  
  `Object.prototype.toString.call([1,2,3]) 总 是 返 回 "[object Array]", 而 Object.prototype.toString.call(“str”) 总是返回 "[object String]"。`  
  一个打印 `isType` 的方法：  
```
var isType = function(type){     
return function(obj){         
	return Object.prototype.toString.call(obj) === '[object '+ type +']';     
	} 
};
```
- `getSingle`
```js
var getSingle = function(fn){
	var ret;
	return function({
		return ret||(ret = fn.apply(this,arguments));
	}
}
```

![image.png](https://oss.naglfar28.com/naglfar28/202406181824100.png)

3. 高阶函数实现 AOP  
AOP（面向切面编程）的主要作用是把一些跟**核心业务逻辑无关的功能抽离出来**。把这些功能抽离出来之后， 再通过“动态织入”的方式加入业务逻辑模块中。  
有点像 Spring 中的反射和动态代理机制。

## 设计模式
### 单例模式
### 策略模式
定义一系列的算法, 把它们一个个封装起来, 并且使它们可以相互替换

