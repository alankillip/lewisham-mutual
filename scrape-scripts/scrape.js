const fs = require('fs');
const axios = require('axios');
const links = require('./links');
const commGroups = require('./comGroups');

const sheetId = '1WkJNtMMHr-acAa_kBcflkkHCYSZ21zr-klgaTfP_tiI';

const pages = {
  links: { pageId: '2', processor: links },
  commGroups: { pageId: '5', processor: commGroups },
};

const dataExtracted = title => (err, promise) => {
  console.log('dataExtracted', title, err);
};

const writeFile = (title, data) => {
  console.log('writing file for ', title);
  fs.writeFile(`../src/data/${title}.json`, JSON.stringify(data), dataExtracted(title));
};

const sheetExtracted = pageKey => (data) => {
  console.log('sheetExtracted', data.data.feed.entry.length, ' cells');
  writeFile(pageKey, pages[pageKey].processor(data.data.feed.entry));
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

const extractComgroups = () => {
  extractSheet('commGroups').then(sheetExtracted('commGroups'));
};

module.exports = {
  extractLinks,
  extractComgroups,
};
