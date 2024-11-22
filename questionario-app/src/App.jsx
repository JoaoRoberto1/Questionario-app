import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddQuestionPage from "./pages/AddQuestionPage";

function App() {
  const [questions, setQuestions] = useState([]);

  // Adicionar uma nova pergunta
  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  // Editar uma pergunta existente
  const editQuestion = (index, updatedQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
  };

  // Excluir uma pergunta
  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              questions={questions} 
              deleteQuestion={deleteQuestion} 
              editQuestion={editQuestion} 
            />
          } 
        />
        <Route 
          path="/add-question" 
          element={<AddQuestionPage addQuestion={addQuestion} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;