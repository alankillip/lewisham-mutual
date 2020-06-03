const cleanse = require('./cleanse');
const createCell = require('./create-cell');

module.exports = (data, titleRow, startDataRow, columnsIds) => {
  const cells = data.map(createCell);
  const groups = [];
  const columns = [];
  const processCell = (cell) => {
    if (!groups[cell.row]) {
      groups[cell.row] = {};
    }
    const { content, row, col } = cell;
    if (row === titleRow) {
      columns[col - 1] = content;
    }
    if (row >= startDataRow) {
      const group = groups[row];
      group[columnsIds[col - 1]] = content;
    }
  };
  cells.map(processCell);
  return {
    groups: groups.reduce(cleanse, []),
    columns,
  };
};
