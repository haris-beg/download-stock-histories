'use strict';

var request = require('request');
const fs = require('fs');
const readline = require('readline');

const outputDir = 'csv/'; //
const baseURL = 'http://chart.finance.yahoo.com/table.csv?s=';
const outputFileExt = '.csv';
const tickerListFile = 'ticker-list.txt';

/**
 * Read a text file containing the list of tickers.
 * For each ticker in the list, download the corresponding CSV file of stock price history from Yahoo finance.
 */

var downloadCSV = function (ticker) {
    var wsURL = baseURL + ticker;
    var csvFileName = outputDir + ticker + outputFileExt;
    request
        .get(wsURL)
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(fs.createWriteStream(csvFileName));
};

var processTickerList = function (fileName) {
    // ensure output directory exists
    fs.existsSync(outputDir) || fs.mkdirSync(outputDir);

    const rl = readline.createInterface({
        input: fs.createReadStream(fileName)
    });

    //Note: string templates are only supported by ES6 or later versions
    rl.on('line', (line) => {
        console.log(`Line from file: ${line}`);
        downloadCSV(line);
    });
};

processTickerList(tickerListFile);