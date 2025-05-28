import {useState} from 'react'

function Square(props){
  
  return(
    <>
      <button className = "square" onClick={props.onSquareClick}> {props.value} </button>
    </>
  )
}


export default function Board(){
  const [squares,setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const onClickHandler = (val)=>{
    if(squares[val]!=null || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[val] = "X";
    }
    else{
      nextSquares[val] = "0";
    }
    setXIsNext(!xIsNext);
    
    setSquare(nextSquares);
  }

  const winner = calculateWinner(squares);
  console.log(winner);
  let status;
  if(winner!=null){
    status = "Winner : "+winner;
  }
  else{
    status = "Next player is "+((xIsNext)?"X":"O");
  }
  return ( <>
    <div className="status">{status}</div>
    <div className = "board-row">
      <Square value = {squares[0]} onSquareClick = {()=>onClickHandler(0)}/>
      <Square value = {squares[1]} onSquareClick = {()=>onClickHandler(1)}/>
      <Square value = {squares[2]} onSquareClick = {()=>onClickHandler(2)}/>
      
    </div>

    <div className = "board-row">
      <Square value = {squares[3]} onSquareClick = {()=>onClickHandler(3)}/>
      <Square value = {squares[4]} onSquareClick = {()=>onClickHandler(4)}/>
      <Square value = {squares[5]} onSquareClick = {()=>onClickHandler(5)}/>
      
    </div>

    <div className = "board-row">
      <Square value = {squares[6]} onSquareClick = {()=>onClickHandler(6)}/>
      <Square value = {squares[7]} onSquareClick = {()=>onClickHandler(7)}/>
      <Square value = {squares[8]} onSquareClick = {()=>onClickHandler(8)}/>
      
    </div>

    
  </>
  );

  
}

const calculateWinner = (squares)=>{
  const wins = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [1,4,7]
  ]

  for(let i = 0;i<wins.length;i++){
    const [a,b,c] = wins[i];
    if(squares[a]!=null &&squares[a]==squares[b] && squares[a]==squares[c]){
      return squares[a];
    }
  }
  return null;
}