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
        <button className={props.light?"Light square":""+"square"} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    
    renderSquare(i) {
        const winLine = this.props.winLine
        console.log("winLine1111111111111111111111111111111111",winLine)
        return (
            <Square
                light={winLine.includes(i)?true:false}
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        let board = []
        for(let i = 0; i < 9; i+=3){
            let squares = []
            for(let j = i; j < i+3; j++){
                squares.push(this.renderSquare(j))
            }
        board.push(<div key={Math.random()} className="board-row">{squares}</div>)
        }
        return (
            <div>
                {board}
                {/* <div className="board-row">
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
                </div> */}
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
            stepNumber:0,
            currentHistoryIndex:999,
            sortMoves : true
        }
        this.setCurrentHistoryIndex = this.setCurrentHistoryIndex.bind(this)
        this.sortHistory = this.sortHistory.bind(this)
    }
    setCurrentHistoryIndex(index){
        console.log("index",index)
        this.setState({
            currentHistoryIndex:index
        })
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
    sortHistory() { 
        this.setState({
            sortMoves:!this.state.sortMoves
        })
     }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)
        const currentPos = history[this.state.stepNumber].currentPos
        console.log("yyyyyyy",currentPos,history,winner)
        const moves = history.map((stop,move)=>{
            console.log(move)
            if(move){
                if(!currentPos[move-1]){
                    return false;
                }
            }
            const desc = move ? 
            'Go to move #' + move +( currentPos.length?"列："+currentPos[move-1].j+",行："+currentPos[move-1].i:""):
            'Go to game start';
            return (
                <li key={move} className={this.state.stepNumber===move?"active":""}>
                    <button onClick={()=>{
                        this.jumpTo(move)
                        this.setCurrentHistoryIndex(move)
                    }}>{desc}</button>
                </li>
            )
        })

        let status;
        let winLine = [];
        
        if(winner){
            console.log(winner)
            status = 'Winner:'+winner.winner
            winLine = calculateWinner(current.squares).winLine;

        }else{
            status = this.state.stepNumber>=9?"平局":('Next player:' + (this.state.xIsNext ? 'X' : 'O'));
        }
        
        
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        winLine = {winLine}
                        squares = {current.squares}
                        onClick = {(i)=>this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={this.sortHistory}>排序</button>
                    <ol>{this.state.sortMoves?moves:moves.reverse()}</ol>
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
          console.log("胜利",lines[i],squares)
        return {
            winner:squares[a],
            winLine:lines[i]
        };
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
