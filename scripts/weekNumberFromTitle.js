module.exports = async function (tp, additive = 0) {
  return parseInt(tp.file.title.split(' ')[0]) + additive;
};
