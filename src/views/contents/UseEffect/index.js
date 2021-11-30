import React, { useState, useEffect } from 'react';

import './styles.css';

const UseEffect = (props) => {
  const [finalGrade, setFinalGrade] = useState(0);
  const [gradeResults, setGradeResults] = useState('');

  function checkGrades(grade) {
    return grade >= 6 ? 'Aprovado' : 'Reprovado';
  }

  useEffect(() => {
    console.log('useEffect executa a cada re-renderização.\n\n');
  });

  useEffect(() => {
    console.log('useEffect condicional ao componente:');
    console.log('Executa somente na montagem do componente.\n\n');
  }, []);

  useEffect(() => {
    setGradeResults(checkGrades(finalGrade));
  }, [finalGrade]);

  useEffect(() => {
    console.log('useEffect condicional:');
    console.log('Nesse caso, executa quando o state situacao for alterado.\n\n');
  }, [gradeResults]);

  useEffect(() => {
    console.log('useEffect condicional (com limpeza):');
    console.log('Executa enquanto um componente existir.\n\n');

    return () => {
      console.log('useEffect condicional (com limpeza):');
      console.log('Executa o return quando o componente for desmontado.\n\n');
    };
  }, []);

  console.log('\nO componente foi renderizado. \n\n');

  return (
    <div>
      <div className="title">
        <h1>useEffect</h1>
        <h2>Permite executar efeitos colaterais em componentes funcionais</h2>
      </div>

      <div className="content">

        <label className="field">Nota final:</label>
        <input
          className="field"
          type="number"
          min={0}
          max={10}
          value={finalGrade}
          onChange={(e) => setFinalGrade(e.target.value)}
        />

        <label className="field">Resultado:</label>
        <p className="msg" id={gradeResults}>{gradeResults}</p>
      </div>
    </div>
  );
};
export default UseEffect;
