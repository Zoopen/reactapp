## 记录React学习的案例

  
### JSX: JavaScript + XML
React中并没有强制要求使用JSX语法
其底层调用的是React.createElement方法
接受三个参数：标签名，包含属性的对象，组件的子组件
下面两个创建元素的方式是等价的。
```
const heading = <h1 className="site-heading">Hello, React!</h1>
```
```
const heading = React.createElement('h1', {className: 'site-heading'},'Hello, React!')
```
通过对比发现，JSX的实现方式更加直观明了，且容易书写。React官方也推荐使用JSX。


JSX 更偏向JavaScript 所以属性命名需要注意：（小驼峰命名法）
* 类名由class ——> className
* 内联样式 style="" ——> style={{}}
* 绑定事件onclick ——> onClick
* 自闭合标签必须以/结束 如：<img />

JS表达式可以以{}的形式插入到JSX中，包括变量，函数，属性
```
const name = "Zoopen"
const heading = <h1>Hello, {name}</h1>
```

### Component
App.js整合项目所有Component,index.js渲染App.js
组件文件名首字母大写以区别于普通的html页面
组件的实现方式有两种：Class与function
两种不同的组件实现方式可以相互嵌套
注意：
    class组件实现方式，必须拥有一个render()方法，并只return一个（父）元素
    以前，有必要在class组件中添加一个constructor方法，但是现在不必要了

class组件与function组件对比
```
const SimpleComponent = () => {
    return <div>Example<div>
}

class ClassComponent extends React.Component {
    render() {
        return <div>Example</div>
    }
}
```
注意：如果return只包含一行，不需要用括号包裹。

### Props
父组件通过自定属性的方式向子组件传递参数
子组件分两种情况接收:
class组件中，通过this.props获取父组件传递过来的所有属性
function组件中，通过参数props获取父组件传递过来的所有属性
注意：props无法被更改——他们是只读的，即子组件无法改变父组件传递过来的参数

### State
state,保存一些需要删除修改但是不必要添加到数据库的数据

定义： state = {}

修改： this.setState({})

子组件中如何**修改**父组件的state？
* 父组件中写一个修改state的方法并传递给子组件
* 子组件中触发该方法

### lifecycle 
componentWillMount
componentDidMount
