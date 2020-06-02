
const { extractData } = require('./scrape');

const columnsIds = ['type', 'link', 'phone', 'desc'];

extractData('psychHelp', 1, 4, columnsIds);
