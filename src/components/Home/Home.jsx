import React, { useState } from 'react';

import '../Home/Home.scss';
import '../Home/Calendar.scss';

import { setMonthAction, setDayAction, setFormOpenAction } from '../../actions';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import classNames from 'classnames';

import Form from '../Form/Form';
const Home = ({ dispatch, isFormOpen }) => {

  function handlerCurrentDate(currentDate) {
    const currentMonth = currentDate.toLocaleString('en-US', { month: 'long' });
    const currentDayNumber = currentDate.toLocaleString('en-US', { day: 'numeric'});
    const currentDayString = currentDate.toLocaleString('en-US', { weekday: 'long'});
    const currentDateString = `${ getOrdinalNum(currentDayNumber) } ${ currentDayString }`;
    
    dispatch(setMonthAction(currentMonth));
    dispatch(setDayAction(currentDateString));
  }

  const getOrdinalNum = (number) => {
    let selector;
  
    if (number <= 0) {
      selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }
  
    return number + ['th', 'st', 'nd', 'rd', ''][selector];
  };
  
  return (
    <div className={classNames("content__home", {"content__dim": isFormOpen})}>
      <div className="content__photo">
        <div className="content__description">
          <h1 className="content__heading">
            Choose the day for the Meeting
          </h1>
          <p className="content__text">
            <br /> We encourage you to book your
            <br /> appointment online
            <br /> This well save you time
          </p> 
        </div>
      </div>
      <div className="content__data">
        <div className="content__calendar-wrapper">
          <Calendar
            className="content__calendar"
            locale="en"
            onChange={() => dispatch(setFormOpenAction(true))}
            onClickDay={(currentDay) => handlerCurrentDate(currentDay)}
          />
        </div>
      </div>
      {
        isFormOpen &&
        <div className="form__wrapper">
          <Form
            handleButtonClose={() => dispatch(setFormOpenAction(false))}
          />
        </div>
      }
    </div>
  )
}

const mapStateToProps = ({ isFormOpen }) => {
  return {
    isFormOpen,
  }
}

export default connect(mapStateToProps)(Home);
