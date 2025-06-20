module.exports = async function (tp) {
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
  const fileDate = moment(tp.file.title, 'MMMM Do');
  const year = fileDate.format('YYYY');
  const monthString = fileDate.format('MMMM');
  const weekString = fileDate.format('wo [Week]');
  const weekNum = fileDate.format('wo');
  const weekDay = fileDate.format('dddd');
  const prev = fileDate.clone().subtract(1, 'days');
  const next = fileDate.clone().add(1, 'days');
  const prevDay = prev.date();
  const nextDay = next.date();
  const prevStr = prev.format('MMMM ') + prevDay + ordinal(prevDay);
  const nextStr = next.format('MMMM ') + nextDay + ordinal(nextDay);
  const monthLink = `[[Months/${monthString} |${monthString}]]`;
  const weekLink = `[[Weeks/${weekString} |${weekString}]]`;
  const prevLink = `[[Daily/${prevStr} |← Back]]`;
  const nextLink = `[[Daily/${nextStr} |Next →]]`;
  const todayLink = `[Today](obsidian://daily)`;
  const homeLink = '[[Home |🏠 Home]]';
  const finalString = `${homeLink} | ${monthLink} | ${weekLink} | ${prevLink} | ${todayLink} | ${nextLink}`;
  return finalString;
};
