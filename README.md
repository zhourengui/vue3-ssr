# 手写 Vue3 SSR 同构

## 客户端渲染

Js 动态填充

缺点：

- 白屏时间长：js 资源加载时间，异步获取
- seo 不友好

优点：

- 切页面非常流畅，通过 js 操作页面的替换
- 切页面可见可操作

## 服务端渲染

服务端直接返回 html 片段

优点：

- 白屏时间短
- 利于 seo

缺点：

- 返回的页面可见不一定可操作，js 资源不一样加载完毕
- 服务器压力大（相同资源请求多次）

## SSR

结合两者优点，摒弃缺点

优点：

首屏直出，由服务端直接返回，seo 友好，后面的切页，就用 js 控制，切页流畅，服务器压力相对就没有那么大了。

缺点：

首屏也不一定可见可操作
配置复杂，有一些局限性，服务端没有 dom，一些操作 dom 的钩子或者生命周期不可用
容易造成内存泄漏

### 客户端搭建

#### Vuex

#### Router

#### Webpack

#### 服务端的配置注意：

- target：node 在哪个环境使用
- libraryTarget：“commonjs2”
- webpack-node-externals 服务端不需要把第三方的库打入 js 文件，只需要从 node_modules 中那就可以
- css 处理：null-loader ignore-loader，服务端不认识 css 不需要处理

#### 配置项：

- Loader
  - Vue-loader
  - Css-loader
  - Css 提取
- Html-webpack-plugin
- Entry
- Output
- Devserver
  - Webpack 5 serve

### 服务端搭建

#### Koa

#### Router

#### Static

#### SSR 处理

- 路由处理
- 请求处理

### 前后端路由处理

### 数据预处理

### 客户端激活

编写通用代码 | Vue SSR 指南
