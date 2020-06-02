// Removes null or empty values
module.exports = (result, item) => {
  if (item) {
    if (Object.keys(item).length > 0) {
      return result.concat(item);
    }
  }
  return result;
}
