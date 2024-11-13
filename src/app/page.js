"use client"
// import styles from "./page.module.css";
import fluxo from "../../src/fluxo.json"
import { useState } from "react";
import Perguntas from "../pages/Perguntas";
import Respostas from "../pages/Respostas";

export default function Home() {
  const [resposta, setResposta] = useState("");
  const [Dfluxo, setDfluxo] = useState(fluxo);

  const handleResposta = ({target}) => {
    setDfluxo(Dfluxo[Object.keys(Dfluxo)[0]][target.value]);
    console.log(Object.values(Dfluxo))
  }

  return typeof Dfluxo !== "string" ? (
    <div>
    <h1>{Object.keys(Dfluxo)}</h1>
      {Object.keys(Object.values(Dfluxo)[0]).map((item) => {
        return <button key={item} value={item} onClick={handleResposta}>{item}</button>
      }
      )}
    </div>
  ) : (<h1>{Dfluxo}</h1>)
  
  
  ;
}
