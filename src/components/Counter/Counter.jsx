import { useState, CSSProperties } from "react";
import PropTypes from 'prop-types';
import './Counter.css'

export const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const increase = () => {
    setCounter(counter + 1);
  }

  const decrease = () => {
    const temp = counter - 1;
    setCounter(temp > 0 ? temp : 0);
  }

  return (
    <div className="counter">
      <h2 className="counter__title">Counter</h2>
      <div className="counter__buttons">
        <button className="counter__btn" onClick={decrease}> - </button>
        <span className="counter__value"> {counter} </span>
        <button className="counter__btn" onClick={increase}> + </button>
      </div>
    </div>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
}
