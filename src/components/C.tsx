import { useContext } from "react";
import { Contexto } from "../contexts/index";

export default function C() {
    const {nome,idade} = useContext(Contexto);
    return (
      <>
        <br></br><br></br>Nome: {nome}<br></br>      
        Idade: {idade}
      </>
    )
}