import React, { useState } from 'react';

function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped ? <p>{answer}</p> : <p>{question}</p>}
    </div>
  );
}

export default Flashcard;