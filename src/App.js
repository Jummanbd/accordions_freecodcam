import React, {useState} from 'react';
import './Components/Style/App.css';
import Question from './Components/Question';
import './Components/Data';
import data from './Components/Data'
function App() {
  const [questions, setQuestions] = useState(data);

  return (
   <main>
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {questions.map((question) => {
          return <Question key={question.id} {...question}/>
        })}
      </section>
    </div>
   </main>
  );
}

export default App;
