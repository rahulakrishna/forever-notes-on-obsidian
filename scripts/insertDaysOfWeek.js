module.exports = async function (tp) {
  const currentYear = moment().format('YYYY');
  const startOfWeek = moment(
    `${tp.file.title} of ${currentYear}`,
    'wo [Week] of gggg',
  ).startOf('week'); // Sunday
  const year = currentYear; // Extract year from title
  const weekNum = parseInt(tp.file.title.split(' ')[0], 10); // Extract actual week number
  const currWeek = moment().year(year).week(weekNum).startOf('week');
  const daysWithDates = [];

  for (let i = 0; i < 7; i++) {
    const day = currWeek.clone().add(i, 'days');
    daysWithDates.push({
      day: day.format('ddd'), // e.g., "Monday"
      date: day.format('MMMM Do'), // e.g., "June 16th"
    });
  }

  console.log(daysWithDates);
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
  const dayList = daysWithDates
    .map(({ day, date }) => {
      const m = moment(date, 'MMMM Do');
      const d = m.date();
      return `[[Daily/${date} |${day} ${d}${ordinal(d)}]]`;
    })
    .join(' | ');
  return dayList;
};
