import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Square from './components/square'
import styled from "styled-components";
function App() {
  const Patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);
  useEffect(() => {
    if (result.state != "none") {
      alert(`Game End! Winning: ${result.winner}`);
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          return player;
        }

        return val;
      })
    );
  };
  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: `Player ${player}`, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <Container>
      <Board>
        <Square  val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}/>
        <Square  val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}/>
        <Square  val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}/>
        <Square  val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}/>
        <Square  val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}/>
        <Square  val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}/>
        <Square  val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}/>
        <Square  val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}/>
        <Square  val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}/>
      </Board>
         <Button onClick={ () =>  restartGame() }>Restart Game</Button>
    </Container>
  )
}
const Container = styled.div`
  margin-top:25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
margin-top: 25px;
cursor: pointer;
outline: 0;
display: inline-block;
font-weight: 400;
line-height: 1.5;
text-align: center;
background-color: transparent;
border: 1px solid transparent;
padding: 6px 12px;
font-size: 1rem;
border-radius: .25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
color: #0d6efd;
border-color: #0d6efd;
:hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
}
`
const Board = styled.div`
  background: lightgray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  max-width: 250px;
  margin: auto;
`;

export default App
