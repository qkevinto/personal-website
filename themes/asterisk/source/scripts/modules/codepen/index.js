import 'whatwg-fetch';
import striptags from 'striptags';

export default function codepen(options) {
  const network = 'CodePen';
  const username = options.username;
  const count = options.count;

  return fetch(`http://cpv2api.com/pens/public/${username}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const activities = [];
      const slicedResponse = response.data.slice(0, count);

      slicedResponse.forEach((pen) => {
        let activity = {
          username: username,
          network: network,
          content: striptags(pen.details),
          background: pen.images.large,
          time: '',
          link: pen.link,
          modifier: `Social--${network.toLowerCase()}`
        };

        activities.push(activity);
      });

      return Promise.resolve(activities);
    });
}
