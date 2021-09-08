import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((Response) => Response.json())
      .then((Response) => setCharacterList(Response.results))
      .catch((error) => console.log(error));
  }, []);
  console.log(characterList);
  return (
    <div className="App App-header" id="topo">
      <header>
        <h1>characters</h1>
      </header>
      <Characters characterList={characterList} />
      <a className="topo" href="#topo">
        Topo
      </a>
    </div>
  );
}

export default App;
