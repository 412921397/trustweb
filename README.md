# luodiye

# 由于项目来的太突然（我看团队统一 js 的项目，考虑到可能大家理解的 ts 程度不同，所以未引入 ts，整体项目也可以完美适配 ts，），故用 webpack 创建的项目，未用 vite，后续用 vite 可完美迁移

# 对了 node 版本用 18 以上的

1. 时间库这个项目用到了主流的 dayjs，请不要安装 momentjs，momentjs 太大了很臃肿，对项目也有一定影响，dayjs 轻快基本和 monentjs 的写法类似

2. 工具类函数引入了 lodashjs 可按需引入

3. 状态库直接用到了 pinia，可以按照原 vuex 的写法引入状态，也可以写成 jsx 语法，当然只是 2 种形式，pinia 对 vue3 很友好，对 ts 提示很友好

4. 整体 ui 库用到了 naiveui，尤大安利的，基本都是老外喜欢的风格，个人感觉组件比饿了么的 ui 好用，至少创建的弹框不会增加一堆 dom 操作

#

## 请不要关闭 eslint 和 stylelint 保持代码规范性

```
prttierrc只负责代码美化，eslint只校验代码规范，而且代码提示很友好，统一代码规范，从中也可以学习到一些新写法以及新的思路，对ts写法也有一定提升
```

## 项目内置了 tailwindcss 和 postcss

```
postcss已经配置好，
desktop代表的桌面端，tablet代表的h5， 默认样式以h5为主，不写desktop，pc端和h5是一致的，如果只改pc的样式只需加上desktop，h5默认不需加任何前缀。
```

## taiwindcss 的文档

See [Configuration Reference](https://tailwindcss.com/docs/installation/using-vite).

## naiveui 的文档

See [Configuration Reference](https://www.naiveui.com/zh-CN/light/components/button).

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
