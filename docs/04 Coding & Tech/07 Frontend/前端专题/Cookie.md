---
title: Cookie
date: 2024-05-31
article: false
tag:
---
在 HTTP 请求和响应中，Cookie 是一种常用的机制，用于在客户端和服务器之间存储和交换状态信息。Cookie 具有多种属性，这些属性可以用来控制 Cookie 的行为和作用范围。以下是 Cookie 的主要属性：

### 1. `name` 和 `value`

- **name**: Cookie 的名称。每个 Cookie 都有一个唯一的名称，用于在同一个域名下区分不同的 Cookie。
- **value**: Cookie 的值。名称和值组成了 Cookie 的核心内容。

### 2. `domain`

- **domain**: 指定哪些域可以访问该 Cookie。默认情况下，Cookie 只能被设置它的域名访问。如果设置了 `domain` 属性，可以指定子域名也能访问该 Cookie。
- **示例**:
  ```http
  Set-Cookie: name=value; domain=example.com
  ```
  这样设置后，`example.com` 及其所有子域（如 `sub.example.com`）都可以访问该 Cookie。

### 3. `path`

- **path**: 指定 Cookie 的使用路径。默认情况下，Cookie 对设置它的路径及其子路径可见。
- **示例**:
  ```http
  Set-Cookie: name=value; path=/app
  ```
  这样设置后，只有在 `/app` 路径及其子路径下，才会发送该 Cookie。

### 4. `expires` 和 `max-age`

- **expires**: 指定 Cookie 的过期时间。是一个绝对时间点（GMT 格式）。当过期时间到了，浏览器会自动删除该 Cookie。
- **示例**:
  ```http
  Set-Cookie: name=value; expires=Wed, 21 Oct 2021 07:28:00 GMT
  ```

- **max-age**: 指定 Cookie 的存活时间（以秒为单位）。是一个相对时间，当时间到了，浏览器会自动删除该 Cookie。
- **示例**:
  ```http
  Set-Cookie: name=value; max-age=3600
  ```
  这样设置后，Cookie 会在 3600 秒（1 小时）后过期。

### 5. `secure`

- **secure**: 仅当通过 HTTPS 连接时，浏览器才会发送该 Cookie。这样可以确保 Cookie 在传输过程中不会被窃取。
- **示例**:
  ```http
  Set-Cookie: name=value; secure
  ```

### 6. `HttpOnly`

- **HttpOnly**: 设置该属性后，Cookie 不能通过 JavaScript 访问，防止 XSS（跨站脚本）攻击。
- **示例**:
  ```http
  Set-Cookie: name=value; HttpOnly
  ```

### 7. `SameSite`

- **SameSite**: 控制 Cookie 在跨站请求时是否发送。可以有效防止 CSRF（跨站请求伪造）攻击。可以设置以下值：
  - **Strict**: 完全禁止第三方请求携带 Cookie。
  - **Lax**: 大多数情况不发送第三方 Cookie，导航到目标 URL 时除外（如链接、预加载请求）。
  - **None**: 不限制，第三方请求会发送 Cookie。需要与 `Secure` 属性一起使用。
- **示例**:
  ```http
  Set-Cookie: name=value; SameSite=Strict
  ```

### 示例

综合使用这些属性设置一个 Cookie：

```http
Set-Cookie: sessionId=abc123; domain=example.com; path=/; expires=Wed, 21 Oct 2021 07:28:00 GMT; max-age=3600; secure; HttpOnly; SameSite=Lax
```

### 详细说明

- `name=value`: Cookie 的名称和值。
- `domain=example.com`: 允许 `example.com` 及其子域名访问该 Cookie。
- `path=/`: 该 Cookie 对整个网站路径都有效。
- `expires=Wed, 21 Oct 2021 07:28:00 GMT`: 过期时间为 2021 年 10 月 21 日 07:28:00 GMT。
- `max-age=3600`: 该 Cookie 在 3600 秒（1 小时）后过期。
- `secure`: 仅在 HTTPS 连接时发送该 Cookie。
- `HttpOnly`: 该 Cookie 不能通过 JavaScript 访问。
- `SameSite=Lax`: 该 Cookie 在大多数跨站请求中不会发送，除非用户从外部导航到站点。

通过正确配置这些属性，可以更好地控制 Cookie 的行为和作用范围，提高应用的安全性和可靠性。