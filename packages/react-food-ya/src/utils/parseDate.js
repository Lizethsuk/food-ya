const validateDayMonth = (date) => {
  const cleanedDate = Number(date);
  if (cleanedDate < 10) {
    return `0${cleanedDate}`;
  }
  return `${cleanedDate}`;
};

export const ParseDate = (day, month, year) => {
  return `${validateDayMonth(day)}/${validateDayMonth(month)}/${year}`;
};
