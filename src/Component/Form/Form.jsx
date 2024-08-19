// import React, { useState } from 'react';

// function Form({ addFlashcard }) {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addFlashcard({ question, answer });
//     setQuestion('');
//     setAnswer('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter your question"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter the answer"
//         value={answer}
//         onChange={(e) => setAnswer(e.target.value)}
//       />
//       <button type="submit">Add Flashcard</button>
//     </form>
//   );
// }

// export default Form;