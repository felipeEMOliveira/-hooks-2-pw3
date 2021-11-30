import './styles.css';
import React, { useState, useContext } from 'react';

import { AppContext } from '../../../data/Store';

const UseState = (props) => {
  const { contextName, setContextName } = useContext(AppContext);

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <div>
      <div className="title">
        <h1>useState</h1>
        <h2>Manipula estados em componentes funcionais</h2>
      </div>

      <div className="content">
        <input
          type="text"
          value={name}
          className="input"
          placeholder="Digite o seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={lastname}
          className="input"
          placeholder="Digite o seu sobrenome"
          onChange={(e) => setLastname(e.target.value)}
        />

        <button
          className="button"
          type="button"
          onClick={() => setMsg(`Olá ${name} ${lastname}, seja bem-vindo!`)}
        >
          Confirmar
        </button>

        <p className="msg">{msg}</p>

        <button
          className="button"
          type="button"
          onClick={() => setContextName(name)}
        >
          Altera contexto (Store)
        </button>
      </div>
    </div>
  );
};
export default UseState;
