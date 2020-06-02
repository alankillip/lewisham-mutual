const cleanseNull = require('./cleanse');

const decant = entry => ({
  content: entry.gs$cell.$t,
  link: entry.gs$cell.inputValue,
  col: Number(entry.gs$cell.col),
  row: Number(entry.gs$cell.row),
});

module.exports = (data) => {
  const decanted = data.map(decant);
  const links = [];
  const processCell = (cell) => {
    if (!links[cell.row]) {
      links[cell.row] = {};
    }
    const link = links[cell.row];
    if (cell.col === 1) {
      link.content = cell.content;
      if (cell.link.indexOf('HYPERLINK') > -1) {
        const regex = new RegExp('(http|ftp|https)://([\\w_-]+(?:(?:\\.[\\w_-]+)+))([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?');
        const extractedHypeLinkData = regex.exec(cell.link);
        if (extractedHypeLinkData) {
          link.link = extractedHypeLinkData[0];
        } else {
          console.warn('no url extracted from ', link.content);
        }
      } else {
        console.warn('no hyperlink for ', link.content);
        link.link = '';
      }
    }
    if (cell.col === 2) {
      link.type = cell.content;
    }
  };
  decanted.map(processCell);
  return links.reduce(cleanseNull, []);
};
