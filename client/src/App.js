import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/navBar.js";
import Spinner from "./components/Spinner";

function App() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://mybank-with-mongoose.onrender.com/myBank/Users`
        );
        console.log(data);
        setInfo(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div>
      <NavBar />
      {console.log(info)}
      {info.map((user) => {
        return (
          <div key={user._id}>
            <div className="card">
            <p>{user.name}</p>
            <p>{user.cash}</p>
            <p>{user.credit}</p>
            </div>
          </div>
        );
      })}
      {isLoading && <Spinner />}
      
    </div>
  );
}

export default App;
