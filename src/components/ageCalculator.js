import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthdateDate = new Date(birthdate);
    const currentDate = new Date();

    const ageDifference = currentDate.getFullYear() - birthdateDate.getFullYear();
    setAge(ageDifference);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="m-5 text-center">
      <h1>Age Calculator</h1>
      <br/>
      <h6>Enter your date of birth</h6>
      <br/>
      <input
      className='p-1 col-lg-12'
          type="date"
          value={birthdate}
          onChange={(date) => setBirthdate(date.target.value)}
        />
        <br/><br/>
      <button class="btn btn-primary" onClick={calculateAge}>Calculate Age</button>
      <br/><br/>
      {age !== null && (
        <h4 >
          Your age is: {age} {age === 1 ? 'year' : 'years'} old.
        </h4>
      )}
    </div>
    </div>
  );
}

export default AgeCalculator;
