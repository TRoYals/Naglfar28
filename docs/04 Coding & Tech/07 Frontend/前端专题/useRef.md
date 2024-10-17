---
title: useRef
date: 2024-05-17
article: false
tag:
---

了解 `useRef` 的效果可以通过一个具体的示例来更好地说明。`useRef` 在 React 中主要用于以下几个场景：

1. **访问和操作 DOM 元素**
2. **保持一个可变的值，在组件的生命周期内保持不变**
3. **避免在某些情况下重新渲染**

为了更好地理解 `useRef`，我们可以看一个具体的例子来演示它如何工作。

### 示例：使用 `useRef` 访问和操作 DOM 元素

我们将创建一个简单的组件，当用户点击按钮时，自动聚焦到一个输入框上。

```jsx
import React, { useRef } from 'react';

const TextInputWithFocusButton = () => {
  const inputEl = useRef(null); // 创建一个useRef对象

  const onButtonClick = () => {
    // `current`指向已挂载到DOM的文本输入元素
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
};

export default TextInputWithFocusButton;
```

### 解释

1. **创建一个引用对象**：
   ```jsx
   const inputEl = useRef(null);
   ```
   这行代码使用 `useRef` 创建了一个引用对象 `inputEl`，初始值为 `null`。

2. **绑定引用到 DOM 元素**：
   ```jsx
   <input ref={inputEl} type="text" />
   ```
   这里我们使用 `ref` 属性将 `inputEl` 绑定到实际的 DOM 元素（文本输入框）上。当组件挂载时，`inputEl.current` 将指向这个 DOM 元素。

3. **使用引用对象**：
   ```jsx
   inputEl.current.focus();
   ```
   在按钮点击事件处理函数中，我们通过 `inputEl.current` 访问实际的 DOM 元素，并调用其 `focus` 方法使其获得焦点。

### 总结
- `useRef` 创建了一个可以保存可变值的对象，该对象在组件的整个生命周期内保持不变。
- 使用 `ref` 属性可以将这个引用对象绑定到一个 DOM 元素，`ref` 回调函数将在组件挂载时调用，并将 DOM 元素作为参数传递给它。
- 通过引用对象的 `current` 属性可以访问和操作实际的 DOM 元素。

### 深入理解 `useRef`
为了更好地理解 `useRef`，我们可以看更多的示例和使用场景。

#### 示例：保持一个可变的值
有时，我们需要在组件的生命周期内保持一个可变的值，但不希望它的变化触发重新渲染。这时可以使用 `useRef`。

```jsx
import React, { useRef, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0); // 使用useRef保持一个可变的值

  const handleClick = () => {
    setCount(count + 1);
    countRef.current++;
    console.log('Count:', count);
    console.log('CountRef:', countRef.current);
  };

  return (
    <div>
      <p>State count: {count}</p>
      <p>Ref count: {countRef.current}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
```

### 解释

1. **使用 `useRef` 保持一个可变的值**：
   ```jsx
   const countRef = useRef(0);
   ```
   这行代码使用 `useRef` 创建了一个引用对象 `countRef`，初始值为 `0`。

2. **不影响渲染的可变值**：
   ```jsx
   countRef.current++;
   ```
   当按钮点击时，我们增加了 `countRef.current` 的值，但这不会触发组件的重新渲染。

3. **比较 `useState` 和 `useRef`**：
   - `useState` 会触发组件重新渲染。
   - `useRef` 不会触发组件重新渲染，但可以保持值在整个生命周期内。

通过这些示例，希望你能更好地理解 `useRef` 的效果和使用场景。如果你有任何进一步的问题或需要更多的例子，请告诉我。