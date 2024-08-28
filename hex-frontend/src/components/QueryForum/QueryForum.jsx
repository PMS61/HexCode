import React from 'react';
import './query.css';

function QueryForum() {
  const questions = [
    {
      id: 1,
      title: "How to handle CORS in Express.js?",
      body: "I'm having trouble with CORS in my Express.js app. Any suggestions?",
      responses: [
        { id: 1, company: "Company A", answer: "You can use the cors package from npm to handle CORS in Express.js." },
        { id: 2, company: "Company B", answer: "You can also set headers manually to allow CORS in Express.js." }
      ]
    },
    {
      id: 2,
      title: "How to deploy a React app to Heroku?",
      body: "What's the best way to deploy a React app to Heroku?",
      responses: [
        { id: 3, company: "Company C", answer: "You can deploy your React app to Heroku using the Heroku CLI." },
        { id: 4, company: "Company D", answer: "You can also deploy your React app to Heroku using GitHub Actions." }
      ]
    },
    {
      id: 3,
      title: "How to deploy a React app to Heroku?",
      body: "What's the best way to deploy a React app to Heroku?",
      responses: [
        { id: 3, company: "Company C", answer: "You can deploy your React app to Heroku using the Heroku CLI." },
        { id: 4, company: "Company D", answer: "You can also deploy your React app to Heroku using GitHub Actions." }
      ]
    }
  ];

  return (
    <div className="App">
      <header className="bg-tertiary">
        <h1>Query Forum</h1>
      </header>
      
      <section className="questions" >
        <h2 className=" bg-secondary">Questions</h2>
        <ul className="flex flex-col border-10">
          {questions.map((question) => (
            <li key={question.id}>
              <h3>{question.title}</h3>
              <p>{question.body}</p>
              <ul className="flex flex-col">
                {question.responses.map((response) => (
                  <li className="flex flex-col"key={response.id}>
                    <strong>{response.company}:</strong> {response.answer}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default QueryForum;