export const setMonthAction = (month) => {
  return {
    type: 'SET_MONTH',
    payload: month,
  }
}

export const setDayAction = (day) => {
  return {
    type: 'SET_DAY',
    payload: day,
  }
}

export const setFormOpenAction = (isOpen) => {
  console.log(isOpen);
  return {
    type: 'SET_FORM_OPEN',
    payload: isOpen,
  }
}
