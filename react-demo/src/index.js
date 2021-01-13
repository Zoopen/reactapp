import React from 'react';
import ReactDOM from 'react-dom';

// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }

// class Welcome extends React.Component{
//   render(){
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }
// function App(){
//   return (
//     <div>
//         <Welcome name="Marry"/>
//         <Welcome name="Bob"/>
//         <Welcome name="John"/>
//     </div>
//   )
// }

// function Clock(props){
//   return (
//     <div>
//         <h1>This is a clock!</h1>
//         <div>It is {props.date.toLocaleTimeString()}</div>
//     </div>
//   )
// }

class Clock extends React.Component{
  // 构造函数是唯一可以给 this.state 赋值的地方：
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // 生命周期方法
  //当 Clock 组件第一次被渲染到 DOM 中的时候 挂载时触发
  componentDidMount(){
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  //当 DOM 中 Clock 组件被删除的时候  卸载时触发
  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  tick(){
    this.setState({
      date:new Date()
    })
  }
  render(){
    return (
      <div>
          <h1>This is a clock~</h1>
          <div>It is {this.state.date.toLocaleTimeString()}</div>
      </div>
    )
  }
}

function App(){
  return (
    <div>
        <Clock />
        <Clock />
        <Clock />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);