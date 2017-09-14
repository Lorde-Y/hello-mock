1. 跨域。 
Access-Control-Allow-Headers 允许某些 请求header
Error:
请求头字段Access-Control-Allow-Headers在预检响应中不允许Access-Control-Allow-Headers(Request header field Access-Control-Allow-Headers is not allowed by Access-Control-Allow-Headers in preflight response)

2. action 详细请看 login.vue
发送一个action，依旧返回的是一个Promise对象，因此，可以 可以继续 使用then。