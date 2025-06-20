module.exports = async function (tp) {
  const currentYear = moment().format('YYYY');
  const date = moment(`${tp.file.title} ${currentYear}`, 'MMMM Do YYYY');
  const weekDay = date.format('dddd');
  return `## [[${currentYear}]] ${weekDay}`;
};
