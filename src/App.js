import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Box />
    </div>
  );
}
function Box() {
  let [click, setClick] = useState(Array(9).fill(null));
  const [t, setT] = useState(true);

  console.log(click);

  function Click(id) {
    if (CheckWinner(click) || click[id]) {
      return;
    }
    const copyarr = click.slice();
    if (click[id]) return;
    if (t) {
      copyarr[id] = "X";
    } else {
      copyarr[id] = "O";
    }
    setClick(copyarr);
    setT(!t);
  }
  const resulr = CheckWinner(click);
  let showresult;
  if (resulr) {
    showresult = "winner is " + resulr;
  } else {
    showresult = "next is " + (t ? "X" : "O");
  }
  function Restart() {
    setClick([]);
    setT(true);
  }

  return (
    <>
      <p>{showresult}</p>
      <div className="box">
        <div className="box1">
          <div className="one" onClick={() => Click(0)}>
            {click[0]}
          </div>
          <div className="one" onClick={() => Click(1)}>
            {" "}
            {click[1]}
          </div>
          <div className="one" onClick={() => Click(2)}>
            {" "}
            {click[2]}
          </div>
        </div>
        <div className="box1">
          <div className="one" onClick={() => Click(3)}>
            {" "}
            {click[3]}
          </div>
          <div className="one" onClick={() => Click(4)}>
            {" "}
            {click[4]}
          </div>
          <div className="one" onClick={() => Click(5)}>
            {" "}
            {click[5]}
          </div>
        </div>
        <div className="box1">
          <div className="one" onClick={() => Click(6)}>
            {" "}
            {click[6]}
          </div>
          <div className="one" onClick={() => Click(7)}>
            {" "}
            {click[7]}
          </div>
          <div className="one" onClick={() => Click(8)}>
            {" "}
            {click[8]}
          </div>
        </div>
      </div>
      <button onClick={Restart}>Restart</button>
    </>
  );
}

function CheckWinner(click) {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    const [a, b, c] = arr[i];
    if (click[a] === click[b] && click[b] === click[c]) {
      return click[a];
    }
  }
  return null;
}
