import test from 'ava';
import socialParserErrorHandler from './index.js';

test('Returns a placeholder response array', t => {
  // Suppress error from socialParserErrorHandler
  console.error = () => {};
  return socialParserErrorHandler(new TypeError('Error'))
  .then(response => {
    t.plan(2);
    t.is(response.length, 1);
    t.not(response[0].content, 'undefined');
  });
});
