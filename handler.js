'use strict';

const createResponse = (statusCode, body) => (
  {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(body),
  }
);

module.exports.hello = (event, context, callback) => {
  callback(null, createResponse(200, { message: 'Hello World!' }));
};

module.exports.helloHoge = (event, context, callback) => {
  callback(null, createResponse(200, { message: `Hello ${event.pathParameters.name}!` }));
};
