const cleanse = require('./cleanse');
const extractHyperLink = require('./extract-hyperlink');
const createCell = require('./create-cell');

module.exports = (data, titleRow, startDataRow, columnsIds) => {
  const cells = data.map(createCell);
  const groups = [];
  const columns = [];
  let currentType;
  const processCell = (cell) => {
    if (!groups[cell.row]) {
      groups[cell.row] = {};
    }
    const { content, row, col } = cell;
    if (row >= startDataRow) {
      const group = groups[row];
      group[columnsIds[col - 1]] = content;
      if (col === 1) {
        currentType = content;
      }
      if (col === 2) {
        group.link = extractHyperLink(cell);
      }
      group.type = currentType;
    }
  };
  cells.map(processCell);
  return {
    groups: groups.reduce(cleanse, []),
    columns,
  };
};
