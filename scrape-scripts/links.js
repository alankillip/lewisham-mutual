const cleanseNull = require('./cleanse');
const extractHyperLink = require('./extract-hyperlink');
const createCell = require('./create-cell');

module.exports = (data) => {
  const cells = data.map(createCell);
  const links = [];
  const processCell = (cell) => {
    if (!links[cell.row]) {
      links[cell.row] = {};
    }
    const link = links[cell.row];
    if (cell.col === 1) {
      link.content = cell.content;
      link.link = extractHyperLink(cell);

    }
    if (cell.col === 2) {
      link.type = cell.content;
    }
  };
  cells.map(processCell);
  return links.reduce(cleanseNull, []);
};
