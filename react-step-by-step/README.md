### step by step
## JSX语法：
```
const name = 'Nicolas'
const element = <h1 className='myClass' style={{display:none}}>Hello, {name}</h1>
```
因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式
JSX 防止注入攻击
JSX 表示对象
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
相当于
```
const element = React.createElement(
    'h1',
    {
        className: 'greeting'
    },
    'Hello, world!'
);
```
React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
```
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
}
```

## 元素渲染
HTML 文件某处有一个 <div>：
<div id="root"></div>
将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 ReactDOM.render()：
```
const element = <h1>Hello, world</h1>
ReactDom.render(element, document.getElementById('root'))
```
React 元素是**不可变对象**。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。
React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。

## 组件&Props
组件分两种：
* 函数组件
* class组件

注意： 组件名称必须以大写字母开头。

Props是只读的

## State&生命周期
 state 是私有的，并且完全受控于当前组件。
 使用 this.setState() 来时刻更新组件 state：
 正确地使用 State
 * 不要直接修改 State
 ```
 // Wrong
this.state.comment = 'Hello';
// Correct
this.setState({comment: 'Hello'});
 ```
 * State 的更新可能是异步的
 ```
 // Wrong 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
this.setState({
  counter: this.state.counter + this.props.increment,
});
// Correct 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
* State 的更新会被合并

数据是向下流动的
父组件可以选择把它的 state/props/手动输入 作为 props 向下传递到它的子组件中
子组件会在其 props 中接收参数 date，但是子组件本身无法知道它是来自于 父组件 的 state，或是 父组件 的 props，还是手动输入的：


## 事件处理
* React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
onclick ——> onClick
* 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。

注意this指向问题

**向事件处理程序传递参数**
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。


## 条件渲染
if else
与运算符 &&
三目运算符

阻止组件渲染 return false;

## 列表 & Key
map() 方法来遍历 
每一个遍历的元素必须确定一个标识Key
一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key;
当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key

如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。

这个 key 不需要全局唯一，但在列表中需要保持唯一。

你也可以使用元素在数组中的下标作为 key。这个策略在元素不进行重新排序时比较合适，如果有顺序修改，diff 就会变得慢。
当以下条件都满足时，可以安全的使用index作为key的值，
列表和项是静态的——
    它们不计算也不改变;
    列表中的项目没有id;
    列表永远不会重新排序或筛选。

可以使用NanoID生成唯一键key

在 map() 方法中的元素需要设置 key 属性。

不要在子组件中读取props.key:
如果将key作为props传入子组件，在子组件中访问key将获得undefined

在 JSX 中嵌入 map() ，JSX 允许在大括号中嵌入任何表达式，所以我们可以内联 map() 

## 表单——受控组件
在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。
 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

 textarea 标签
 在 HTML 中, <textarea> 元素通过其子元素定义其文本
 而在 React 中，<textarea> 使用 value 属性代替。

 select标签
 在 HTML 中，<select> 创建下拉列表标签。
 ```
 <select>
  <option value="grapefruit">葡萄柚</option>
  <option value="lime">酸橙</option>
  <option selected value="coconut">椰子</option>
  <option value="mango">芒果</option>
</select>
 ```
 请注意，由于 selected 属性的缘故，椰子选项默认被选中。React 并不会使用 selected 属性，而是在根 select 标签上使用 value 属性。这在受控组件中更便捷，因为您只需要在根标签中更新它。

 注意
 你可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项：
 ```
 <select multiple={true} value={['B', 'C']}>
 ```

 文件 input 标签
 因为它的 value 只读，所以它是 React 中的一个非受控组件。将与其他非受控组件在后续文档中一起讨论。
 

 处理多个输入
 当需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作。


 受控输入空值
 在受控组件上指定 value 的 prop 会阻止用户更改输入。如果你指定了 value，但输入仍可编辑，则可能是你意外地将value 设置为 undefined 或 null。

 受控组件的替代品
 非受控组件


 ## 状态提升