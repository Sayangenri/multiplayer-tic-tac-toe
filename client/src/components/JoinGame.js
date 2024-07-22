import React, { useState } from 'react'
import { useChatContext } from "stream-chat-react";

function JoinGame() {
  const [Username, setUsername] = useState("");
  const [channel, setChannel] = useState(null);
  const {client} = useChatContext();
  const createchannel =async()=>{

    const response = await client.queryUsers({name:{$eq : Username}});
    if(response.users.length === 0)

      {
        console.log("user nf")
        return
      }

      const newChannel = await client.channel("messaging",{
        members:[client.userID,response.users[0].id],
      })

      await newChannel.watch()
      setChannel(newChannel)

  }


  return (
    <>
    {
      channel?(<h1>Game Started</h1>):(
    <div className="joinGame">
    <h4>Create Game</h4>
    <input
      placeholder="Username of rival..."
      onChange={(event) => {
        setUsername(event.target.value);
      }}  />
      <button onClick={createchannel}>Join Game</button>
      </div>
      
    )}
    </>
  )
}

export default JoinGame
