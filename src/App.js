import React, { useState } from 'react';
import data from './data';

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let amountOfParagraphs = parseInt(count);

    // amountOfParagraphs = count <= 0 ? 1 : (count > 9 ? 9 : count)

    if(count <= 0) {
      amountOfParagraphs = 1;
    } 
    if(count > 9) {
      amountOfParagraphs = 9;
    } 

    // switch (true) {
    //   case count <= 0:
    //     amountOfParagraphs = 1;
    //     return;
    //   case count > 9:
    //     amountOfParagraphs = 9;
    //     return;
    //   default:
    //     amountOfParagraphs = count
    // }
    setText(data.slice(0, amountOfParagraphs));
  };
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className="btn">genetate</button>
      </form>
      <article className='lorem-text'>
        {text.map( (item, index) => {
          return <p key={index}>{item}</p>
        })}

      </article>
    </section>
  );
}

export default App;
