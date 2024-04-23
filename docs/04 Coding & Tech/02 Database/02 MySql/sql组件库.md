---
title: sql compoents
date: 2024-04-17
article: false
tags: 
cards-deck: 04 Coding & Tech::02 Database::02 MySql
---

## 刷题

如何取一个表中的指定行数据  
例如, 我要取最新的一条数据   
`  SELECT * FROM your_table ORDER BY date_column DESC LIMIT 1;`  
有时候这个方法并不好, 可以用窗口函数, 或者形如这样的操作  
```sql
    SELECT customer_id, order_date
    FROM Delivery
    WHERE (
        SELECT COUNT(*) 
        FROM Delivery D2
        WHERE D2.customer_id = Delivery.customer_id 
              AND D2.order_date <= Delivery.order_date
    ) <= 2
```  


