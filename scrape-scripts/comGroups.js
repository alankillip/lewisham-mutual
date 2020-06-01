const cleanseNull = require('./cleanse-null');

const decant = entry => ({
  content: entry.gs$cell.$t,
  col: Number(entry.gs$cell.col),
  row: Number(entry.gs$cell.row),
});

module.exports = (data) => {
  const decanted = data.map(decant);
  const groups = [];
  const processCell = (cell) => {
    if (!groups[cell.row]) {
      groups[cell.row] = {};
    }
    const group = groups[cell.row];
    const { content } = cell;
    if (cell.col === 1) {
      group.name = content;
    }
    if (cell.col === 2) {
      group.basedIn = content;
    }
    if (cell.col === 3) {
      group.whatDoYouDo = content;
    }
    if (cell.col === 4) {
      group.support = content;
    }
    if (cell.col === 5) {
      group.contactFromOrg = content;
    }
    if (cell.col === 6) {
      group.repName = content;
    }
    if (cell.col === 7) {
      group.repContact = content;
    }
    if (cell.col === 8) {
      group.link = content;
    }
    if (cell.col === 9) {
      group.otherInfo = content;
    }
  };
  decanted.map(processCell);
  return groups.reduce(cleanseNull, []);
};
