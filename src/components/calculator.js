/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calulation, setCalculation] = useState({ total: null, next: null, operation: null });
  const { total, next } = calulation;

  const clickHandler = (e) => {
    setCalculation((state) => calculate(state, e.target.innerHTML));
  };

  const uniformStyles = 'col-3 div height border d-flex justify-content-center align-items-center';
  const yellowButton = `${uniformStyles} bg-warning`;
  return (
    <>

      <div className="calculator">
        <p>Lets do some Mathematics</p>
        <div className="row border w-50">
          <div className="col-12 div height border d-flex justify-content-end align-items-end bg-secondary text-light">{next || total || '0'}</div>
          <button type="button" className={uniformStyles} onClick={clickHandler}>AC</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>+/-</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>%</button>
          <button type="button" className={yellowButton} onClick={clickHandler}>÷</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>7</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>8</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>9</button>
          <button type="button" className={yellowButton} onClick={clickHandler}>x</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>4</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>5</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>6</button>
          <button type="button" className={yellowButton} onClick={clickHandler}>-</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>1</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>2</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>3</button>
          <button type="button" className={yellowButton} onClick={clickHandler}>+</button>
          <button type="button" className="col-6 div height border d-flex justify-content-center align-items-center" onClick={clickHandler}>0</button>
          <button type="button" className={uniformStyles} onClick={clickHandler}>.</button>
          <button type="button" className={yellowButton} onClick={clickHandler}>=</button>
        </div>
      </div>
    </>
  );
};
export default Calculator;
