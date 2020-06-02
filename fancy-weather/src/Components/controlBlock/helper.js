const getSeason = (month) => {
  if (month === '12' || month === '1' || month === '2') {
    return 'winter';
  }
  if (month === '3' || month === '4' || month === '5') {
    return 'spring';
  }
  if (month === '6' || month === '7' || month === '') {
    return 'summer';
  }
  return 'fall';
};

const getDayTime = (hour) => {
  if (hour < 6 || hour === '23') {
    return 'night';
  }
  if (hour >= 7 && hour <= 11) {
    return 'morning';
  }
  if (hour >= 12 && hour <= 18) {
    return 'day';
  }
  return 'evening';
};

const select = (unit, expectedUnit) => {
  if (unit === expectedUnit) return 'select';
  return '';
};

export { getDayTime, getSeason, select };
