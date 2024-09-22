import { useEffect } from 'react';
import { useState } from 'react';

const UseEffectTest = () => {
    const [toggleOne, setToggleOne] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(false);
    const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('UseEffect1 Ran');
  }, []);
  useEffect(() => {
    console.log('UseEffect2 Ran');
    if (toggleTwo)
      console.log('toggleTwo slice of state is true so this code runs');
  }, [toggleTwo]);
  useEffect(() => {
    setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);
  }, [count]);
  
  

  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>UseEffectTest Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleOne(!toggleTwo)}>toggleTwo</button>
      <button onClick={() => setCount}>increase</button>
    </div>
  );
};

export default UseEffectTest;