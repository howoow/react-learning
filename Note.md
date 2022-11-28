### React概览

#### 框架基本操作

1.创建React项目

```bash
create-react-app myapp
```

2.删除src文件夹中与App相关的文件

3.在index.js中删去相关注释和不用的组件

4.如需要用到bootstrap，在终端中键入npm install bootstrap，在index.js中引入bootstrap

```js
import 'bootstrap/dist/css/bootstrap.css'
```

5.在src中创建components文件夹，在其中创建组件

6.运行React项目

```bash
npm start
```

如果create-react-app很慢，可以通过修改npm的register为国内的网站

```bash
npm config set registry https://registry.npm.taobao.org
-- 配置后可通过下面方式来验证是否成功
npm config get registry
-- 或npm info express
```





React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作**“组件”**。



React 中拥有多种不同类型的组件，先从 `React.Component`开始。

```js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
```

其中，ShoppingList 是一个 **React 组件类**，或者说是一个 **React 组件类型**。一个组件接收一些参数，我们把这些参数叫做 `props`（“props” 是 “properties” 简写），然后通过 `render` 方法返回需要展示在屏幕上的视图的层次结构.

`render` 方法的返回值*描述*了你希望在屏幕上看到的内容。React 根据描述，然后把结果展示出来。更具体地来说，`render` 返回了一个 **React 元素**，这是一种对渲染内容的轻量级描述。大多数的 React 开发者使用了一种名为 “JSX” 的特殊语法，JSX 可以让你更轻松地书写这些结构。语法 `<div />` 会被编译成 `React.createElement('div')`。上述的代码等同于：

```js
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```



在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号`{}`把表达式括起来。

```js
const status = 'Next player: X';
return (
    <div className="status">{status}</div>
);
```



可以通过 Props 传递数据，可以把prop从父组件传递给子组件，即数据通过 props 的传递，从父组件流向子组件。详情演示可见一下链接👇

