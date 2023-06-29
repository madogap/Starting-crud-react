import { useState, useEffect } from 'react';
import ListaContactos from './components/ListaContactos';
import Contacto from './components/Contacto';
import './App.css';
export default function App() {
  //state   
  const [contacto, setContacto] = useState({ name: '', telefone: '' });
  const [listaContactos, setListaContactos] = useState([]);
  //Mertodo 
  function defineName(event) {
    return setContacto({ ...contacto, name: event.target.value });

  }
  function definirTelefone(event) {
    setContacto({ ...contacto, telefone: event.target.value });

  }
  function adicionarContato() {
    //vALIDACAOP DE CAMPOS
    if (contacto.name === '' || contacto.telefone === '') return console.error('Preencha os campos');

    setListaContactos([...listaContactos, contacto]);
    console.table(listaContactos);

    //Adiiconar o contacto a lista de contactos

  }
  return (
    <>
      <div>
        <h1>Minha Lista de Heroes</h1>
        <hr />
        <div>
          <label>Nome: </label>
          <input type="text" name={contacto.name} onChange={defineName} value={contacto.name} />
        </div>
        <div>
          <label>Telefone: </label>
          <input type="text" name={contacto.telefone} onChange={definirTelefone} value={contacto.telefone} />
        </div>
        <button onClick={adicionarContato}>Adicionar Contato</button>
      </div>
      {/*</ ListaContactos listaContactos={listaContactos} />*/}
      <ul>
        {listaContactos.map((contacto, index) => {
          return <Contacto key={index} name={contacto.name} telefone={contacto.telefone} />;
        })
        }
      </ul>
    </>
  );
}

  // localStorage.setItem('heroes', JSON.stringify(heroes));
  // const getHeroes = localStorage.getItem('heroes');
  // console.log(getHeroes);

  // const heroesObject = JSON.parse(getHeroes);
  // console.log(typeof heroesObject);//object
  // console.log(heroesObject.name); //Batman

  //  const armazenar = (key, value) => {
  //  localStorage.setItem(key, value);

  // };
  // const consultar = (key) => {
  //  alert(localStorage.getItem(key));

  // };
  // const apagar = (key) => {
  // localStorage.removeItem(key);
  // };



