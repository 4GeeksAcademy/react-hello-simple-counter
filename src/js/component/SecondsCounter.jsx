import React from "react";
import propTypes from 'prop-types';

function SecondsCounter(props) {
return (
    <div className="container">
      <div className="row">
        <div className="col">
          <i className="fas fa-stopwatch"></i>
        </div>
        <div className="col">{props.Digit_6 % 10}</div>
        <div className="col">{props.Digit_5 % 10}</div>
        <div className="col">{props.Digit_4 % 10}</div>
        <div className="col">{props.Digit_3 % 10}</div>
        <div className="col">{props.Digit_2 % 10}</div>
        <div className="col">{props.Digit_1 % 10}</div>
      </div>
    </div>
  );
}

// define that only numbers will be the propTypes
SecondsCounter.propTypes = {
  Digit_1: propTypes.number,
  Digit_2: propTypes.number,
  Digit_3: propTypes.number,
  Digit_4: propTypes.number,
  Digit_5: propTypes.number,
  Digit_6: propTypes.number,
};

export default SecondsCounter;
