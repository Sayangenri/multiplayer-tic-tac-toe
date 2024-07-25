import React,{useState} from 'react'
import Board from "./Board"
import "./Chat.css";
import { Window,MessageList,MessageInput } from 'stream-chat-react';

function Game({channel, setChannel}) {
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
    <Window><MessageList disableDateSeparator closeReactionSelectorOnClick messageActions={["react"]} />
    <MessageInput noFiles/></Window>
    <button onClick={ async()=>{
     await channel.stopWatching();
     setChannel(null);
    }}>Leave Game</button>
    {result.state=== "won" && <div>{result.winner} Won the game </div>}
    {result.state==="tie" && <div> Game Tie </div>} 
    </div>
  )
}

export default Game
