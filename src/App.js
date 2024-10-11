import React, { useState } from 'react';
import TarefaEntrada from './TarefaEntrada';
import TarefaLista from './TarefaLista';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (descricao) => {
    setTarefas([...tarefas, descricao]);
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="display-4 text-center mt-4">Hello, tarefas</h1>
      <div className="col-12 col-md-8 col-lg-6">
        <TarefaEntrada adicionarTarefa={adicionarTarefa} />
        <TarefaLista tarefas={tarefas} />
      </div>
    </div>
  );
}

export default App;
