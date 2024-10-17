---
title: intersection API
date: 2024-05-17
article: false
tag:

---

在被问及 [懒加载](懒加载) 和 [性能](性能) 和 [useRef](useRef) hooks 的问题可以说这个话题  

[IntersectionObserver API 使用教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

intersection API 叫做 " 交叉观察器 "

## 
```js
var io = new IntersectionObserver(callback, option);
```

```javascript

// 开始观察
io.observe(document.getElementById('example'));

// 停止观察
io.unobserve(element);

// 关闭观察器
io.disconnect();
```

### 懒加载举例 使用 intersection API
  
![image.png](https://oss.naglfar28.com/naglfar28/202405172259432.png)  
```js
import React, { useEffect, useRef } from 'react';
const LazyLoad = ({ children }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
	container.appendChild(container.querySelector('template').content);
          observer.unobserve(container);
        }
      });
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return <div ref={containerRef} className="lazy-loaded">{children}</div>;
};
export default LazyLoad;
```
这里用 `useRef` 可以很好的体现 react 性能优化的视角, 体现性能优化的特点.


