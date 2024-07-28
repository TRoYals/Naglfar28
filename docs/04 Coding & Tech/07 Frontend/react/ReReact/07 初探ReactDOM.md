---
title: 初探ReactDOM
date: 2024-07-25
article: false
tag:
---

React 各个阶段
- Schedule 阶段
- render 阶段 (beginWork 和 completeWork)
- commit 阶段 (commitWork) [commitRoot](https://github.com/TRoYals/reReact/blob/97b181ee132f830b65a7737db5e8187856c839e2/packages/react-reconciler/src/workLoop.ts#L52)
	- beforeMutation 阶段
	- mutation 阶段 
	- layout 阶段（AfterMutation）[useLayoutEffect – React](https://react.dev/reference/react/useLayoutEffect) 因为这个 hooks 在这里运行