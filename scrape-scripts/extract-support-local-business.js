const { extractData } = require('./scrape');

const columnsIds = ['name', 'details', 'howYouCanHelp', 'links'];

extractData('supportLocalBusiness', 1, 2, columnsIds);
