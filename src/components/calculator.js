import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const uniformStyles = 'col-3 div height border d-flex justify-content-center align-items-center';
    const yellowButton = `${uniformStyles} bg-warning`;
    return (
      <div className="row border w-50">
        <div className="col-12 div height border d-flex justify-content-end align-items-end bg-secondary text-light">0</div>
        <div className={uniformStyles}>AC</div>
        <div className={uniformStyles}>+/-</div>
        <div className={uniformStyles}>%</div>
        <div className={yellowButton}>÷</div>
        <div className={uniformStyles}>7</div>
        <div className={uniformStyles}>8</div>
        <div className={uniformStyles}>9</div>
        <div className={yellowButton}>X</div>
        <div className={uniformStyles}>4</div>
        <div className={uniformStyles}>5</div>
        <div className={uniformStyles}>6</div>
        <div className={yellowButton}>-</div>
        <div className={uniformStyles}>1</div>
        <div className={uniformStyles}>2</div>
        <div className={uniformStyles}>3</div>
        <div className={yellowButton}>+</div>
        <div className="col-6 div height border d-flex justify-content-center align-items-center">0</div>
        <div className={uniformStyles}>.</div>
        <div className={yellowButton}>=</div>
      </div>
    );
  }
}

export default Calculator;
