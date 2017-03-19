'use strict';

var request = require('request');


/**
 * Read a text file containing the list of tickers.
 * For each ticker in the list, download the corresponding CSV file of stock price history from Yahoo finance.
 */

var ticker = 'AAPL';
