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



兄弟节点之间如果需要传递信息，目前只能通过放到最近公共祖先中的state中来传递。
