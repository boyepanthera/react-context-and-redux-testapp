import React, { useState } from 'react';
import './signup.css';

function Signup() {
  const [currentLevel, setCurrentLevel] = useState(1);
  return (
    <div>
      <form>
        <h2>Step {currentLevel}</h2>
        <BasicInfo
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
        />
        <AuthInfo
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
        />
        <PaymentInfo
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
        />
      </form>
    </div>
  );
}

function BasicInfo({ currentLevel, setCurrentLevel }) {
  if (currentLevel === 1) {
    return (
      <React.Fragment>
        <h3>Basic Information</h3>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            type='text'
            name='firstName'
            placeholder='John'
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input id='lastName' type='text' name='lastName' placeholder='Doe' />
        </div>
        <div>
          <label>Email</label>
          <input type='email' name='email' placeholder='johndoe@gmail.com' />
        </div>
        <div>
          <label>Gender</label>
          <select name='gender'>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='neutral'>Don't want to say</option>
          </select>
        </div>
        <button type='button' onClick={() => setCurrentLevel(currentLevel + 1)}>
          Next
        </button>
      </React.Fragment>
    );
  } else {
    return null;
  }
}

function AuthInfo({ currentLevel, setCurrentLevel }) {
  if (currentLevel === 2) {
    return (
      <>
        <h3>Authentication Information</h3>
        <div>
          <label htmlFor=''>Username</label>
          <input type='text' name='userName' />
        </div>
        <div>
          <label htmlFor=''>Password</label>
          <input type='password' name='password' />
        </div>
        <div>
          <label htmlFor=''>Confirm Password</label>
          <input type='password' name='confirmPassword' />
        </div>
        <div id='flex'>
          <button
            type='button'
            onClick={() => setCurrentLevel(currentLevel - 1)}
          >
            Previous
          </button>
          <button
            type='button'
            onClick={() => setCurrentLevel(currentLevel + 1)}
          >
            Next
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
}

function PaymentInfo({ currentLevel, setCurrentLevel }) {
  if (currentLevel === 3) {
    return (
      <>
        <h3>Payment Information</h3>
        <div>
          <label>BVN</label>
          <input type='text' name='bvn' />
        </div>
        <div>
          <label>Bank Name</label>
          <select name='bankName'>
            <option value='uba'>UBA</option>
            <option value='first bank'>First Bank</option>
            <option value='zenith bank'>Zenith Bank</option>
            <option value='gt bank'>GT Bank</option>
          </select>
        </div>
        <div>
          <label>Account Number</label>
          <input type='text' name='accountNumber' />
        </div>
        <div id='flex'>
          <button
            onClick={() => setCurrentLevel(currentLevel - 1)}
            type='button'
          >
            Previous
          </button>
          <button type='submit'>Complete Registration</button>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default Signup;
