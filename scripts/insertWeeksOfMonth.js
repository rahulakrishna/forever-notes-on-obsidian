module.exports = async function (tp) {
  const date = moment(tp.file.title, 'YYYY MMMM');
  const startOfMonth = date.clone().startOf('month');
  const endOfMonth = date.clone().endOf('month');

  const weeksOfMonth = [];
  let currentWeekStart = startOfMonth.clone().startOf('week'); // Start from the Sunday before or of the 1st
  let index = 1;
  while (currentWeekStart.isBefore(endOfMonth)) {
    const weekTitle = currentWeekStart.format('wo [Week] of YYYY');
    const weekLink = `[[Weeks/${weekTitle} |${index}. ${weekTitle}]]`;
    weeksOfMonth.push(weekLink);
    index++;
    currentWeekStart.add(1, 'week');
  }

  return weeksOfMonth.join('\n');
};
