import './App.css';
import Singup from './components/Singup';
import Login from './components/Login';
import {StreamChat} from "stream-chat"
import Cookies from "universal-cookie";

function App() {
  const api_key = "nv2zh5h8pmyh";
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  
  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          name: cookies.get("username"),
          firstName: cookies.get("firstName"),
          lastName: cookies.get("lastName"),
          hashedPassword: cookies.get("hashedPashashpasssword"),
        },
        token
      )
      .then((user) => {
        console.log(user)
      });
  }

  return (
    <div className="App">
      <Singup/>
      <Login/>
    </div>
  );
}

export default App;
