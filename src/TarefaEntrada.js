import React, { useState } from 'react';

function TarefaEntrada({ adicionarTarefa }) {
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao.trim()) {
      adicionarTarefa(descricao);
      setDescricao('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Digite a descrição da tarefa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Adicionar</button>
      </div>
    </form>
  );
}

export default TarefaEntrada;
