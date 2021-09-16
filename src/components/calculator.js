/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.innerHTML));
  }

  render() {
    const uniformStyles = 'col-3 div height border d-flex justify-content-center align-items-center';
    const yellowButton = `${uniformStyles} bg-warning`;
    return (
      <div className="row border w-50">
        <div className="col-12 div height border d-flex justify-content-end align-items-end bg-secondary text-light">{this.state.next || this.state.total}</div>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>AC</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>+/-</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>%</button>
        <button type="button" className={yellowButton} onClick={this.clickHandler}>÷</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>7</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>8</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>9</button>
        <button type="button" className={yellowButton} onClick={this.clickHandler}>x</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>4</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>5</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>6</button>
        <button type="button" className={yellowButton} onClick={this.clickHandler}>-</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>1</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>2</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>3</button>
        <button type="button" className={yellowButton} onClick={this.clickHandler}>+</button>
        <button type="button" className="col-6 div height border d-flex justify-content-center align-items-center" onClick={this.clickHandler}>0</button>
        <button type="button" className={uniformStyles} onClick={this.clickHandler}>.</button>
        <button type="button" className={yellowButton} onClick={this.clickHandler}>=</button>
      </div>
    );
  }
}
export default Calculator;
