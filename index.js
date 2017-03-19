'use strict';

var request = require('request');
const fs = require('fs');


/**
 * Read a text file containing the list of tickers.
 * For each ticker in the list, download the corresponding CSV file of stock price history from Yahoo finance.
 * To download stock quotes from Yahoo Finance in CSV format, use this call:
 * http://chart.finance.yahoo.com/table.csv?s=CNXN
 * where CNXN is the stock's ticker
 */

request
    .get('http://chart.finance.yahoo.com/table.csv?s=AAPL')
    .on('error', function (err) {
        console.log(err);
    })
    .pipe(fs.createWriteStream('csv/AAPL.csv'));
