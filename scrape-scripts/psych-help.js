const cleanse = require('./cleanse');

const decant = entry => ({
  content: entry.gs$cell.$t,
  col: Number(entry.gs$cell.col),
  row: Number(entry.gs$cell.row),
});

module.exports = (data, titleRow, startDataRow, columnsIds) => {
  const decanted = data.map(decant);
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
      group.type = currentType;
    }
  };
  decanted.map(processCell);
  return {
    groups: groups.reduce(cleanse, []),
    columns,
  };
};
