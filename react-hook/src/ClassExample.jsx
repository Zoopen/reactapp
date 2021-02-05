import React from 'react'

export default class ClassExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`
    }
    //注意，在这个 class 中，我们需要在两个生命周期函数中编写重复的代码。

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click me</button>
            </div>
        )
    }
}