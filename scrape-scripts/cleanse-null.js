module.exports = (result, item) => {
  if (item) {
    return result.concat(item);
  }
  return result;
}
