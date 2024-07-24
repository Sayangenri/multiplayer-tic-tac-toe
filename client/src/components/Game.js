import React,{useState} from 'react'
import Board from "./Board"


function Game({channel}) {
const[playerjoined,setplayerjoined] = useState(channel.state.watcher_count  === 2)
const [result, setResult] = useState({ winner: "none", state: "none" });
channel.on("user.watching.start",(event)=>{
    setplayerjoined(event.watcher_count===2);
})
if(!playerjoined){
    return <div>Waiting for others player join....</div>
}

  return (
    <div className='gameContainer'>
    <Board result={result} setResult={setResult}/>
    </div>
  )
}

export default Game
