import React, { useState } from 'react';
import './login.css';

function Login() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className='parent'>
        <strong>Parent Component </strong>Count :{count}
        <div>
          <button onClick={() => setCount(count + 1)}>increment</button>
          <button onClick={() => setCount(count - 1)}>decrement</button>
        </div>
      </div>
      <div className='flex'>
        <CardOne count={count} setCount={setCount} />
        <CardTwo count={count} setCount={setCount} />
        <CardThree count={count} setCount={setCount} />
      </div>
    </div>
  );
}

const CardOne = function (props) {
  console.log(props);
  let maxCount = 15;
  const setCount = props.setCount;
  return (
    <div>
      <div>
        Count :
        {props.count >= maxCount
          ? `Maximum count reached ${maxCount}`
          : props.count}
      </div>
      <button onClick={() => setCount((initialCount) => initialCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((initialCount) => initialCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

const CardTwo = function (props) {
  let maxCount = 8;
  const setCount = props.setCount;
  return (
    <div>
      <div>
        Count :{' '}
        {props.count >= maxCount
          ? `Maximum count reached ${maxCount}`
          : props.count}
      </div>
      <button onClick={() => setCount((initialCount) => initialCount + 1)}>
        Increment
      </button>{' '}
      <button onClick={() => setCount((initialCount) => initialCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

const CardThree = function (props) {
  let maxCount = 10;
  const setCount = props.setCount;
  return (
    <div>
      <div>
        Count :{' '}
        {props.count >= maxCount
          ? `Maximum count reached ${maxCount}`
          : props.count}
      </div>
      <button onClick={() => setCount((initialCount) => initialCount + 1)}>
        Increment
      </button>{' '}
      <button onClick={() => setCount((initialCount) => initialCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Login;
