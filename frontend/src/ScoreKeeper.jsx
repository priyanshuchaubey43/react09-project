import React, { useState } from 'react'
import './Scorekeeper.css';
const ScoreKeeper = () => {
    const[runs,setRuns]=useState(0);
    const[wickets,setWickets]=useState(0);
    const[overs,setOvers]=useState(0);
    const[balls,setBalls]=useState(0);
        function addRuns(num){
              if(wickets<10){
            setBalls(balls+1);
            if(balls===5){
                setOvers(overs+0.5);
                setBalls(0);  
            }
            else{
                setOvers(overs+0.1);
            }
            console.log(num);
          
                 if(num==="W"){
                    setWickets(wickets+1);
                 }
                 else{
                     setRuns(runs+num);
            }
        }
        else{
                console.log("All Out");
        }
    }
  return (
   <>
        <h1>ScoreKeeper App</h1>
        <p>{runs}/{wickets}</p>
        <p>Overs:{overs.toFixed(1)}</p>
        <p>Balls:{balls}</p>
        <button onClick={()=> addRuns(0)}>0</button>
        <button onClick={()=> addRuns(1)}>1</button>
        <button onClick={()=> addRuns(2)}>2</button>
        <button onClick={()=> addRuns(3)}>3</button>
        <button onClick={()=> addRuns(4)}>4</button>
        <button onClick={()=> addRuns(6)}>6</button>
        <button onClick={()=> addRuns("W")}>W</button>
    </>
  )
}
export default ScoreKeeper
