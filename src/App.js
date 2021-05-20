import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      isX: true,
    };
  }

  clickxo = (index) => {
    const { squares, isX } = this.state;
    if (squares[index] || findWinner(squares)){
      return;
    }
    this.setState({
      isX: !this.state.isX,
    });
    squares[index] = isX ? "X" : "O";
  };

  render() {
    var status = 'Next Player: ' + (this.state.isX ? 'X' : 'O')
    const winner = findWinner(this.state.squares);
    if (winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.isX ? 'X' : 'O');
    }
    return (
      <>
      
        <h1>Tic Tac Toe</h1>
        <div className = "status">{status}</div>
        <div className="gameBaord">
          {/* 
        to get the 3X3 squares,
        I mapped over the squares array
         */}
          {this.state.squares.map((val, index) => {
            return (
              <Square
                value={val}
                index={index}
                clickxo={this.clickxo}
                key={index}
              />
            );
          })}
        </div>
        <p>Turn: {this.state.isX ? "X" : "O"}</p>
      </>
    );
  }
}

function findWinner(squares) {
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
    const [a, b,  c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default App;


