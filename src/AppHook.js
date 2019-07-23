import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() =>{
    document.title = count;
  }, [count]);

  return (
    <div className="App">
      Count: {count}
      <hr/>
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
      <button onClick={() => setCount(count - 1)}>Dec Count</button>
    </div>
  );
}

export default App;
