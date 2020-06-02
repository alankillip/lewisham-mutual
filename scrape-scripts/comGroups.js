const cleanse = require('./cleanse');

const decant = entry => ({
  content: entry.gs$cell.$t,
  col: Number(entry.gs$cell.col),
  row: Number(entry.gs$cell.row),
});

const columnsIds = ['name', 'basedIn', 'whatDoYouDo', 'support', 'contactFromOrg', 'repName', 'repContact', 'link', 'otherInfo'];

module.exports = (data) => {
  const decanted = data.map(decant);
  const groups = [];
  const columns = [];
  const processCell = (cell) => {
    if (!groups[cell.row]) {
      groups[cell.row] = {};
    }
    const { content, row, col } = cell;
    if (row === 4) {
      columns[col - 1] = content;
    }
    if (row >= 5) {
      const group = groups[row];
      group[columnsIds[col - 1]] = content;
    }
  };
  decanted.map(processCell);
  return {
    groups: groups.reduce(cleanse, []),
    columns
  };
};
