module.exports = async function (tp) {
  const weekNum = parseInt(tp.file.title.split(' ')[0], 10); // Extract actual week number
  const year = moment().year();

  const currWeek = moment().year(year).week(weekNum).startOf('week');
  const prevWeek = moment(currWeek).subtract(1, 'weeks');
  const nextWeek = moment(currWeek).add(1, 'weeks');
  const currentMonth = currWeek.startOf('week').format('MMMM');
  const currentYear = currWeek.startOf('week').format('YYYY');
  const endMonth = currWeek.endOf('week').format('MMMM');
  const endYear = currWeek.endOf('week').year();

  const weekIsInTwoMonths =
    currWeek.startOf('week').month() !== currWeek.endOf('week').month();
  const monthLink = weekIsInTwoMonths
    ? `[[Months/${currentYear} ${currentMonth} |${currentMonth}]] | [[Months/${endYear} ${endMonth} |${endMonth}]]`
    : `[[Months/${currWeek.format('YYYY')} ${currentMonth} |${currentMonth}]]`;

  const quarterLink = `[[Quarters/${currWeek.format('YYYY')} Q${Math.ceil(
    (currWeek.month() + 1) / 3,
  )} |Q${Math.ceil((currWeek.month() + 1) / 3)} ${year}]]`;

  return `${monthLink} | ${quarterLink} | [[Weeks/${prevWeek.format(
    'wo [Week]',
  )} |← ${prevWeek.format(
    '[Week] wo',
  )}]] | [Today](obsidian://daily) | [[Weeks/${nextWeek.format(
    'wo [Week]',
  )} |${nextWeek.format('[Week] wo')} →]]`;
};
