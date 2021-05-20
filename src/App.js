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
    this.setState({
      isX: !this.state.isX,
    });
    squares[index] = isX ? "X" : "O";
  };

  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
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
export default App;
