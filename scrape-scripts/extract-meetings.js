const { extractData } = require('./scrape');

const columnsIds = ['date', 'agenda', 'minutes', 'linkToJoin', 'chair', 'summary'];

extractData('meetings', 2, 3, columnsIds);
