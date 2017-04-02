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
        username: () => { return username; },
        network: () => { return network; },
        content: item => { return item.caption.text; },
        background: item => { return item.images.standard_resolution.url; },
        link: item => { return item.link; },
        modifier: () => { return 'Social--hasImage'; }
      });
    });
}
