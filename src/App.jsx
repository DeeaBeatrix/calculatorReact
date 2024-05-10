import './App.css'
import { useState } from 'react';

const App = () => {
  // aici scriem JS
  const [currentNumber, setCurrentNumber] = useState(0); // 8 mai 20:35
  const [resetCount, setResetCount] = useState(0);

  const reset = () => {
    setCurrentNumber(0);
    setResetCount(resetCount + 1);
  };

  const increaseNumber = () => {
    if (currentNumber < 100) {
      setCurrentNumber(currentNumber + 1);
    } else
      alert('The number cannot exceed 100.');
  };

  const decreaseNumber = () => {
    if (currentNumber > -100) {
      setCurrentNumber(currentNumber - 1);
    } else
      alert('The number cannot be less than -100.');
  };

  const multiply = () => {
    if (currentNumber * 2 <= 100 && currentNumber * 2 >= -100) {
      setCurrentNumber(currentNumber * 2);
    } else
      alert('The result of multiplication exceed the range.');
  };


  const divide = () => {
    if (currentNumber / 2 <= 100 && currentNumber / 2 >= 1) {
      setCurrentNumber(currentNumber / 2);
    } else
      alert('The result of division exceeds the range.');
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);

  //   const newNumber = parseInt(formData.get('new-number'));

  //   setCurrentNumber(newNumber);
  // }

  return ( // JSX
    <div>
      {/* Event handler */}

      <div className='container'>

        <div className='buttons-container1'>
          <button onClick={multiply} > Multiply </button>
          <button onClick={divide}> Divide </button>
        </div>

        <div className='buttons-container2'>
          <button className='action-button' onClick={increaseNumber} disabled={currentNumber >= 10 ? true : false}> Increase </button>
          <button onClick={decreaseNumber} hidden={currentNumber <= 0 ? true : false}> Decrease </button>
        </div>

        <p className={currentNumber >= 5 ? 'green-number' : ''}> {currentNumber} </p>
        <button onClick={reset} className={currentNumber === 0 ? 'reset-button' : ''}> Reset </button>

        <p className='contorizator'> Ai resetat de: {resetCount} ori. </p>

      </div>


      {/* <form onSubmit={handleSubmit}>
        <input type="text" name='new-number'/>
      </form> */}
    </div>
  );
};

export default App

// Tema:

// - button pentru reset - DONE
// - button pentru inmultire cu 2 - DONE
// - button pentru impartire cu 2 - DONE
// - buttonul de decrease sa fie disabled cand cifra este mai mica decat zero - DONE 
// - sa se afiseze un alert atunci cand cifra introdusa in input este in afara intervalului (-100, 100) si sa nu se modifice currentNumber - DONE
// - butonul de reset sa fie ascuns cand cifra curenta este zero - DONE
// - intr-un loc din pagina sa se afiseze numarul de resetari ale calculatorului ( de cate ori a fost apasat butonul de reset ) - DONE

