import React from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../questioncard/QuestionCard";

function Home({ questions, deleteQuestion, editQuestion }) {
  return (
    <div className="container mt-4">
      <h1>Lista de Perguntas</h1>
      <Link to="/add-question" className="btn btn-primary mb-4">
        Adicionar Pergunta
      </Link>
      {questions.length > 0 ? (
        questions.map((q, index) => (
          <QuestionCard
            key={index}
            question={q}
            onDelete={() => deleteQuestion(index)} // Passa o índice correto para excluir.
            onEdit={(updatedQuestion) => editQuestion(index, updatedQuestion)} // Passa os dados atualizados para editar.
          />
        ))
      ) : (
        <p>Nenhuma pergunta cadastrada.</p>
      )}
    </div>
  );
}

export default Home;