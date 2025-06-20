module.exports = async function (tp) {
  const currentQuarter = moment(tp.file.title, 'YYYY [Q]Q').format('Q');
  const currentYear = moment(tp.file.title, 'YYYY [Q]Q').format('YYYY');

  const quarterMonths = {
    1: [0, 1, 2], // Jan, Feb, Mar
    2: [3, 4, 5], // Apr, May, Jun
    3: [6, 7, 8], // Jul, Aug, Sep
    4: [9, 10, 11], // Oct, Nov, Dec
  };

  const getAllMonths = () => {
    return quarterMonths[currentQuarter].map(monthIndex => {
      return new Date(2000, monthIndex).toLocaleString('default', {
        month: 'long',
      });
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
