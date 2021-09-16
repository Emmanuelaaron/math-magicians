/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable  react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const uniformStyles = 'col-3 div height border d-flex justify-content-center align-items-center';
    const yellowButton = `${uniformStyles} bg-warning`;
    return (
      <div className="row border w-50">
        <div className="col-12 div height border d-flex justify-content-end align-items-end bg-secondary text-light" role="button">{this.props.total}</div>
        <div className={uniformStyles} role="button">AC</div>
        <div className={uniformStyles} role="button">+/-</div>
        <div className={uniformStyles} role="button">%</div>
        <div className={yellowButton} role="button">÷</div>
        <div className={uniformStyles} role="button">7</div>
        <div className={uniformStyles} role="button">8</div>
        <div className={uniformStyles} role="button">9</div>
        <div className={yellowButton} role="button">X</div>
        <div className={uniformStyles} role="button">4</div>
        <div className={uniformStyles} role="button">5</div>
        <div className={uniformStyles} role="button">6</div>
        <div className={yellowButton} role="button">-</div>
        <div className={uniformStyles} role="button">1</div>
        <div className={uniformStyles} role="button">2</div>
        <div className={uniformStyles} role="button">3</div>
        <div className={yellowButton} role="button">+</div>
        <div className="col-6 div height border d-flex justify-content-center align-items-center" role="button">0</div>
        <div className={uniformStyles} role="button">.</div>
        <div className={yellowButton} role="button">=</div>
      </div>
    );
  }
}
Calculator.defaultProps = { total: 0 };
export default Calculator;
