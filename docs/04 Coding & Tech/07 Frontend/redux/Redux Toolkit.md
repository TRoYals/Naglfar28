---
title: Redux Toolkit
date: 2024-05-28
article: false
tag:
---

## 最小实现

当然，这里是一个使用 Redux Toolkit (RTK) 的最小实现示例，包括创建一个简单的计数器应用。这个示例将展示如何创建一个 Redux store、定义一个 slice，并在 React 组件中使用 `useSelector` 和 `useDispatch`。

### 1. 安装依赖

首先，确保你已经安装了 Redux Toolkit 和 React-Redux：

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. 创建 Slice

创建一个包含计数器逻辑的 slice。

```javascript
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

### 3. 配置 Store

配置 Redux store 并将 slice 的 reducer 添加到 store 中。

```javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

### 4. 创建 React 组件

创建一个简单的计数器组件，使用 `useSelector` 获取状态，使用 `useDispatch` 发送 actions。

```javascript
// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
```

### 5. 提供 Store 给 React 应用

使用 `Provider` 将 Redux store 提供给整个 React 应用。

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### 目录结构

你的项目目录结构可能如下所示：

```
my-app/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── counter/
│   │       └── counterSlice.js
│   ├── App.js
│   └── index.js
└── package.json
```

## 什么是 Slice

在 Redux Toolkit 中，`slice` 的概念可以理解为状态管理中的一个模块。每个 `slice` 代表应用状态的一部分以及管理这部分状态的逻辑。具体来说，`slice` 包含以下内容：

1. **状态（State）**：这部分状态在 Redux store 中的初始值。
2. **操作（Actions）**：描述如何更新这部分状态的动作。
3. **处理器（Reducers）**：定义具体的状态更新逻辑。

### 直观类比

可以把 `slice` 想象成一本书中的一个章节。每个章节都专注于一个特定的主题，并且包含与该主题相关的信息和故事情节。同样，一个 `slice` 专注于应用状态的一部分，包含了处理这部分状态的初始值、更新逻辑和动作。

### 示例和解释

以下是一个使用 `createSlice` 的示例，以及逐步解释其含义：

```javascript
import { createSlice } from "@reduxjs/toolkit";

// 定义用户 Slice
const userSlice = createSlice({
  name: "user", // Slice 的名称，标识这个模块
  initialState: { // 初始状态
    users: [],
  },
  reducers: { // 定义 reducers，描述如何更新状态
    setUsers(state, action) {
      state.users = action.payload; // 设置用户数据
    },
    addUser(state, action) {
      state.users.push(action.payload); // 添加用户
    },
    removeUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload.id); // 移除用户
    },
  },
});

// 导出 actions 和 reducer
export const { setUsers, addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
```

### 逐步解释

1. **name**:
   - `name` 属性定义了这个 slice 的名称。在这个例子中，slice 的名称是 "user"。这个名称会被用作生成 action 类型的前缀。

2. **initialState**:
   - `initialState` 属性定义了这个 slice 的初始状态。在这个例子中，初始状态是一个包含 `users` 数组的对象。

3. **reducers**:
   - `reducers` 属性是一个对象，定义了处理状态更新的函数。每个函数代表一种状态更新逻辑（即 reducer）。
   - **setUsers**:
	 - 这个 reducer 函数接收当前状态和一个 action，将状态中的 `users` 更新为 `action.payload`。
   - **addUser**:
	 - 这个 reducer 函数接收当前状态和一个 action，将 `action.payload` 添加到 `users` 数组中。
   - **removeUser**:
	 - 这个 reducer 函数接收当前状态和一个 action，过滤掉 `users` 数组中 id 与 `action.payload.id` 不匹配的用户。

### 如何使用

在实际应用中，`slice` 使得状态管理模块化。例如，如果你有一个复杂的应用程序，你可以有多个 `slice`，每个 slice 处理应用程序状态的一部分，例如用户数据、商品数据、订单数据等。

```javascript
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export default store;
```

在这个示例中，`configureStore` 将多个 `slice` 组合到一个 Redux store 中，每个 `slice` 管理自己的一部分状态。

### 总结

- **Slice** 就是一个模块，管理应用状态的一部分及其更新逻辑。
- **createSlice** 将状态、动作和处理器结合在一起，减少样板代码，简化 Redux 状态管理。
- `slice` 的目的是使代码更加模块化和易于维护。

## 什么是 payload
`action.payload` 中的 `payload` 是指通过 Redux action 传递的数据。让我们详细解释一下 `payload` 的含义及其在 Redux 中的作用。

### 什么是 Action？

在 Redux 中，`action` 是一个简单的 JavaScript 对象，用于描述发生了什么。每个 action 对象至少包含一个 `type` 属性，用于标识 action 的类型。例如：

```javascript
const action = {
  type: 'ADD_TODO',
  payload: {
    id: 1,
    text: 'Learn Redux'
  }
};
```

### 什么是 Payload？

`payload` 是 action 对象中的一个属性，用来携带要传递的数据。你可以把 `payload` 看作是附带的数据包，包含了状态更新所需要的信息。例如：

```javascript
const action = {
  type: 'ADD_TODO',
  payload: {
    id: 1,
    text: 'Learn Redux'
  }
};
```

在这个例子中：
- `type` 是 'ADD_TODO'，描述了 action 的类型。
- `payload` 包含了新待办事项的详细信息，包括 `id` 和 `text`。

### 为什么使用 Payload？

使用 `payload` 的好处是可以在 action 中清晰地传递相关数据，使得 action 对象结构化和规范化，便于维护和调试。

### 示例

假设你有一个 Redux slice，处理添加用户的操作。你可能会有一个类似的 reducer：

```javascript
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload); // 使用 action.payload
    },
    // 其他 reducer
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
```

在这个例子中，`addUser` reducer 使用 `action.payload` 来获取新用户数据，并将其添加到 `users` 数组中。

当你派发一个 `addUser` action 时，你会提供 `payload` 数据：

```javascript
dispatch(addUser({ id: 2, name: "Jane Doe" }));
```

这里的 `dispatch` 会触发 `addUser` action，其 `payload` 是 `{ id: 2, name: "Jane Doe" }`。然后在 reducer 中，这个 `payload` 被添加到 `users` 数组中。

### 总结

- **Action**：描述发生了什么的对象，至少包含一个 `type` 属性。
- **Payload**：action 对象中的一个属性，用于携带要传递的数据。
- 使用 `payload` 可以使 action 对象结构化，便于传递和处理数据。

希望这个解释能帮助你更好地理解 `action.payload` 的含义及其在 Redux 中的作用。如果你有任何进一步的问题，请随时提问！