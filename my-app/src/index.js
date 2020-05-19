import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }
// ↓↓↓↓↓↓↓↓↓↓↓class组件如果只有render的话，可以改写成函数组件
function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            history:[{
                squares:Array(9).fill(null),
                currentPos:[]
            }],
            xIsNext:true,
            stepNumber:0
        }
    }
    handleClick(i) {
        console.log("click")
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        const currentPos = current.currentPos.concat(calculatePosition(i))
        if(calculateWinner(squares)||squares[i]){
            return;
        }
        
        squares[i] = this.state.xIsNext ? "X" : "O"
        this.setState({
            history:history.concat([{squares:squares,currentPos:currentPos}]),
            stepNumber:history.length,
            xIsNext:!this.state.xIsNext
        })
    }
    jumpTo(step){
        this.setState({
            stepNumber:step,
            xIsNext:(step%2)===0
        },()=>{
            console.log("setState回调")
        })
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares);
        const currentPos = history[this.state.stepNumber].currentPos
        console.log("xxxxxxxxxxxxxxx",currentPos,history)
        const moves = history.map((stop,move)=>{
            console.log(move)
            if(move){
                if(!currentPos[move-1]){
                    return;
                }
            }
            const desc = move ? 
            'Go to move #' + move + currentPos.length?"列："+currentPos[move-1].j+",行："+currentPos[move-1].i:"":
            'Go to game start';
            return (
                <li key={move}>
                    <button onClick={()=>this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status;
        if(winner){
            status = 'Winner:'+winner
        }else{
            status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares = {current.squares}
                        onClick = {(i)=>this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function calculatePosition(index){
      const pos = []
      for (let i = 1; i <= 3; i++) {
          for (let j = 1; j <= 3; j++) {
              pos.push({i,j})
          }
      }
      console.log(pos)
      return pos[index]
  }

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
