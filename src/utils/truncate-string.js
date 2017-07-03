/**
 * Truncates a string and appends '...' to the end
 * @param  {String} string String to be truncated
 * @param  {Number} length Max length of string before truncating
 * @return {String}        The truncated string or an empty string if was
 *                         undefined
 */
export default function truncateString (string, length) {
  return string && string.length > length ? `${string.substr(0, length).trim()}...` : '';
}
