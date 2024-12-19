import { useState } from 'react';
import randomColor from 'randomcolor';
import './App.css';

function App() {
  //const [count, setCount] = useState(0);
  const [color, setColor] = useState('#ffffff');

  return (
    <div className='bgColor' style={{ backgroundColor: color }}>
      <h1>색을 바꿔보자</h1>
      <div className='card'>
        <button onClick={() => setColor((color) => randomColor())}>
          color is {color}
        </button>
      </div>
      <p className='read-the-docs'>누르면 색 바뀐다?</p>
    </div>

    // <>
    //   <h1>색을 바꿔보자</h1>
    //   <div className='card'>
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //   </div>
    //   <p className='read-the-docs'>누르면 색 바뀐다?</p>
    // </>
  );
}

export default App;
