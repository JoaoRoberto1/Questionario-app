import React, { useState } from "react";

function QuestionCard({ question, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(question.title);
  const [name, setName] = useState(question.name);
  const [content, setContent] = useState(question.content);

  const handleSave = () => {
    onEdit({ title, name, content }); // Passa os dados atualizados para o componente pai.
    setIsEditing(false); // Sai do modo de edição.
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título"
            />
            <input
              type="text"
              className="form-control mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
            />
            <textarea
              className="form-control mb-2"
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Pergunta"
            ></textarea>
            <button className="btn btn-success me-2" onClick={handleSave}>
              Salvar
            </button>
            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
              Cancelar
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">{question.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Por: {question.name}</h6>
            <p className="card-text">{question.content}</p>
            <button className="btn btn-warning me-2" onClick={() => setIsEditing(true)}>
              Editar
            </button>
            <button className="btn btn-danger" onClick={onDelete}>
              Excluir
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;