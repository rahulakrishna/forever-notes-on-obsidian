module.exports = async function (tp) {
  const date = moment(tp.file.title, 'YYYY-MM-DD ddd');

  const weekTitle = moment(date).format('wo [Week] of gggg');
  const weekLink = `[[Weeks/${weekTitle} |${weekTitle}]]`;
  return weekLink;
};
