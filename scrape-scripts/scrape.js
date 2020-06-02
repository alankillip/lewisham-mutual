const fs = require('fs');
const axios = require('axios');
const links = require('./links');
const general = require('./general');
const psych = require('./psych-help');

const sheetId = '1WkJNtMMHr-acAa_kBcflkkHCYSZ21zr-klgaTfP_tiI';

const pages = {
  links: { pageId: '2', processor: links },
  commGroups: { pageId: '5', processor: general },
  supportLocalBusiness: { pageId: '7', processor: general },
  meetings: { pageId: '8', processor: general },
  workersRights: { pageId: '11', processor: general },
  psychHelp: { pageId: '12', processor: psych },
};

const dataExtracted = title => (err, promise) => {
  console.log('dataExtracted', title, err);
};

const writeFile = (title, data) => {
  console.log('writing file for ', title);
  fs.writeFile(`../src/data/${title}.json`, JSON.stringify(data), dataExtracted(title));
};

const sheetExtracted = (pageKey, titleRow, startDataRow, columnsIds) => (data) => {
  console.log('sheetExtracted', data.data.feed.entry.length, ' cells');
  writeFile(pageKey, pages[pageKey].processor(data.data.feed.entry, titleRow, startDataRow, columnsIds));
};

const extractSheet = async (pageKey) => {
  try {
    return await axios.get(`https://spreadsheets.google.com/feeds/cells/${sheetId}/${pages[pageKey].pageId}/public/full?alt=json`);
  } catch (error) {
    console.error(error);
    return error;
  }
};

const extractLinks = () => {
  extractSheet('links').then(sheetExtracted('links'));
};

const extractData = (id, titleRow, startDataRow, columnsIds) => {
  extractSheet(id).then(sheetExtracted(id, titleRow, startDataRow, columnsIds));
};

module.exports = {
  extractLinks,
  extractData,
};
