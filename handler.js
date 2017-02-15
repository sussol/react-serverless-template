'use strict';

const mysql = require('mysql');
const crypto = require('crypto');

/**
* Handler method for myFunction. Does great stuff that you should describe!
**/
module.exports.myFunction = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
