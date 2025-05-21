# aulaev-21-05

/*
const logado = true
if(logado){
  return console.log()
}else{
  return console.log()
}

//if operador ternário
{logado ? 'Bem vindo' :'Fazer login'}

//if com operador lógico
{!logado &&
  <div>
    <p>Faça login</p>
    <button>Clique aqui para fazer login</button>
  </div>
}*/

//REDENRIZAÇAO CONDICIONAL
import {useState} from 'react'
export default function App(){
const [logado, setLogado] = useState(false)

function alternarlogin(){
  setLogado(!logado)
}

  return (
    <>
     {logado ? <p>Bem vindo</p> : <p>Você precisa fazer login</p>}
     <button onClick={alternarlogin}>
      {logado ?'sair' :'Entrar'}
     </button>
    </>
  )
}
