import React from 'react';

function TarefaLista({ tarefas }) {
  return (
    <ul className="list-group">
      {tarefas.map((tarefa, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {tarefa}
          <button className="btn btn-danger btn-sm">Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default TarefaLista;
