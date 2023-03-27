import { createContext, useContext, useState } from "react";
import Contexto from "./contexts/Contexto";
import A from "./components/A";

function App() {
  const [nome, setNome] = useState("Bruna");
  const [idade, setIdade] = useState("20");
  return (
    <Contexto.Provider value={{nome,idade}}>
      <div>      
        <div>
          <h1>Usando States</h1>
          <label>Nome: </label>
          <input value={nome} onChange={(e) => setNome(e.target.value)}/>

          <br></br> 

          <label>Idade: </label>
          <input value={idade} onChange={(e) => setIdade(e.target.value)}/>
        
          <A />     
          
        </div>
      </div>
    </Contexto.Provider>
  );
}

export default App;