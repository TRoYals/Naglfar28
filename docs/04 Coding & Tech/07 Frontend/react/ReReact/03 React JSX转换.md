---
title: 03 React JSX转换
date: 2024-05-15
article: false
tag:

---

1. 实现 jsx 方法  
2. 实现打包流程  
3. 实现调试打包结果的环境

[Babel · The compiler for next generation JavaScript](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.24.5&externalPlugins=&assumptions=%7B%7D)  
Babel 中试一试看看什么是 JSX 转换  
  
```<div class="test">123{test}234test<p>123</p><p>123</p></div>```
```
React.createElement("div", {  
  class: "test"  
}, "123", test, "234test", React.createElement("p", null, "123"), React.createElement("p", null, "123"));
```
```
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";  
_jsxs("div", {  
  class: "test",  
  children: ["123", test, "234test", _jsx("p", {  
	children: "123"  
  }),_jsx("p", {  
	children: "123"  
  })]  
});
```


ReactElement 类型定义  
  
reReact/packages/shared/ReactSymbols.ts 使用 [Symbol](../../../01%20Programming%20Language/04%20JavaScript/JavaScript) 来实现
```
//检查环境是否支持 Symbol  
const supportSymbol = typeof Symbol === 'function' && Symbol.for;  
//创建一个 Symbol  
export const REACT_ELEMENT_TYPE = supportSymbol  
? Symbol.for('react.element')  
: 0xeac7;
```


### 什么是 JSX
  
[React系列--JSX到底是什么东西 - 掘金](https://juejin.cn/post/7034765440362479646)  


React.createElement() 方法  

```ts
function createElement(tag, attrs, ...children) { 
attrs = attrs || {}; // 返回一个JS对象，也就是虚拟Dom
return { tag, attrs, children, key: attrs.key || null, }; 
}
```


```<div class="test">123{test}234test<p>123</p><p>123</p></div>```
```
React.createElement("div", {  
  class: "test"  
}, "123", test, "234test", React.createElement("p", null, "123"), React.createElement("p", null, "123"));
```
如何转换?
```ts
export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: any = {};
	let ref: Ref = null;
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (hasValidKey(config)) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref' && val !== undefined) {
			if (hasValidRef(config)) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		// 将多余参数作为children
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}
	return ReactElement(type, key, ref, props);
};
```

### 各节点类型
- JSX
- React Element
- Fiber Node
- DOM Element


