---
title: React 触发更新
date: 2024-07-23
article: false
tag:
---

## 本章目标
场景的出发更新的方式：
1. ReactDOM.createRoot().render
2. this.setState
3. useState 的 dispatch 方法

## 更新
### 更新机制的组成部分
更新可以发生在任意组件，但是更新流程是需要从根节点出发递归的，这也是说明，当出现更新时，我们需要从触发更新的那个节点，传递到根节点先。  
这里的**根节点**就是 `fiberRootNode`，里面储存着 fiber 树的信息。
```ad-info 
title: fiberRootNode
- **current**: 当前 Fiber 树的根节点，即 `HostRootNode`。
- **containerInfo**: 宿主环境中的根容器信息，比如 DOM 中的根节点。
- **pendingChildren**: 在完成更新时暂存子节点。
- **expirationTime**: 当前根节点的过期时间，用于调度优先级。
- **finishedWork**: 在完成所有渲染工作时，将最终的 Fiber 树存储在这个属性中。
```

真实更新的 Fiber 树节点就是 ``
::: info
title: HostRootNode

`HostRootNode` 是 Fiber 树的实际根节点，表示应用的根组件。它对应于 React 应用中 `ReactDOM.render` 的入口组件。`HostRootNode` 包含以下主要属性：

- **stateNode**: 它指向 `FiberRootNode`，用来存储当前 Fiber 树的状态。
- **child**: 指向第一个子 Fiber 节点，代表应用的第一个 React 组件。
- **updateQueue**: 用于管理更新队列，存储等待处理的更新。
:::

#### 代表更新的数据结构： Update
[实例化一个Update](https://github.com/TRoYals/reReact/blob/f9602d0936fcd2d021f374bef943752ca39e9a37/packages/react-reconciler/src/updateQueue.ts#L14)
#### 消费 update 的数据结构： UpdateQueue
[实例化一个UpdateQueue](https://github.com/TRoYals/reReact/blob/f9602d0936fcd2d021f374bef943752ca39e9a37/packages/react-reconciler/src/updateQueue.ts#L21)

## Mount(挂载)
**挂载**（mounting）是指将 React 组件实例化并插入 DOM 树的过程。
### 挂载过程中的关键 API 和步骤

1. **ReactDOM.render()**
   - 这是最常用的挂载入口点，它将 React 组件渲染到指定的 DOM 容器中。
   ```javascript
   ReactDOM.render(<App />, document.getElementById('root'));
   ```
   - 这个方法接受两个参数：要渲染的 React 元素和目标 DOM 容器。

2. **createContainer()**
   - ReactDOM.render() 内部会调用 `createContainer()`，它用于创建一个 **FiberRootNode**。
   ```javascript
   const root = createContainer(container, ConcurrentMode, false, null, false, '');
   ```

3. **updateContainer()**
   - 接下来，React 调用 `updateContainer()`，将 React 元素更新到 Fiber 树中。
   ```javascript
   updateContainer(element, root, null, callback);
   ```
   - `element` 是要渲染的 React 元素，`root` 是创建的 FiberRootNode。

4. **scheduleUpdateOnFiber()**
   - `updateContainer()` 调用 `scheduleUpdateOnFiber()` 来调度更新，这个过程包括了调度器（scheduler）的工作。
   ```javascript
   scheduleUpdateOnFiber(root.current, expirationTime);
   ```

5. **performSyncWorkOnRoot()**
   - 在同步模式下，React 会立即执行工作，通过 `performSyncWorkOnRoot()`。
   ```javascript
   performSyncWorkOnRoot(root);
   ```

6. **workLoopSync() 和 renderRootSync()**
   - `performSyncWorkOnRoot()` 调用 `workLoopSync()`，进入同步工作循环，实际调用 `renderRootSync()` 渲染根组件。
   ```javascript
   renderRootSync(root, expirationTime);
   ```

7. **completeUnitOfWork() 和 completeWork()**
   - 在渲染过程中，每个 Fiber 节点会通过 `completeUnitOfWork()` 和 `completeWork()` 进行处理，最终生成 DOM 变更。
   ```javascript
   completeUnitOfWork(unitOfWork);
   completeWork(current, workInProgress, renderExpirationTime);
   ```

8. **commitRoot()**
   - 在完成渲染工作后，React 会调用 `commitRoot()`，将变更应用到实际的 DOM 中。
   ```javascript
   commitRoot(root);
   ```

### 挂载时调用的生命周期方法

在组件的挂载过程中，React 还会调用组件的生命周期方法，以便在不同的阶段执行特定的操作：

1. **constructor()**
   - 在组件实例化时调用，用于初始化状态和绑定方法。
   ```javascript
   constructor(props) {
     super(props);
     this.state = { ... };
   }
   ```

2. **static getDerivedStateFromProps()**
   - 在初始化或更新前调用，用于更新状态。
   ```javascript
   static getDerivedStateFromProps(nextProps, prevState) {
     // 返回新的状态对象
   }
   ```

4. **render()**
   - 必须实现的方法，返回 React 元素。
   ```javascript
   render() {
     return <div>{this.state.someValue}</div>;
   }
   ```

5. **componentDidMount()**
   - 在组件挂载后调用，适合进行 DOM 操作或网络请求。
   ```javascript
   componentDidMount() {
     // 执行副作用操作
   }
   ```

