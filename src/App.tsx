import { createContext, useContext, useState } from "react";

const Contexto = createContext<Props>({} as Props);
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


function A() {
  return <B />
}

function B() {
  return <C />
}

interface Props {
  nome: string,
  idade: string
}

function C() {
  const {nome,idade} = useContext(Contexto);
  return (
    <>
      <br></br><br></br>Nome: {nome}<br></br>      
      Idade: {idade}
    </>
  )
}