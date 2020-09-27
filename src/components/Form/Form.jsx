import React from 'react';
import { connect } from 'react-redux';

import '../Form/Form.scss';

const Form = ({ handleButtonClose, day, month }) => {
  return (
    <div className="form__wrapper">
      <div className="form__month">
        <label htmlFor="month">Month</label>
        <input
          className="form__month-text"
          type="text"
          id="month"
          value={month}
        />
      </div>
      <div className="form__day">
        <label htmlFor="day">Day</label>
        <input
          className="form__day-text"
          type="text"
          id="day"
          value={day}
        />
      </div>
      <button
        className="form__exit"
        onClick={handleButtonClose}
      >
        &#10006;
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    month: state.month,
    day: state.day,
  }
}

export default connect(mapStateToProps)(Form);
