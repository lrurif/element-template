## 常见问题

<details>
  <summary>给组件绑定的事件为什么无法触发？</summary>
  
  在 Vue 2.0 中，为**自定义**组件绑定**原生**事件必须使用 `.native` 修饰符：
  ```html
  <my-component @click.native="handleClick">Click Me</my-component>
  ```
  
  从易用性的角度出发，我们对 `Button` 组件进行了处理，使它可以监听 `click` 事件：
  ```html
  <el-button @click="handleButtonClick">Click Me</el-button>
  ```
  
  但是对于其他组件，还是需要添加 `.native` 修饰符。
</details>

