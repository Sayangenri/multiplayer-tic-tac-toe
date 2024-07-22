import express from "express"
import cors from "cors"
import {StreamChat} from "stream-chat"
import {v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";


const app = express();

app.use(cors());
app.use(express.json());

const api_key = "nv2zh5h8pmyh";
const api_secret =
  "gf4wmuf9rj9vzfpvrdjkwr7qapwty64jdrb48qv7dmqejhrfhc6z94zr2atzcw4q";
const serverClient = StreamChat.getInstance(api_key, api_secret);

app.post("/singup", async (req,res)=>{
    try{
   const {firstName,lastName,username,password} = req.body;
   const userId = uuidv4();
   const hashpass = await bcrypt.hash(password,10);
   const token = serverClient.createToken(userId);
   res.json({
    token,userId,firstName,lastName,username,hashpass
   });
}
catch(error)
{
    res.json(error)
}
})
app.post("/login",(req,res)=>{
    
})

app.listen(3001,()=>{
    console.log("Server Running")
});