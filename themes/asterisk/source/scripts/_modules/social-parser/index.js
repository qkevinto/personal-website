import striptags from 'striptags';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

/**
 * Parse social activities from API response
 * @param  {Array}  responseActivities An array of social activities from API
 *                                     response
 * @param  {Object} map                An object to map the API responses
 * @param  {Number} [limit = 1]        The maximum amount of activities to
 *                                     return
 * @return {Promise}                   A promise to resolve and return the
 *                                     mapped actvities
 */
export default function socialParser(responseActivities, map, limit = 1) {
  if (!map) {
    return Promise.reject(new TypeError('No map provided.'));
  }

  if (!Array.isArray(responseActivities)) {
    return Promise.reject(responseActivities);
  }

  const activities = [];
  const slicedResponses = responseActivities.slice(0, limit);

  slicedResponses.forEach((response) => {
    let activity = {
      username:
        typeof map.username === 'function' ? map.username(response) : '',
      network:
        typeof map.network === 'function' ? map.network(response) : '',
      content: striptags(
        typeof map.content === 'function' ? map.content(response) : ''),
      background:
        typeof map.background === 'function' ? map.background(response) : '',
      link:
        typeof map.link === 'function' ? map.link(response) : '',
      modifier:
        typeof map.modifier === 'function' ? map.modifier(response) : '',
      date:
        typeof map.date === 'function' ? distanceInWordsToNow(map.date(response), {
          addSuffix: true
        }) : '',
      extras:
        typeof map.extras === 'function' ? map.extras(response) : ''
    };

    console.log(activity.date);

    activities.push(activity);
  });

  return Promise.resolve(activities);
}
