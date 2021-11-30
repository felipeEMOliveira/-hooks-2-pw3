import React, { useContext } from 'react';

import { AppContext } from '../../../data/Store';

import './styles.css';

function UseContext(props) {
  const { contextName, contextPasswd } = useContext(AppContext);

  return (
    <div>
      <div className="title">
        <h1>useContext</h1>
        <h2>Aceita um objeto de contexto e retorna o valor atual do contexto</h2>
      </div>

      <div className="content">
        <label className="field">Acesso encapsulado ao contexto (Store)</label>

        <p className="msg">
          Nome:
          {contextName}
        </p>

        <p className="msg">
          Senha:
          {contextPasswd}
        </p>

      </div>
    </div>
  );
}

export default UseContext;
