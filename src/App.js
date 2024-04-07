import './App.css';

import {useEffect, useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect ran. count is: ', count);
  }, [count]); // 👈️ add state variables you want to track

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;
