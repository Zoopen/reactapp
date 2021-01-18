import ReactDom from 'react-dom'
import App from './App'

ReactDom.render(
  <App />,
  document.getElementById('root')
)

// 元素渲染
// function tick() {
//   const element = (
//     <div>
//         <h1>Hello, wrold</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
  
//   ReactDom.render(element, document.getElementById('root'))
// }

// setInterval(tick,1000)