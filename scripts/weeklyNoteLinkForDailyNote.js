module.exports = async function (tp) {
  // Parse the new daily note title format
  const fileDate = moment(tp.file.title, 'MMMM Do');
  const weekTitle = fileDate.format('wo [Week]');
  const monthString = fileDate.format('MMMM');
  const month = fileDate.format('MMMM');
  const monthLink = `[[Months/${monthString} |${month}]]`;
  const weeklyNoteLink = `[[Weeks/${weekTitle} |${weekTitle}]]`;
  const finalString = `${monthLink} | ${weeklyNoteLink}`;
  return finalString;
};
