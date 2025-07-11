import {useState} from 'react'
//increase counter and show it on the screen 
function Counter() {
  const [counter, setCounter] = useState(1);
  const handleCounter = () => {
    setCounter(counter+1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Increase</button>
    </div>
  );
}

export default Counter;