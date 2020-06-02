
const { extractData } = require('./scrape');

const columnsIds = ['organisation', 'topic', 'type', 'website', 'detailsNotes', 'targetGroup'];

extractData('workersRights', 6, 7, columnsIds);
