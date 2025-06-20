module.exports = async function (tp) {
  const currentYear = moment().format('YYYY');
  return `[[${currentYear}]]`;
};
