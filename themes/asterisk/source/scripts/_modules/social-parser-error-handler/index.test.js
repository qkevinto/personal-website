import test from 'ava';
import socialParserErrorHandler from './index.js';

test('Should return an array with length of 1', t => {
  // Suppress error from socialParserErrorHandler
  console.error = () => {};
  return socialParserErrorHandler(new TypeError('Error'))
  .then(response => {
    t.is(response.length, 1);
  });
});

test('Should return user friendly error placeholder message', t => {
  // Suppress error from socialParserErrorHandler
  console.error = () => {};
  return socialParserErrorHandler(new TypeError('Error'), 'username', 'network')
  .then(response => {
    t.is(response[0].content,
      'Uh oh, something went wrong whilst trying to retrieve social activity.');
  });
});

test('Should return username and network', t => {
  // Suppress error from socialParserErrorHandler
  console.error = () => {};
  return socialParserErrorHandler(new TypeError('Error'), 'username', 'network')
  .then(response => {
    t.plan(2);
    t.is(response[0].username, 'username');
    t.is(response[0].network, 'network');
  });
});