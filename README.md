# vue-cnode

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## 路程

PC端开发中依现在的API接口除PostList页面几乎不能完成其他相应功能，缺少很多API，eg.login|auth.->post
现在能做到的是在移动端扫描PC端成功登陆后的二维码信息。然后达到登陆效果，而这种方式在PC端实现很不合理，所以暂时停止PC端工程的开发。

补充：决定了，还是用accessToken的方式登陆吧！

## 开源相关
很感谢社区开放的API接口，让我可以将一些想法付诸实践，以下是用到的社区开源的模块，感谢之。顺便说使用Vue框架开发很舒服。
富文本编辑器使用了[vue2-editor](https://github.com/davidroyer/vue2-editor)
icon使用了[vue-awesome](https://github.com/Justineo/vue-awesome)
