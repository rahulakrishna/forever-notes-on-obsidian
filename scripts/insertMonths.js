module.exports = async function (tp) {
  const currentYear = moment(tp.file.title, 'YYYY MMM').format('YYYY');
  const getAllMonths = () => {
    return Array.from({ length: 12 }, (_, i) => {
      return new Date(2000, i).toLocaleString('default', { month: 'long' });
    });
  };

  const months = getAllMonths();
  const monthList = months
    .map(month => {
      return `[[Months/${currentYear} ${month} |${month}]]`;
    })
    .join(' | ');
  return monthList;
};