🔗[入门教程: 认识 React – React (reactjs.org)](https://zh-hans.reactjs.org/tutorial/tutorial.html#passing-data-through-props)



在 [JavaScript class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 中，每次你定义其子类的构造函数时，都需要调用 `super` 方法。因此，在所有含有构造函数的的 React 组件中，构造函数必须以 `super(props)` 开头。



**当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，需要把子组件的 state 数据提升至其共同的父组件当中保存。之后父组件可以通过 props 将状态数据传递到子组件当中。这样应用当中所有组件的状态数据就能够更方便地同步共享了。**





父元素和子元素的关系：父元素实现过程中使用到了子元素。如Boxes中用到了Box，所以Boxes是Box的父元素

1.父元素可以在`render()`的`return`中向子元素传递props：

```jsx
//Boxex.jsx
state = { 
        boxes: [
            {id: 10, x: 0},
            {id: 11, x: 1},
            {id: 12, x: 2},
            {id: 13, x: 3},
        ]
    } 

render() { 
        return (
            <React.Fragment>
                //通过map函数快速生成box组件
                {this.state.boxes.map((box) => (
                    //通过props父元素向子元素传递参数
                    <Box 
                    key={box.id}
                    x={box.x}
                    remove = {this.handleRemove}
                        //可以传入父元素的函数，这样子元素就可以调用父元素的函数了
                    />
                ))}
            </React.Fragment>
        );
    }
```

```jsx
//Box.jsx
class Box extends Component {
    state = { 
        x: this.props.x,	//这里可以接收从父元素传过来的props
    };
}
```

2.子元素可以调用父元素定义的函数

```jsx
//Boxes.jsx
//Boxex.jsx
state = { 
    boxes: [
        {id: 10, x: 0},
        {id: 11, x: 1},
        {id: 12, x: 2},
        {id: 13, x: 3},
    ]
} 

render() { 
    return (
        <React.Fragment>
            //通过map函数快速生成box组件
            {this.state.boxes.map((box) => (
                <Box 
                    handleRemove = {this.handleRemove}
                    //传入父元素的函数，这样子元素就可以调用父元素的函数了
                    />
            ))}
        </React.Fragment>
    );
}
```

```jsx
//Box.jsx
render() {
    return(
        <button className='btn btn-danger m-2' onClick={
                () => this.props.handleRemove(this.props.x)}>Delete</button>
        //调用父元素通过props传过来的父元素函数
    )
}
```



#### 路由

安装Route组件：

```bash
npm i react-router-dom
```

以导航栏实现地址跳转为例

1.创建导航栏（从bootstrap上copy一个

2.导入Link

```jsx
import { Link } from 'react-router-dom';
```

3.将所有的`<a href=...>`标签改为

```jsx
// "/"表示根目录
<Link className="" to="/"></Link>
```

4.在app.jsx中设置路由

首先引入Routes和Route

```jsx
import { Routes, Route, Navigate } from 'react-router-dom';
```

然后按照navBar中to的地址进行设置

```jsx
<Routes>
	<Route path='/' element={<Home />}></Route>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/calculator' element={<Calculator />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/404' element={<NotFound />}></Route>
    //这里是设置重定向的操作，除上面所有地址外的所有地址都将跳转到/404
    <Route path='*' element={<Navigate replace to="/404" />}></Route>
</Routes>
```

---



兄弟节点之间如果需要传递信息，目前只能通过放到最近公共祖先中的state中来传递。

也可以使用下面的Redux API来实现

#### Redux

Redux的作用简介：

React兄弟组件之间无法直接通信，必须通过同一层的上级作为中转站。而如果兄弟组件都是最高层的组件，为了能够让它们进行通信，必须在它们外层再套一层组件，这个外层的组件起着保存数据，传递信息的作用，这其实就是Redux所做的事情。



实现如下：

1.在index.js中定义每个组件的reducer函数（即对state进行更改的函数，每个state绑定一个reducer。）传入两个参数：当前state和action，返回新state。

```jsx
// 默认的两个参数，state和action
const f1 = (state = 0, action) => {
  //通过action.type来判断是否是执行该组件的接口来改变该组件的state
  switch (action.type) {
    case 'add':
      return state + action.value;
    case 'sub':
      return state - action.value;
    default:
      return state;
  }
};

const f2 = (state = ":", action) => {
  switch (action.type) {
    case 'concat':
      return state + action.character;
    default:
      return state;
  }
};
```

2.如需创建多个组件接口的父节点，则使用combineReducers()

```jsx
//f3是根节点的接口
const f3 = combineReducers({
  number: f1,
  string: f2,
})
```

3.创建store（维护的所有组件的数据，一般维护成树的结构。）

```jsx
const store = configureStore({
  reducer: f3
});
```

4.就可以通过store的dispatch函数对整棵state树操作一遍。

```jsx
store.dispatch({type: "add", value: 1});
//从根节点开始，便利所有的reducer函数，匹配type才执行
```

5.Provider组件：用来包裹整个项目，其`store`属性用来存储redux的store对象。

```jsx
<Provider store={store}>
    <App />
</Provider>
```

6.在各个组件的jsx文件中引入并在`export`部分使用`connect`函数，实现操作其他组件的state

```jsx
export default connect(mapStateToProps, mapDispatchToProps)(ComponentName);
```

这里还要定义`mapStateToProps`和`mapDispatchToProps`两个函数，作用如下：

`mapStateToProps`：每次store中的状态更新后调用一次，用来更新组件中的值。
`mapDispatchToProps`：组件创建时调用一次，用来将store的dispatch函数传入组件。

```jsx
const mapStateToProps = (state, props) => {
    return {
        number: state.number,
    }
}

//在number中调用更改兄弟节点string的state
const mapDispatchToProps = {
    concat: (c) => {
        return {
            type: "concat",
            character: c,
        }
    }
}
```



#### React计算器实战

##### css设计

`.为了更好的兼容性，所有组件均使用盒子模型

`box-sizing`有两种：`content-box`和`border-box`，第二种就是要用的。

```css
* {
  box-sizing: border-box;
}
```

设置盒子模型后，设置`border`和`padding`不会改变**元素的宽高**，而是**挤占内容区域**。

`content-box`的宽度和高度是content内容的宽度和高度
`border-box`的宽度和高度是content的宽度 + `padding` + `border`,当border或内边距增加，content的宽度或高度会减小。

2.计算器使用独特的网格模型，需要设置display和grid的属性

```css
.calculator {
    display: grid;
      grid-template-columns: repeat(4, 6rem);
      /*repeat是把括号中的内容：重复4遍6rem，也就实现了每行四列*/
      grid-template-rows: minmax(6rem, auto) repeat(5, 4rem);
      /*minmax函数把output的高度数据控制在（6rem, auto）之间，剩下五行直接使用repeat解决*/
      gap: 1px;
      /*每个格子之间的间隙*/
}
```

3.设置计算器的其他属性：宽度、居中、边框

```css
.calculator {
    display: grid;
      grid-template-columns: repeat(4, 6rem);
      /*repeat是把括号中的内容：重复4遍6rem，也就实现了每行四列*/
      grid-template-rows: minmax(6rem, auto) repeat(5, 4rem);
      /*minmax函数把output的高度数据控制在（6rem, auto）之间，剩下五行直接使用repeat解决*/
      gap: 1px;
      /*每个格子之间的间隙*/
    
      background-color: #EEF4F9;
      width: calc(24rem + 7px);
      /*使用calc函数计算出宽度*/
      margin: 0 auto;
      /*使计算器在页面中居中*/
      border: 2px solid black;
      border-radius: 0.3em;
    }
```

4.设置输出框的属性（竖直方向上均匀分布，右对齐，溢出换行等

```css
.output {
  grid-column: 1 / span 4;
  /*从第一个格子开始，独占4个格子*/
  display: flex;
  /*使用flex布局使得同一列的数据在空间上分布均匀*/
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  padding: 10px;

  /*下面是实现了让输入过长的数字换行*/
  word-wrap: break-word;
  word-break: break-all;
    
  background-color: #F3F3F3;
}
```

5.实现每一个格子的鼠标点击、悬浮效果

```css
.calculator>button {
  margin: 2px;
  background-color: #FFFFFF;
  border-radius: 0.3em;
}

.calculator>button:hover {
  background-color: #FBFCFD;
}

.calculator>button:active {
  background-color: #F7F9FC;
}
```

##### redux配置

在src文件夹中创建redux文件夹专门存放与redux相关的js文件

-|redux

​	-|action.js

​	-|reducer.js

​	-|store.js

actions.js：主要是定义所有操作

```js
const ACTIONS = {
    ADD_DIGIT: "add-digit",
    DELETE_DIGIT: "delete-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    EVALUATE: "evaluate",
}

export default ACTIONS;
```

reducer.js：创建reducer，维护状态和定义操作函数

```js
import ACTIONS from "./actions";

const reducer = (state = {
    currentOperand: "",
    lastOperand: "",
    operation: "",
}, action) => {
    switch (action.type) {

    }
}

export default reducer;
```

store.js：创建store，供其他组件调用

```js
import ACTIONS from "./actions";

const reducer = (state = {
    currentOperand: "",
    lastOperand: "",
    operation: "",
}, action) => {
    switch (action.type) {

    }
}

export default reducer;
```

##### 登录界面的设计

1.去bootstrap上找一个合适的form表单

2.设置Username和Password 的输入框，在input标签的属性中加入onCharge

```jsx
<input onChange={e => { this.setState({ username: e.target.value }) }} type="email" className="form-control" id="username" aria-describedby="emailHelp" />
```



3.编写提交按钮的handleClick函数

```jsx
    handleClick = e => {
        e.preventDefault();

        if (this.state.username === "") {
            this.setState({ error_message: "用户名不能为空！" });
        } else if (this.state.password === "") {
            this.setState({ error_message: "密码不能为空！" });
        } else if (this.state.password_confirm === "") {
            this.setState({ error_message: "确认密码不能为空！" });
        } else if (this.state.password_confirm !== this.state.password) {
            this.setState({ error_message: "两次输入的密码不一致" });
        } else {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/register/",
                type: "get",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                    password_confirm: this.state.password_confirm,
                },
                dataType: "json",
                success: resp => {
                    if (resp.result === "success") {
                        window.location.href = "/calculator";
                    } else {
                        this.setState({ error_message: resp.result });
                    }

                }
            });
        }
    }

...

<button onClick={this.handleClick} style={{ width: "100%" }} type="submit" className="btn btn-primary">登录</button>

```



杂碎：

1.鼠标悬浮到相应标签上显示出小手

CSS加入cursor：”pointer“的样式

```jsx
<a className="nav-link" style={{ cursor: "pointer" }}>退出</a>

```

