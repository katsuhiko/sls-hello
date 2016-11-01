'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin' : '*'
    },
    body: JSON.stringify({
      message: 'Hello World!',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.helloHoge = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin' : '*'
    },
    body: JSON.stringify({
      message: `Hello ${event.pathParameters.name}!`,
      input: event,
    }),
  };

  callback(null, response);
};