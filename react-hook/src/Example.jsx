import React, { useState, useEffect } from 'react';

function Example() {
     // 声明一个叫 “count” 的 state 变量。
    const [count, setCount] = useState(0);
    // const [fruit, setFruit] = useState('banana');
    // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    // console.log(useState(0))//返回一个数组，第一项为值，第二项为处理函数
    
    // 相当于 componentDidMount 和 componentDidUpdate componentWillUnmount :
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log(useEffect)
    })
    // console.log(useEffect)
    
    //测试eslint, 将hook放在函数里是错误的做法
    // function xx() {
    //     const [fruit, setFruit] = useState('banana');
    // }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            {/* <p>{fruit}</p> */}

        </div>
    )
}

export default Example;