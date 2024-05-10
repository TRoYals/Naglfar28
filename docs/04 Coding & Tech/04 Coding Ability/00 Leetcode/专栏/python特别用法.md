---
title: python特别用法
date: 2024-05-08
article: false
tag:

---

我有个形如这样的数组: `[0,0,1,2,0]` 我想把里面的 0 都 pop 掉,变成 `[1,2]` 我该怎么做  
 
```python
original_list = [0, 0, 1, 2, 0]
filtered_list = [element for element in original_list if element != 0]
print(filtered_list)
```


