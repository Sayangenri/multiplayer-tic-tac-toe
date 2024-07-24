import React, { useState } from 'react'
import { useChatContext, Channel } from "stream-chat-react";
import Game from './Game';

function JoinGame() {
  const [Username, setUsername] = useState("");
  const [channel, setChannel] = useState(null);
  const { client } = useChatContext();
  const createChannel = async () => {

    const response = await client.queryUsers({ name: { $eq: Username } });
    if (response.users.length === 0) {
      console.log("user nf")
      return
    }

    const newChannel = await client.channel("messaging", {
      members: [client.userID, response.users[0].id],
    })

    await newChannel.watch()
    setChannel(newChannel)

  }


  return (
    <>
      {channel ? (
        <Channel channel={channel}>
          <Game channel={channel}/>
        </Channel>
      ) : (
        <div className="joinGame">
          <h4>Create Game</h4>
          <input
            placeholder="Username of rival..."
            value={Username}
            onChange={(event) => setUsername(event.target.value)} // Correctly handling input change
          />
          <button onClick={createChannel}>Join Game</button>
        </div>
      )}
    </>
  );
};

export default JoinGame
