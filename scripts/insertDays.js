module.exports = async function (tp) {
  const currentYear = moment(tp.file.title, 'YYYY MMM').format('YYYY');
  const currentMonth = moment(tp.file.title, 'YYYY MMM').format('MM');

  function getAllDaysInMonth(year, month) {
    const days = [];
    const date = moment(`${year}-${month}-01`, 'YYYY-MM-DD'); // month is 0-based
    const daysInMonth = date.daysInMonth();

    for (let i = 0; i < daysInMonth; i++) {
      days.push(date.clone().add(i, 'days').format('MMMM Do'));
    }

    return days;
  }

  const days = getAllDaysInMonth(currentYear, currentMonth);
  function ordinal(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  const dayList = days
    .map(day => {
      const m = moment(day, 'MMMM Do');
      const d = m.date();
      return `[[Daily/${day} |${d}${ordinal(d)}]]`;
    })
    .join(' | ');
  return dayList;
};
