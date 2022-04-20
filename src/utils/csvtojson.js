const csv = require('csvtojson');
const moment = require('moment');
const path = require('path');

async function getCalendarDataFromCsv() {
  const result = await csv({
    colParser: {
      date: function (date) {
        return moment(date, 'DD/MM/YYYY').toDate();
      },
      day: 'omit',
      G5A: function (item) {
        if (item === 'T') return false;
        return true;
      },
      G5B: function (item) {
        if (item === 'T') return false;
        return true;
      },
      G5C: function (item) {
        if (item === 'T') return false;
        return true;
      },
      G5D: function (item) {
        if (item === 'T') return false;
        return true;
      },
      G5E: function (item) {
        if (item === 'T') return false;
        return true;
      },
      G6A: function (item) {
        if (item === 'T') return false;
        return true;
      },
      G6B: function (item) {
        if (item === 'T') return false;
        return true;
      },
      G6C: function (item) {
        if (item === 'T') return false;
        return true;
      },
      G6D: function (item) {
        if (item === 'T') return false;
        return true;
      },
      G6E: function (item) {
        if (item === 'T') return false;
        return true;
      },
    },
  }).fromFile(path.join(__dirname, '../../data/grilla.csv'));
  return result;
}

async function getGroupDataFromCsv() {
  const result = await csv().fromFile(
    path.join(__dirname, '../../data/nomina.csv')
  );
  return result;
}

module.exports = { getCalendarDataFromCsv, getGroupDataFromCsv };
