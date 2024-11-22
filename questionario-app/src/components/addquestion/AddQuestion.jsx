import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddQuestion({ addQuestion }) {
    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && name && content) {
            addQuestion({ title, name, content });
            navigate('/');
        }
    }

    return (
        <>
            <div className="container mt-4">
                <h1>Nova Pergunta</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Título</label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Seu Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dúvida</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
};

export default AddQuestion;
