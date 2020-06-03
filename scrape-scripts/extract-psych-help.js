
const { extractData } = require('./scrape');

// Link is extracted from the name column
const columnsIds = ['type', 'name', 'phone', 'desc'];

extractData('psychHelp', 1, 4, columnsIds);
