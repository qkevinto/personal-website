import 'whatwg-fetch';

export default function fiveHundredPx(options) {
  const appURL = 'https://500px.com';
  const network = '500px';
  const username = options.username;
  const count = options.count;
  const consumerKey = options.extras.consumerKey;

  return fetch(`https://api.500px.com/v1/photos?feature=user&username=${username}&image_size=4&consumer_key=${consumerKey}&rpp=${count}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const activities = [];
      const photoPromises = [];

      response.photos.forEach((photo) => {
        let activity = {
          username: username,
          network: network,
          content: photo.description,
          background: photo.image_url,
          time: photo.created_at,
          link: `${appURL}${photo.url}`,
          modifier: `Social--${network.toLowerCase()}`
        };

        activities.push(activity);
      });

      return Promise.resolve(activities);
    });
}
