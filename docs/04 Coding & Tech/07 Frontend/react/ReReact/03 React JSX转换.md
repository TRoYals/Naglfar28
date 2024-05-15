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
  
` <div>123</div>` => `/*#__PURE__*/React.createElement("div", null, "123");`  
` <div>123</div>` =>
```
import { jsx as _jsx } from "react/jsx-runtime";
/*#__PURE__*/_jsx("div", {
  children: "123"
});  
```

ReactElement 类型定义  
  
reReact/packages/shared/ReactSymbols.ts 使用 [Symbol](../../../01%20Programming%20Language/04%20JavaScript/JavaScript) 来实现
```
//检查环境是否支持Symbol
const supportSymbol = typeof Symbol === 'function' && Symbol.for;
//创建一个Symbol
export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
```

