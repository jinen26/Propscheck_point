import "./App.css";
import Playerlist from "./Playerlist";


function App() {
  let players = [
    { 
    img: "https://assets-fr.imgfoot.com/media/cache/1200x1200/lionel-messi-psg-2223-1.jpg", 
    name: "Lionel messi", 
    nationality: "Argentina" 
  },
  {
  img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg", 
  name: "Cristiano Ronaldo", 
  nationality: "Portugal" 
  },
  {
    img: "https://cdnfr.africanmanager.com/wp-content/uploads/2022/01/Hannibal-Mejbri.jpg", 
    name: "Hannibal Mejbri", 
    nationality: "Tunisia" 
  },
  
  ];
  return <div className="App">
    <Playerlist players={players}/>
  </div>;
}

export default App;
