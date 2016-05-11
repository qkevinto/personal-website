/**
 * Handles errors for social parsers
 * @param  {Object} error         Error object
 * @param  {String} username = '' Username of network
 * @param  {String} network  = '' Network name
 * @return {Promise}              A promise with a single array of activity with
 *                                error message.
 */
export default function socialParserErrorHandler(error, username = '', network = '') {
  console.error(error);
  
  return Promise.resolve([{
    username: username,
    network: network,
    content: 'Uh oh, something went wrong whilst trying to retrieve social activity.',
    background: '',
    link: '#0',
    modifier: ''
  }]);
};
