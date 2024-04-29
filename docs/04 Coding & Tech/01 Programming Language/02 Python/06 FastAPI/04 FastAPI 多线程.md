---
title: FastAPI 多线程
date: 2024-04-29
article: false
tag:
---

[多线程](多线程)

[FastAPI 多线程的使用：提升代码运行性能](https://apifox.com/apiskills/fastapi-threading/)  
[并发 async / await - FastAPI](https://fastapi.tiangolo.com/zh/async/)

区分 "CPU 密集型 " 和 "IO 密集型 "  
前者适合用 " 并行 ", 后者适合用 " 并发 "

FastAPI 中对并行的处理主要是在部署阶段解决:  
[部署概念 并行部署- FastAPI](https://fastapi.tiangolo.com/zh/deployment/concepts/)  
workers  
使用 Gunicorn 部署多进程服务  
[Server Workers - Gunicorn with Uvicorn - FastAPI](https://fastapi.tiangolo.com/zh/deployment/server-workers/)
