import 'whatwg-fetch';
import socialParser from 'social-parser';

/**
 * Instagram parser
 * @return {Promise} A promise that is resolved with the social activities
 *                   object.
 */
export default function instagram() {
  const network = 'Instagram';
  const username = 'qkevinto';

  return fetch('https://pacific-caverns-68032.herokuapp.com/')
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return socialParser(response.items, {
        username: () => username,
        network: () => network,
        content: item => item.caption.text,
        background: item => item.images.standard_resolution.url,
        link: item => item.link,
        modifier: () => 'Social--hasImage',
        date: item => new Date(item.caption.created_time * 1000),
        extras: item => `${item.likes.count} Like${item.likes.count > 1 ? 's' : '' }`
      });
    });
}
