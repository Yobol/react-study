# react-study

learning react

## 前期准备

### 基础环境

- `NodeJS`：一个 `JavaScript` 运行时，能够让 `JavaScript` 项目运行在服务端。`React` 应用执行本身并不依赖 `NodeJS`，但是用于开发编译 `React` 应用的工具（如 `NPM`、`Webpack` 等）都需要 `NodeJS`；
- `NPM`：一个 `NodeJS` 依赖包管理工具，更推荐使用 `Yarn`
  - `NPM` 配置国内源：`npm config set registry https://registry.npmmirror.com`
  - `Yarn` 配置国内源：`yarn config set registry https://registry.npmmirror.com`

### 辅助工具

- `Webpack`：一个一站式 `JavaScript` 应用打包工具，不仅可以打包 `JS` 文件，结合相关插件，还可以打包图片和样式文件等资源；
- `Babel`：一个 `JavaScript` 编译工具，用于将 `ES6/ES7` 语法的代码编译成 `ES5` 语法，通常以插件的形式与打包工具 `Webpack` 集成使用；
- `ESlint`：一个 `JavaScript` 静态代码检测工具，既可以检查常见的 `JavaScript` 语法错误，又可以进行代码风格检查，从而保证团队成员编写的代码都能遵循统一的代码规范；
- `create-react-app`：一个 `React` 脚手架项目创建工具，用于生成符合 `React` 最佳实践的脚手架项目
  - `npm install -g create-react-app`；
  - `create-react-app w002-create-react-app`；
  - `cd w002-create-react-app && npm start`。

## 基本原则

1. `React` 并不基于严格的 `MVC` 模式进行实现，而更倾向于使用**单向数据流**的概念，将应用程序拆分成**组件化**层次结构：
   - 父组件可以向子组件传递数据作为属性（`props`），当父组件的状态或属性发生变化时，应该由 `React` 自动重新渲染相应的子组件；
   - 
2. 如果想在组件之间共享数据，就将要共享的数据提到离这两个组件最近的公共父组件中；
