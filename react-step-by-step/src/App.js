import React from 'react'

const ele = <h1 className='greeting'>Hello, world!</h1>
const ele2 = React.createElement(
  'h1',
  {
    className:'greeting'
  },
  'Hello, world2!'
)
// 类组件
class Welcome extends React.Component {
  render() {
    const {title} = this.props
    return (
      <div>
          Hello, class组件{title}
      </div>
    )
  }
}
//函数组件
function World(props) {
  return (
    <div>Hello, 函数组件{props.title}</div>
  )
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 
      1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div>
          <h1>Clock</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick() {
  //   console.log(1)
  //   this.setState( state => (
  //     {
  //       isToggleOn: !state.isToggleOn
  //     }
  //   ))
  // }
  //绑定this的方式4 
  handleClick = () => {
    console.log(1)
    this.setState( state => (
      {
        isToggleOn: !state.isToggleOn
      }
    ))
  }

  render() {
    return (
      //绑定this的方式1 使用箭头函数
      // <button onClick={() => this.handleClick()}>
      //     {this.state.isToggleOn ? 'ON' : 'OFF'}
      // </button>
      //绑定this的方式2 
      // <button onClick={this.handleClick.bind(this)}>
      //   {this.state.isToggleOn ? 'ON' : 'OFF'}
      // </button>
      //绑定this的方式3 在constructor中绑定this
      // <button onClick={this.handleClick}>
      //   {this.state.isToggleOn ? 'ON' : 'OFF'}
      // </button>
      //绑定this的方式4 
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

function UserGreeting() {
  return <h1>Welcome back</h1>
}

function GuestGreeting() {
  return <h1>Please sign up</h1>
}
//条件渲染
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />
  }else{
    return <GuestGreeting />
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
        Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
        Logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {
          isLoggedIn
          ? <LogoutButton  onClick={this.handleLogoutClick}/>
          : <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    )
  }
}
function Li(props) {
  return <li>{props.number}</li>
}

function NumberList(props) {
  const {numbers} = props
  const lis = numbers.length > 0 && numbers.map((number,index) => <Li key={index} number={number}></Li>)
  return (
    <ul>
      {lis}
    </ul>
  )

}

const numbers = [1,2,3,4,5,6]

//受控组件
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    console.log(this.state.name)
    alert('My name is ', this.state.name);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>名字：
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type='submit' value='提交' />
      </form>
    )
  }
}

//textarea标签
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '这是简单的随笔内容巴拉巴拉吧这是简单的随笔内容巴拉巴拉吧'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    console.log(this.state.value)
    alert('value: ', this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>文章：
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='提交' />
      </form>
    )
  }
}

//select标签
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    console.log(this.state.value)
    alert('value: ', this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>选择你喜欢的口味：
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">酸橙</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
          </select>
        </label>
        <input type='submit' value='提交' />
      </form>
    )
  }
}

//状态提升
function BoilingVerdict(props) {
  if(props.celsius > 100) {
    return <p>The water would boil.</p>
  }else {
    return <p>The water would not boil</p>
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   temperature: ''
    // }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    // const {temperature} = this.state
    const {scale, temperature} = this.props
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange}/>
        <BoilingVerdict celsius={temperature} />
      </fieldset>
    )
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}
function tyrConvert(temperature,convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded =  Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Caculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenHeitChange = this.handleFahrenHeitChange.bind(this)
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature: temperature
    })
  }
  handleFahrenHeitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature: temperature
    })
  }

  render() {
    const {scale, temperature} = this.state;
    const celsius = scale === 'f' ? tyrConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tyrConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenHeitChange} />
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <h1 title='Hi,how are you'>Hello, React!</h1>
      {ele}
      {ele2}
      <Welcome title='测试Props'/>
      <World title='测试Props2' />
      <Clock />
      <Toggle />
      <LoginControl />
      <NumberList numbers={numbers} />
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <Caculator />
    </div>
  )
}

export default App;