webpackJsonp([1],{

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ "./node_modules/date-fns/compare_asc/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
	
	/**
	 * @category Common Helpers
	 * @summary Compare the two dates and return -1, 0 or 1.
	 *
	 * @description
	 * Compare the two dates and return 1 if the first date is after the second,
	 * -1 if the first date is before the second or 0 if dates are equal.
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Number} the result of the comparison
	 *
	 * @example
	 * // Compare 11 February 1987 and 10 July 1989:
	 * var result = compareAsc(
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * )
	 * //=> -1
	 *
	 * @example
	 * // Sort the array of dates:
	 * var result = [
	 *   new Date(1995, 6, 2),
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * ].sort(compareAsc)
	 * //=> [
	 * //   Wed Feb 11 1987 00:00:00,
	 * //   Mon Jul 10 1989 00:00:00,
	 * //   Sun Jul 02 1995 00:00:00
	 * // ]
	 */
	function compareAsc (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var timeLeft = dateLeft.getTime()
	  var dateRight = parse(dirtyDateRight)
	  var timeRight = dateRight.getTime()
	
	  if (timeLeft < timeRight) {
	    return -1
	  } else if (timeLeft > timeRight) {
	    return 1
	  } else {
	    return 0
	  }
	}
	
	module.exports = compareAsc


/***/ }),

/***/ "./node_modules/date-fns/compare_desc/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
	
	/**
	 * @category Common Helpers
	 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
	 *
	 * @description
	 * Compare the two dates and return -1 if the first date is after the second,
	 * 1 if the first date is before the second or 0 if dates are equal.
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Number} the result of the comparison
	 *
	 * @example
	 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
	 * var result = compareDesc(
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * )
	 * //=> 1
	 *
	 * @example
	 * // Sort the array of dates in reverse chronological order:
	 * var result = [
	 *   new Date(1995, 6, 2),
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * ].sort(compareDesc)
	 * //=> [
	 * //   Sun Jul 02 1995 00:00:00,
	 * //   Mon Jul 10 1989 00:00:00,
	 * //   Wed Feb 11 1987 00:00:00
	 * // ]
	 */
	function compareDesc (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var timeLeft = dateLeft.getTime()
	  var dateRight = parse(dirtyDateRight)
	  var timeRight = dateRight.getTime()
	
	  if (timeLeft > timeRight) {
	    return -1
	  } else if (timeLeft < timeRight) {
	    return 1
	  } else {
	    return 0
	  }
	}
	
	module.exports = compareDesc


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of calendar months between the given dates.
	 *
	 * @description
	 * Get the number of calendar months between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar months
	 *
	 * @example
	 * // How many calendar months are between 31 January 2014 and 1 September 2014?
	 * var result = differenceInCalendarMonths(
	 *   new Date(2014, 8, 1),
	 *   new Date(2014, 0, 31)
	 * )
	 * //=> 8
	 */
	function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
	  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()
	
	  return yearDiff * 12 + monthDiff
	}
	
	module.exports = differenceInCalendarMonths


/***/ }),

/***/ "./node_modules/date-fns/difference_in_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
	
	/**
	 * @category Millisecond Helpers
	 * @summary Get the number of milliseconds between the given dates.
	 *
	 * @description
	 * Get the number of milliseconds between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of milliseconds
	 *
	 * @example
	 * // How many milliseconds are between
	 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
	 * var result = differenceInMilliseconds(
	 *   new Date(2014, 6, 2, 12, 30, 21, 700),
	 *   new Date(2014, 6, 2, 12, 30, 20, 600)
	 * )
	 * //=> 1100
	 */
	function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return dateLeft.getTime() - dateRight.getTime()
	}
	
	module.exports = differenceInMilliseconds


/***/ }),

/***/ "./node_modules/date-fns/difference_in_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
	var differenceInCalendarMonths = __webpack_require__("./node_modules/date-fns/difference_in_calendar_months/index.js")
	var compareAsc = __webpack_require__("./node_modules/date-fns/compare_asc/index.js")
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of full months between the given dates.
	 *
	 * @description
	 * Get the number of full months between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of full months
	 *
	 * @example
	 * // How many full months are between 31 January 2014 and 1 September 2014?
	 * var result = differenceInMonths(
	 *   new Date(2014, 8, 1),
	 *   new Date(2014, 0, 31)
	 * )
	 * //=> 7
	 */
	function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var sign = compareAsc(dateLeft, dateRight)
	  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
	  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)
	
	  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
	  // If so, result must be decreased by 1 in absolute value
	  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
	  return sign * (difference - isLastMonthNotFull)
	}
	
	module.exports = differenceInMonths


/***/ }),

/***/ "./node_modules/date-fns/difference_in_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__("./node_modules/date-fns/difference_in_milliseconds/index.js")
	
	/**
	 * @category Second Helpers
	 * @summary Get the number of seconds between the given dates.
	 *
	 * @description
	 * Get the number of seconds between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of seconds
	 *
	 * @example
	 * // How many seconds are between
	 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
	 * var result = differenceInSeconds(
	 *   new Date(2014, 6, 2, 12, 30, 20, 0),
	 *   new Date(2014, 6, 2, 12, 30, 7, 999)
	 * )
	 * //=> 12
	 */
	function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
	  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
	  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
	}
	
	module.exports = differenceInSeconds


/***/ }),

/***/ "./node_modules/date-fns/distance_in_words/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var compareDesc = __webpack_require__("./node_modules/date-fns/compare_desc/index.js")
	var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
	var differenceInSeconds = __webpack_require__("./node_modules/date-fns/difference_in_seconds/index.js")
	var differenceInMonths = __webpack_require__("./node_modules/date-fns/difference_in_months/index.js")
	var enLocale = __webpack_require__("./node_modules/date-fns/locale/en/index.js")
	
	var MINUTES_IN_DAY = 1440
	var MINUTES_IN_ALMOST_TWO_DAYS = 2520
	var MINUTES_IN_MONTH = 43200
	var MINUTES_IN_TWO_MONTHS = 86400
	
	/**
	 * @category Common Helpers
	 * @summary Return the distance between the given dates in words.
	 *
	 * @description
	 * Return the distance between the given dates in words.
	 *
	 * | Distance between dates                                            | Result              |
	 * |-------------------------------------------------------------------|---------------------|
	 * | 0 ... 30 secs                                                     | less than a minute  |
	 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
	 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
	 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
	 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
	 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
	 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
	 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
	 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
	 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
	 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
	 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
	 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
	 * | N yrs ... N yrs 3 months                                          | about N years       |
	 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
	 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
	 *
	 * With `options.includeSeconds == true`:
	 * | Distance between dates | Result               |
	 * |------------------------|----------------------|
	 * | 0 secs ... 5 secs      | less than 5 seconds  |
	 * | 5 secs ... 10 secs     | less than 10 seconds |
	 * | 10 secs ... 20 secs    | less than 20 seconds |
	 * | 20 secs ... 40 secs    | half a minute        |
	 * | 40 secs ... 60 secs    | less than a minute   |
	 * | 60 secs ... 90 secs    | 1 minute             |
	 *
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @param {Date|String|Number} date - the other date
	 * @param {Object} [options] - the object with options
	 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
	 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the distance in words
	 *
	 * @example
	 * // What is the distance between 2 July 2014 and 1 January 2015?
	 * var result = distanceInWords(
	 *   new Date(2014, 6, 2),
	 *   new Date(2015, 0, 1)
	 * )
	 * //=> '6 months'
	 *
	 * @example
	 * // What is the distance between 1 January 2015 00:00:15
	 * // and 1 January 2015 00:00:00, including seconds?
	 * var result = distanceInWords(
	 *   new Date(2015, 0, 1, 0, 0, 15),
	 *   new Date(2015, 0, 1, 0, 0, 0),
	 *   {includeSeconds: true}
	 * )
	 * //=> 'less than 20 seconds'
	 *
	 * @example
	 * // What is the distance from 1 January 2016
	 * // to 1 January 2015, with a suffix?
	 * var result = distanceInWords(
	 *   new Date(2016, 0, 1),
	 *   new Date(2015, 0, 1),
	 *   {addSuffix: true}
	 * )
	 * //=> 'about 1 year ago'
	 *
	 * @example
	 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = distanceInWords(
	 *   new Date(2016, 7, 1),
	 *   new Date(2015, 0, 1),
	 *   {locale: eoLocale}
	 * )
	 * //=> 'pli ol 1 jaro'
	 */
	function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
	  var options = dirtyOptions || {}
	
	  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)
	
	  var locale = options.locale
	  var localize = enLocale.distanceInWords.localize
	  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
	    localize = locale.distanceInWords.localize
	  }
	
	  var localizeOptions = {
	    addSuffix: Boolean(options.addSuffix),
	    comparison: comparison
	  }
	
	  var dateLeft, dateRight
	  if (comparison > 0) {
	    dateLeft = parse(dirtyDateToCompare)
	    dateRight = parse(dirtyDate)
	  } else {
	    dateLeft = parse(dirtyDate)
	    dateRight = parse(dirtyDateToCompare)
	  }
	
	  var seconds = differenceInSeconds(dateRight, dateLeft)
	  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
	  var minutes = Math.round(seconds / 60) - offset
	  var months
	
	  // 0 up to 2 mins
	  if (minutes < 2) {
	    if (options.includeSeconds) {
	      if (seconds < 5) {
	        return localize('lessThanXSeconds', 5, localizeOptions)
	      } else if (seconds < 10) {
	        return localize('lessThanXSeconds', 10, localizeOptions)
	      } else if (seconds < 20) {
	        return localize('lessThanXSeconds', 20, localizeOptions)
	      } else if (seconds < 40) {
	        return localize('halfAMinute', null, localizeOptions)
	      } else if (seconds < 60) {
	        return localize('lessThanXMinutes', 1, localizeOptions)
	      } else {
	        return localize('xMinutes', 1, localizeOptions)
	      }
	    } else {
	      if (minutes === 0) {
	        return localize('lessThanXMinutes', 1, localizeOptions)
	      } else {
	        return localize('xMinutes', minutes, localizeOptions)
	      }
	    }
	
	  // 2 mins up to 0.75 hrs
	  } else if (minutes < 45) {
	    return localize('xMinutes', minutes, localizeOptions)
	
	  // 0.75 hrs up to 1.5 hrs
	  } else if (minutes < 90) {
	    return localize('aboutXHours', 1, localizeOptions)
	
	  // 1.5 hrs up to 24 hrs
	  } else if (minutes < MINUTES_IN_DAY) {
	    var hours = Math.round(minutes / 60)
	    return localize('aboutXHours', hours, localizeOptions)
	
	  // 1 day up to 1.75 days
	  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
	    return localize('xDays', 1, localizeOptions)
	
	  // 1.75 days up to 30 days
	  } else if (minutes < MINUTES_IN_MONTH) {
	    var days = Math.round(minutes / MINUTES_IN_DAY)
	    return localize('xDays', days, localizeOptions)
	
	  // 1 month up to 2 months
	  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
	    months = Math.round(minutes / MINUTES_IN_MONTH)
	    return localize('aboutXMonths', months, localizeOptions)
	  }
	
	  months = differenceInMonths(dateRight, dateLeft)
	
	  // 2 months up to 12 months
	  if (months < 12) {
	    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
	    return localize('xMonths', nearestMonth, localizeOptions)
	
	  // 1 year up to max Date
	  } else {
	    var monthsSinceStartOfYear = months % 12
	    var years = Math.floor(months / 12)
	
	    // N years up to 1 years 3 months
	    if (monthsSinceStartOfYear < 3) {
	      return localize('aboutXYears', years, localizeOptions)
	
	    // N years 3 months up to N years 9 months
	    } else if (monthsSinceStartOfYear < 9) {
	      return localize('overXYears', years, localizeOptions)
	
	    // N years 9 months up to N year 12 months
	    } else {
	      return localize('almostXYears', years + 1, localizeOptions)
	    }
	  }
	}
	
	module.exports = distanceInWords


/***/ }),

/***/ "./node_modules/date-fns/distance_in_words_to_now/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var distanceInWords = __webpack_require__("./node_modules/date-fns/distance_in_words/index.js")
	
	/**
	 * @category Common Helpers
	 * @summary Return the distance between the given date and now in words.
	 *
	 * @description
	 * Return the distance between the given date and now in words.
	 *
	 * | Distance to now                                                   | Result              |
	 * |-------------------------------------------------------------------|---------------------|
	 * | 0 ... 30 secs                                                     | less than a minute  |
	 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
	 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
	 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
	 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
	 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
	 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
	 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
	 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
	 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
	 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
	 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
	 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
	 * | N yrs ... N yrs 3 months                                          | about N years       |
	 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
	 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
	 *
	 * With `options.includeSeconds == true`:
	 * | Distance to now     | Result               |
	 * |---------------------|----------------------|
	 * | 0 secs ... 5 secs   | less than 5 seconds  |
	 * | 5 secs ... 10 secs  | less than 10 seconds |
	 * | 10 secs ... 20 secs | less than 20 seconds |
	 * | 20 secs ... 40 secs | half a minute        |
	 * | 40 secs ... 60 secs | less than a minute   |
	 * | 60 secs ... 90 secs | 1 minute             |
	 *
	 * @param {Date|String|Number} date - the given date
	 * @param {Object} [options] - the object with options
	 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
	 * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the distance in words
	 *
	 * @example
	 * // If today is 1 January 2015, what is the distance to 2 July 2014?
	 * var result = distanceInWordsToNow(
	 *   new Date(2014, 6, 2)
	 * )
	 * //=> '6 months'
	 *
	 * @example
	 * // If now is 1 January 2015 00:00:00,
	 * // what is the distance to 1 January 2015 00:00:15, including seconds?
	 * var result = distanceInWordsToNow(
	 *   new Date(2015, 0, 1, 0, 0, 15),
	 *   {includeSeconds: true}
	 * )
	 * //=> 'less than 20 seconds'
	 *
	 * @example
	 * // If today is 1 January 2015,
	 * // what is the distance to 1 January 2016, with a suffix?
	 * var result = distanceInWordsToNow(
	 *   new Date(2016, 0, 1),
	 *   {addSuffix: true}
	 * )
	 * //=> 'in about 1 year'
	 *
	 * @example
	 * // If today is 1 January 2015,
	 * // what is the distance to 1 August 2016 in Esperanto?
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = distanceInWordsToNow(
	 *   new Date(2016, 7, 1),
	 *   {locale: eoLocale}
	 * )
	 * //=> 'pli ol 1 jaro'
	 */
	function distanceInWordsToNow (dirtyDate, dirtyOptions) {
	  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)
	}
	
	module.exports = distanceInWordsToNow


/***/ }),

/***/ "./node_modules/date-fns/is_date/index.js":
/***/ (function(module, exports) {

	/**
	 * @category Common Helpers
	 * @summary Is the given argument an instance of Date?
	 *
	 * @description
	 * Is the given argument an instance of Date?
	 *
	 * @param {*} argument - the argument to check
	 * @returns {Boolean} the given argument is an instance of Date
	 *
	 * @example
	 * // Is 'mayonnaise' a Date?
	 * var result = isDate('mayonnaise')
	 * //=> false
	 */
	function isDate (argument) {
	  return argument instanceof Date
	}
	
	module.exports = isDate


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
/***/ (function(module, exports) {

	var commonFormatterKeys = [
	  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
	  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
	  'H', 'HH', 'h', 'hh', 'm', 'mm',
	  's', 'ss', 'S', 'SS', 'SSS',
	  'Z', 'ZZ', 'X', 'x'
	]
	
	function buildFormattingTokensRegExp (formatters) {
	  var formatterKeys = []
	  for (var key in formatters) {
	    if (formatters.hasOwnProperty(key)) {
	      formatterKeys.push(key)
	    }
	  }
	
	  var formattingTokens = commonFormatterKeys
	    .concat(formatterKeys)
	    .sort()
	    .reverse()
	  var formattingTokensRegExp = new RegExp(
	    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
	  )
	
	  return formattingTokensRegExp
	}
	
	module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js":
/***/ (function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'less than a second',
	      other: 'less than {{count}} seconds'
	    },
	
	    xSeconds: {
	      one: '1 second',
	      other: '{{count}} seconds'
	    },
	
	    halfAMinute: 'half a minute',
	
	    lessThanXMinutes: {
	      one: 'less than a minute',
	      other: 'less than {{count}} minutes'
	    },
	
	    xMinutes: {
	      one: '1 minute',
	      other: '{{count}} minutes'
	    },
	
	    aboutXHours: {
	      one: 'about 1 hour',
	      other: 'about {{count}} hours'
	    },
	
	    xHours: {
	      one: '1 hour',
	      other: '{{count}} hours'
	    },
	
	    xDays: {
	      one: '1 day',
	      other: '{{count}} days'
	    },
	
	    aboutXMonths: {
	      one: 'about 1 month',
	      other: 'about {{count}} months'
	    },
	
	    xMonths: {
	      one: '1 month',
	      other: '{{count}} months'
	    },
	
	    aboutXYears: {
	      one: 'about 1 year',
	      other: 'about {{count}} years'
	    },
	
	    xYears: {
	      one: '1 year',
	      other: '{{count}} years'
	    },
	
	    overXYears: {
	      one: 'over 1 year',
	      other: 'over {{count}} years'
	    },
	
	    almostXYears: {
	      one: 'almost 1 year',
	      other: 'almost {{count}} years'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'in ' + result
	      } else {
	        return result + ' ago'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_format_locale/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__("./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js")
	
	function buildFormatLocale () {
	  // Note: in English, the names of days of the week and months are capitalized.
	  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
	  // Generally, formatted dates should look like they are in the middle of a sentence,
	  // e.g. in Spanish language the weekdays and months should be in the lowercase.
	  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  var rem100 = number % 100
	  if (rem100 > 20 || rem100 < 10) {
	    switch (rem100 % 10) {
	      case 1:
	        return number + 'st'
	      case 2:
	        return number + 'nd'
	      case 3:
	        return number + 'rd'
	    }
	  }
	  return number + 'th'
	}
	
	module.exports = buildFormatLocale


/***/ }),

/***/ "./node_modules/date-fns/locale/en/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__("./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js")
	var buildFormatLocale = __webpack_require__("./node_modules/date-fns/locale/en/build_format_locale/index.js")
	
	/**
	 * @category Locales
	 * @summary English locale.
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ }),

/***/ "./node_modules/date-fns/parse/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__("./node_modules/date-fns/is_date/index.js")
	
	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000
	var DEFAULT_ADDITIONAL_DIGITS = 2
	
	var parseTokenDateTimeDelimeter = /[T ]/
	var parseTokenPlainTime = /:/
	
	// year tokens
	var parseTokenYY = /^(\d{2})$/
	var parseTokensYYY = [
	  /^([+-]\d{2})$/, // 0 additional digits
	  /^([+-]\d{3})$/, // 1 additional digit
	  /^([+-]\d{4})$/ // 2 additional digits
	]
	
	var parseTokenYYYY = /^(\d{4})/
	var parseTokensYYYYY = [
	  /^([+-]\d{4})/, // 0 additional digits
	  /^([+-]\d{5})/, // 1 additional digit
	  /^([+-]\d{6})/ // 2 additional digits
	]
	
	// date tokens
	var parseTokenMM = /^-(\d{2})$/
	var parseTokenDDD = /^-?(\d{3})$/
	var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
	var parseTokenWww = /^-?W(\d{2})$/
	var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/
	
	// time tokens
	var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
	var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
	var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/
	
	// timezone tokens
	var parseTokenTimezone = /([Z+-].*)$/
	var parseTokenTimezoneZ = /^(Z)$/
	var parseTokenTimezoneHH = /^([+-])(\d{2})$/
	var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/
	
	/**
	 * @category Common Helpers
	 * @summary Convert the given argument to an instance of Date.
	 *
	 * @description
	 * Convert the given argument to an instance of Date.
	 *
	 * If the argument is an instance of Date, the function returns its clone.
	 *
	 * If the argument is a number, it is treated as a timestamp.
	 *
	 * If an argument is a string, the function tries to parse it.
	 * Function accepts complete ISO 8601 formats as well as partial implementations.
	 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
	 *
	 * If all above fails, the function passes the given argument to Date constructor.
	 *
	 * @param {Date|String|Number} argument - the value to convert
	 * @param {Object} [options] - the object with options
	 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
	 * @returns {Date} the parsed date in the local time zone
	 *
	 * @example
	 * // Convert string '2014-02-11T11:30:30' to date:
	 * var result = parse('2014-02-11T11:30:30')
	 * //=> Tue Feb 11 2014 11:30:30
	 *
	 * @example
	 * // Parse string '+02014101',
	 * // if the additional number of digits in the extended year format is 1:
	 * var result = parse('+02014101', {additionalDigits: 1})
	 * //=> Fri Apr 11 2014 00:00:00
	 */
	function parse (argument, dirtyOptions) {
	  if (isDate(argument)) {
	    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
	    return new Date(argument.getTime())
	  } else if (typeof argument !== 'string') {
	    return new Date(argument)
	  }
	
	  var options = dirtyOptions || {}
	  var additionalDigits = options.additionalDigits
	  if (additionalDigits == null) {
	    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
	  } else {
	    additionalDigits = Number(additionalDigits)
	  }
	
	  var dateStrings = splitDateString(argument)
	
	  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
	  var year = parseYearResult.year
	  var restDateString = parseYearResult.restDateString
	
	  var date = parseDate(restDateString, year)
	
	  if (date) {
	    var timestamp = date.getTime()
	    var time = 0
	    var offset
	
	    if (dateStrings.time) {
	      time = parseTime(dateStrings.time)
	    }
	
	    if (dateStrings.timezone) {
	      offset = parseTimezone(dateStrings.timezone)
	    } else {
	      // get offset accurate to hour in timezones that change offset
	      offset = new Date(timestamp + time).getTimezoneOffset()
	      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
	    }
	
	    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
	  } else {
	    return new Date(argument)
	  }
	}
	
	function splitDateString (dateString) {
	  var dateStrings = {}
	  var array = dateString.split(parseTokenDateTimeDelimeter)
	  var timeString
	
	  if (parseTokenPlainTime.test(array[0])) {
	    dateStrings.date = null
	    timeString = array[0]
	  } else {
	    dateStrings.date = array[0]
	    timeString = array[1]
	  }
	
	  if (timeString) {
	    var token = parseTokenTimezone.exec(timeString)
	    if (token) {
	      dateStrings.time = timeString.replace(token[1], '')
	      dateStrings.timezone = token[1]
	    } else {
	      dateStrings.time = timeString
	    }
	  }
	
	  return dateStrings
	}
	
	function parseYear (dateString, additionalDigits) {
	  var parseTokenYYY = parseTokensYYY[additionalDigits]
	  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]
	
	  var token
	
	  // YYYY or ±YYYYY
	  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
	  if (token) {
	    var yearString = token[1]
	    return {
	      year: parseInt(yearString, 10),
	      restDateString: dateString.slice(yearString.length)
	    }
	  }
	
	  // YY or ±YYY
	  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
	  if (token) {
	    var centuryString = token[1]
	    return {
	      year: parseInt(centuryString, 10) * 100,
	      restDateString: dateString.slice(centuryString.length)
	    }
	  }
	
	  // Invalid ISO-formatted year
	  return {
	    year: null
	  }
	}
	
	function parseDate (dateString, year) {
	  // Invalid ISO-formatted year
	  if (year === null) {
	    return null
	  }
	
	  var token
	  var date
	  var month
	  var week
	
	  // YYYY
	  if (dateString.length === 0) {
	    date = new Date(0)
	    date.setUTCFullYear(year)
	    return date
	  }
	
	  // YYYY-MM
	  token = parseTokenMM.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    date.setUTCFullYear(year, month)
	    return date
	  }
	
	  // YYYY-DDD or YYYYDDD
	  token = parseTokenDDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    var dayOfYear = parseInt(token[1], 10)
	    date.setUTCFullYear(year, 0, dayOfYear)
	    return date
	  }
	
	  // YYYY-MM-DD or YYYYMMDD
	  token = parseTokenMMDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    var day = parseInt(token[2], 10)
	    date.setUTCFullYear(year, month, day)
	    return date
	  }
	
	  // YYYY-Www or YYYYWww
	  token = parseTokenWww.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    return dayOfISOYear(year, week)
	  }
	
	  // YYYY-Www-D or YYYYWwwD
	  token = parseTokenWwwD.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    var dayOfWeek = parseInt(token[2], 10) - 1
	    return dayOfISOYear(year, week, dayOfWeek)
	  }
	
	  // Invalid ISO-formatted date
	  return null
	}
	
	function parseTime (timeString) {
	  var token
	  var hours
	  var minutes
	
	  // hh
	  token = parseTokenHH.exec(timeString)
	  if (token) {
	    hours = parseFloat(token[1].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	  }
	
	  // hh:mm or hhmm
	  token = parseTokenHHMM.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseFloat(token[2].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE
	  }
	
	  // hh:mm:ss or hhmmss
	  token = parseTokenHHMMSS.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseInt(token[2], 10)
	    var seconds = parseFloat(token[3].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE +
	      seconds * 1000
	  }
	
	  // Invalid ISO-formatted time
	  return null
	}
	
	function parseTimezone (timezoneString) {
	  var token
	  var absoluteOffset
	
	  // Z
	  token = parseTokenTimezoneZ.exec(timezoneString)
	  if (token) {
	    return 0
	  }
	
	  // ±hh
	  token = parseTokenTimezoneHH.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  // ±hh:mm or ±hhmm
	  token = parseTokenTimezoneHHMM.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  return 0
	}
	
	function dayOfISOYear (isoYear, week, day) {
	  week = week || 0
	  day = day || 0
	  var date = new Date(0)
	  date.setUTCFullYear(isoYear, 0, 4)
	  var fourthOfJanuaryDay = date.getUTCDay() || 7
	  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
	  date.setUTCDate(date.getUTCDate() + diff)
	  return date
	}
	
	module.exports = parse


/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__("./node_modules/deep-equal/lib/keys.js");
	var isArguments = __webpack_require__("./node_modules/deep-equal/lib/is_arguments.js");
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),

/***/ "./node_modules/deep-equal/lib/is_arguments.js":
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),

/***/ "./node_modules/deep-equal/lib/keys.js":
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),

/***/ "./node_modules/ellipsize/index.js":
/***/ (function(module, exports) {

	'use strict';
	
	var defaults = {
	    ellipse: '…',
	    chars: [' ', '-'],
	    max: 140,
	    truncate: true
	};
	
	function ellipsize(str, max, ellipse, chars, truncate) {
	    var last = 0,
	        c = '';
	
	    if (str.length < max) return str;
	
	    for (var i = 0, len = str.length; i < len; i++) {
	        c = str.charAt(i);
	
	        if (chars.indexOf(c) !== -1) {
	            last = i;
	        }
	
	        if (i < max) continue;
	        if (last === 0) {
	            return !truncate ? '' : str.substring(0, max - 1) + ellipse;
	        }
	
	        return str.substring(0, last) + ellipse;
	    }
	
	    return str;
	}
	
	module.exports = function(str, max, opts) {
	    if (typeof str !== 'string' || str.length === 0) return '';
	    if (max === 0) return '';
	
	    opts = opts || {};
	
	    for (var key in defaults) {
	        if (opts[key] === null || typeof opts[key] === 'undefined') {
	            opts[key] = defaults[key];
	        }
	    }
	
	    opts.max = max || opts.max;
	
	    return ellipsize(str, opts.max, opts.ellipse, opts.chars, opts.truncate);
	};


/***/ }),

/***/ "./node_modules/exenv/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),

/***/ "./node_modules/lodash._getnative/index.js":
/***/ (function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash.isarguments/index.js":
/***/ (function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash.isarray/index.js":
/***/ (function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash.keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__("./node_modules/lodash._getnative/index.js"),
	    isArguments = __webpack_require__("./node_modules/lodash.isarguments/index.js"),
	    isArray = __webpack_require__("./node_modules/lodash.isarray/index.js");
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__("./node_modules/react-side-effect/lib/index.js");
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__("./node_modules/deep-equal/index.js");
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__("./node_modules/react-helmet/lib/HelmetUtils.js");
	
	var _HelmetConstants = __webpack_require__("./node_modules/react-helmet/lib/HelmetConstants.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string") {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	             * @param {Object} bodyAttributes: {"className": "root"}
	             * @param {String} defaultTitle: "Default Title"
	             * @param {Boolean} encodeSpecialCharacters: true
	             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	             * @param {String} title: "Title"
	             * @param {Object} titleAttributes: {"itemprop": "name"}
	             * @param {String} titleTemplate: "MySite.com - %s"
	             */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    "accesskey": "accessKey",
	    "charset": "charSet",
	    "class": "className",
	    "contenteditable": "contentEditable",
	    "contextmenu": "contextMenu",
	    "http-equiv": "httpEquiv",
	    "itemprop": "itemProp",
	    "tabindex": "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.warn = exports.requestIdleCallback = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__("./node_modules/react-helmet/lib/HelmetConstants.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var requestIdleCallback = function () {
	    if (typeof window !== "undefined" && typeof window.requestIdleCallback !== "undefined") {
	        return window.requestIdleCallback;
	    }
	
	    return function (cb) {
	        var start = Date.now();
	        return setTimeout(function () {
	            cb({
	                didTimeout: false,
	                timeRemaining: function timeRemaining() {
	                    return Math.max(0, 50 - (Date.now() - start));
	                }
	            });
	        }, 1);
	    };
	}();
	
	var cancelIdleCallback = function () {
	    if (typeof window !== "undefined" && typeof window.cancelIdleCallback !== "undefined") {
	        return window.cancelIdleCallback;
	    }
	
	    return function (id) {
	        return clearTimeout(id);
	    };
	}();
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetIdleCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	
	    if (_helmetIdleCallback) {
	        cancelIdleCallback(_helmetIdleCallback);
	    }
	
	    _helmetIdleCallback = requestIdleCallback(function () {
	        updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	        updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	        updateTitle(title, titleAttributes);
	
	        var tagUpdates = {
	            baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	            linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	            metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	            noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	            scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	            styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	        };
	
	        var addedTags = {};
	        var removedTags = {};
	
	        Object.keys(tagUpdates).forEach(function (tagType) {
	            var _tagUpdates$tagType = tagUpdates[tagType],
	                newTags = _tagUpdates$tagType.newTags,
	                oldTags = _tagUpdates$tagType.oldTags;
	
	
	            if (newTags.length) {
	                addedTags[tagType] = newTags;
	            }
	            if (oldTags.length) {
	                removedTags[tagType] = tagUpdates[tagType].oldTags;
	            }
	        });
	
	        _helmetIdleCallback = null;
	        onChangeClientState(newState, addedTags, removedTags);
	    });
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title === "string" && document.title !== title) {
	        document.title = title;
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(title, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(title, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestIdleCallback = requestIdleCallback;
	exports.warn = warn;

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _exenv = __webpack_require__("./node_modules/exenv/index.js");
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _shallowequal = __webpack_require__("./node_modules/shallowequal/modules/index.js");
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = undefined;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = (function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        _Component.apply(this, arguments);
	      }
	
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !_shallowequal2['default'](nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2['default'].createElement(WrappedComponent, this.props);
	      };
	
	      _createClass(SideEffect, null, [{
	        key: 'displayName',
	
	        // Try to use displayName of wrapped component
	        value: 'SideEffect(' + getDisplayName(WrappedComponent) + ')',
	
	        // Expose canUseDOM so tests can monkeypatch it
	        enumerable: true
	      }, {
	        key: 'canUseDOM',
	        value: _exenv2['default'].canUseDOM,
	        enumerable: true
	      }]);
	
	      return SideEffect;
	    })(_react.Component);
	
	    return SideEffect;
	  };
	};

/***/ }),

/***/ "./node_modules/shallowequal/modules/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var fetchKeys = __webpack_require__("./node_modules/lodash.keys/index.js");
	
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if (ret !== void 0) {
	        return !!ret;
	    }
	
	    if (objA === objB) {
	        return true;
	    }
	
	    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	        return false;
	    }
	
	    var keysA = fetchKeys(objA);
	    var keysB = fetchKeys(objB);
	
	    var len = keysA.length;
	    if (len !== keysB.length) {
	        return false;
	    }
	
	    compareContext = compareContext || null;
	
	    // Test for A's keys different from B.
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	    for (var i = 0; i < len; i++) {
	        var key = keysA[i];
	        if (!bHasOwnProperty(key)) {
	            return false;
	        }
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	        if (_ret === false || _ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	    }
	
	    return true;
	};

/***/ }),

/***/ "./node_modules/striptags/src/striptags.js":
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	(function (global) {
	
	    const STATE_PLAINTEXT = Symbol('plaintext');
	    const STATE_HTML      = Symbol('html');
	    const STATE_COMMENT   = Symbol('comment');
	
	    const ALLOWED_TAGS_REGEX  = /<(\w*)>/g;
	    const NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;
	
	    function striptags(html, allowable_tags, tag_replacement) {
	        html            = html || '';
	        allowable_tags  = allowable_tags || [];
	        tag_replacement = tag_replacement || '';
	
	        let context = init_context(allowable_tags, tag_replacement);
	
	        return striptags_internal(html, context);
	    }
	
	    function init_striptags_stream(allowable_tags, tag_replacement) {
	        allowable_tags  = allowable_tags || [];
	        tag_replacement = tag_replacement || '';
	
	        let context = init_context(allowable_tags, tag_replacement);
	
	        return function striptags_stream(html) {
	            return striptags_internal(html || '', context);
	        };
	    }
	
	    striptags.init_streaming_mode = init_striptags_stream;
	
	    function init_context(allowable_tags, tag_replacement) {
	        allowable_tags = parse_allowable_tags(allowable_tags);
	
	        return {
	            allowable_tags,
	            tag_replacement,
	
	            state         : STATE_PLAINTEXT,
	            tag_buffer    : '',
	            depth         : 0,
	            in_quote_char : ''
	        };
	    }
	
	    function striptags_internal(html, context) {
	        let allowable_tags  = context.allowable_tags;
	        let tag_replacement = context.tag_replacement;
	
	        let state         = context.state;
	        let tag_buffer    = context.tag_buffer;
	        let depth         = context.depth;
	        let in_quote_char = context.in_quote_char;
	        let output        = '';
	
	        for (let idx = 0, length = html.length; idx < length; idx++) {
	            let char = html[idx];
	
	            if (state === STATE_PLAINTEXT) {
	                switch (char) {
	                    case '<':
	                        state       = STATE_HTML;
	                        tag_buffer += char;
	                        break;
	
	                    default:
	                        output += char;
	                        break;
	                }
	            }
	
	            else if (state === STATE_HTML) {
	                switch (char) {
	                    case '<':
	                        // ignore '<' if inside a quote
	                        if (in_quote_char) {
	                            break;
	                        }
	
	                        // we're seeing a nested '<'
	                        depth++;
	                        break;
	
	                    case '>':
	                        // ignore '>' if inside a quote
	                        if (in_quote_char) {
	                            break;
	                        }
	
	                        // something like this is happening: '<<>>'
	                        if (depth) {
	                            depth--;
	
	                            break;
	                        }
	
	                        // this is closing the tag in tag_buffer
	                        in_quote_char = '';
	                        state         = STATE_PLAINTEXT;
	                        tag_buffer   += '>';
	
	                        if (allowable_tags.has(normalize_tag(tag_buffer))) {
	                            output += tag_buffer;
	                        } else {
	                            output += tag_replacement;
	                        }
	
	                        tag_buffer = '';
	                        break;
	
	                    case '"':
	                    case '\'':
	                        // catch both single and double quotes
	
	                        if (char === in_quote_char) {
	                            in_quote_char = '';
	                        } else {
	                            in_quote_char = in_quote_char || char;
	                        }
	
	                        tag_buffer += char;
	                        break;
	
	                    case '-':
	                        if (tag_buffer === '<!-') {
	                            state = STATE_COMMENT;
	                        }
	
	                        tag_buffer += char;
	                        break;
	
	                    case ' ':
	                    case '\n':
	                        if (tag_buffer === '<') {
	                            state      = STATE_PLAINTEXT;
	                            output    += '< ';
	                            tag_buffer = '';
	
	                            break;
	                        }
	
	                        tag_buffer += char;
	                        break;
	
	                    default:
	                        tag_buffer += char;
	                        break;
	                }
	            }
	
	            else if (state === STATE_COMMENT) {
	                switch (char) {
	                    case '>':
	                        if (tag_buffer.slice(-2) == '--') {
	                            // close the comment
	                            state = STATE_PLAINTEXT;
	                        }
	
	                        tag_buffer = '';
	                        break;
	
	                    default:
	                        tag_buffer += char;
	                        break;
	                }
	            }
	        }
	
	        // save the context for future iterations
	        context.state         = state;
	        context.tag_buffer    = tag_buffer;
	        context.depth         = depth;
	        context.in_quote_char = in_quote_char;
	
	        return output;
	    }
	
	    function parse_allowable_tags(allowable_tags) {
	        let tags_array = [];
	
	        if (typeof allowable_tags === 'string') {
	            let match;
	
	            while ((match = ALLOWED_TAGS_REGEX.exec(allowable_tags)) !== null) {
	                tags_array.push(match[1]);
	            }
	        }
	
	        else if (typeof allowable_tags[Symbol.iterator] === 'function') {
	            tags_array = allowable_tags;
	        }
	
	        return new Set(tags_array);
	    }
	
	    function normalize_tag(tag_buffer) {
	        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);
	
	        return match ? match[1].toLowerCase() : null;
	    }
	
	    if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function module_factory() { return striptags; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	
	    else if (typeof module === 'object' && module.exports) {
	        // Node
	        module.exports = striptags;
	    }
	
	    else {
	        // Browser
	        global.striptags = striptags;
	    }
	}(this));


/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),

/***/ "./node_modules/twitter-fetcher/js/twitterFetcher_min.js":
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*********************************************************************
	*  #### Twitter Post Fetcher v17.0.0 ####
	*  Coded by Jason Mayes 2015. A present to all the developers out there.
	*  www.jasonmayes.com
	*  Please keep this disclaimer with my code if you use it. Thanks. :-)
	*  Got feedback or questions, ask here:
	*  http://www.jasonmayes.com/projects/twitterApi/
	*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
	*  Updates will be posted to this site.
	*********************************************************************/
	(function(root,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof exports==='object'){module.exports=factory();}else{factory();}}(this,function(){var domNode='';var maxTweets=20;var parseLinks=true;var queue=[];var inProgress=false;var printTime=true;var printUser=true;var formatterFunction=null;var supportsClassName=true;var showRts=true;var customCallbackFunction=null;var showInteractionLinks=true;var showImages=false;var targetBlank=true;var lang='en';var permalinks=true;var dataOnly=false;var script=null;var scriptAdded=false;function handleTweets(tweets){if(customCallbackFunction===null){var x=tweets.length;var n=0;var element=document.getElementById(domNode);var html='<ul>';while(n<x){html+='<li>'+tweets[n]+'</li>';n++;}
	html+='</ul>';element.innerHTML=html;}else{customCallbackFunction(tweets);}}
	function strip(data){return data.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,s){return s;}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,'');}
	function targetLinksToNewWindow(el){var links=el.getElementsByTagName('a');for(var i=links.length-1;i>=0;i--){links[i].setAttribute('target','_blank');}}
	function getElementsByClassName(node,classname){var a=[];var regex=new RegExp('(^| )'+classname+'( |$)');var elems=node.getElementsByTagName('*');for(var i=0,j=elems.length;i<j;i++){if(regex.test(elems[i].className)){a.push(elems[i]);}}
	return a;}
	function extractImageUrl(image_data){if(image_data!==undefined&&image_data.innerHTML.indexOf('data-srcset')>=0){var data_src=image_data.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];return decodeURIComponent(data_src).split('"')[1];}}
	var twitterFetcher={fetch:function(config){if(config.maxTweets===undefined){config.maxTweets=20;}
	if(config.enableLinks===undefined){config.enableLinks=true;}
	if(config.showUser===undefined){config.showUser=true;}
	if(config.showTime===undefined){config.showTime=true;}
	if(config.dateFunction===undefined){config.dateFunction='default';}
	if(config.showRetweet===undefined){config.showRetweet=true;}
	if(config.customCallback===undefined){config.customCallback=null;}
	if(config.showInteraction===undefined){config.showInteraction=true;}
	if(config.showImages===undefined){config.showImages=false;}
	if(config.linksInNewWindow===undefined){config.linksInNewWindow=true;}
	if(config.showPermalinks===undefined){config.showPermalinks=true;}
	if(config.dataOnly===undefined){config.dataOnly=false;}
	if(inProgress){queue.push(config);}else{inProgress=true;domNode=config.domId;maxTweets=config.maxTweets;parseLinks=config.enableLinks;printUser=config.showUser;printTime=config.showTime;showRts=config.showRetweet;formatterFunction=config.dateFunction;customCallbackFunction=config.customCallback;showInteractionLinks=config.showInteraction;showImages=config.showImages;targetBlank=config.linksInNewWindow;permalinks=config.showPermalinks;dataOnly=config.dataOnly;var head=document.getElementsByTagName('head')[0];if(script!==null){head.removeChild(script);}
	script=document.createElement('script');script.type='text/javascript';if(config.list!==undefined){script.src='https://syndication.twitter.com/timeline/list?'+'callback=__twttrf.callback&dnt=false&list_slug='+
	config.list.listSlug+'&screen_name='+config.list.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else if(config.profile!==undefined){script.src='https://syndication.twitter.com/timeline/profile?'+'callback=__twttrf.callback&dnt=false'+'&screen_name='+config.profile.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else if(config.likes!==undefined){script.src='https://syndication.twitter.com/timeline/likes?'+'callback=__twttrf.callback&dnt=false'+'&screen_name='+config.likes.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else{script.src='https://cdn.syndication.twimg.com/widgets/timelines/'+
	config.id+'?&lang='+(config.lang||lang)+'&callback=__twttrf.callback&'+'suppress_response_codes=true&rnd='+Math.random();}
	head.appendChild(script);}},callback:function(data){if(data===undefined||data.body===undefined){inProgress=false;if(queue.length>0){twitterFetcher.fetch(queue[0]);queue.splice(0,1);}
	return;}
	data.body=data.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,'');if(!showImages){data.body=data.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,'');}
	if(!printUser){data.body=data.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,'');}
	var div=document.createElement('div');div.innerHTML=data.body;if(typeof(div.getElementsByClassName)==='undefined'){supportsClassName=false;}
	function swapDataSrc(element){var avatarImg=element.getElementsByTagName('img')[0];avatarImg.src=avatarImg.getAttribute('data-src-2x');return element;}
	var tweets=[];var authors=[];var times=[];var images=[];var rts=[];var tids=[];var permalinksURL=[];var x=0;if(supportsClassName){var tmp=div.getElementsByClassName('timeline-Tweet');while(x<tmp.length){if(tmp[x].getElementsByClassName('timeline-Tweet-retweetCredit').length>0){rts.push(true);}else{rts.push(false);}
	if(!rts[x]||rts[x]&&showRts){tweets.push(tmp[x].getElementsByClassName('timeline-Tweet-text')[0]);tids.push(tmp[x].getAttribute('data-tweet-id'));if(printUser){authors.push(swapDataSrc(tmp[x].getElementsByClassName('timeline-Tweet-author')[0]));}
	times.push(tmp[x].getElementsByClassName('dt-updated')[0]);permalinksURL.push(tmp[x].getElementsByClassName('timeline-Tweet-timestamp')[0]);if(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]!==undefined){images.push(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]);}else{images.push(undefined);}}
	x++;}}else{var tmp=getElementsByClassName(div,'timeline-Tweet');while(x<tmp.length){if(getElementsByClassName(tmp[x],'timeline-Tweet-retweetCredit').length>0){rts.push(true);}else{rts.push(false);}
	if(!rts[x]||rts[x]&&showRts){tweets.push(getElementsByClassName(tmp[x],'timeline-Tweet-text')[0]);tids.push(tmp[x].getAttribute('data-tweet-id'));if(printUser){authors.push(swapDataSrc(getElementsByClassName(tmp[x],'timeline-Tweet-author')[0]));}
	times.push(getElementsByClassName(tmp[x],'dt-updated')[0]);permalinksURL.push(getElementsByClassName(tmp[x],'timeline-Tweet-timestamp')[0]);if(getElementsByClassName(tmp[x],'timeline-Tweet-media')[0]!==undefined){images.push(getElementsByClassName(tmp[x],'timeline-Tweet-media')[0]);}else{images.push(undefined);}}
	x++;}}
	if(tweets.length>maxTweets){tweets.splice(maxTweets,(tweets.length-maxTweets));authors.splice(maxTweets,(authors.length-maxTweets));times.splice(maxTweets,(times.length-maxTweets));rts.splice(maxTweets,(rts.length-maxTweets));images.splice(maxTweets,(images.length-maxTweets));permalinksURL.splice(maxTweets,(permalinksURL.length-maxTweets));}
	var arrayTweets=[];var x=tweets.length;var n=0;if(dataOnly){while(n<x){arrayTweets.push({tweet:tweets[n].innerHTML,author:authors[n]?authors[n].innerHTML:'Unknown Author',time:times[n].textContent,timestamp:times[n].getAttribute('datetime').replace('+0000','Z').replace(/([\+\-])(\d\d)(\d\d)/,'$1$2:$3'),image:extractImageUrl(images[n]),rt:rts[n],tid:tids[n],permalinkURL:(permalinksURL[n]===undefined)?'':permalinksURL[n].href});n++;}}else{while(n<x){if(typeof(formatterFunction)!=='string'){var datetimeText=times[n].getAttribute('datetime');var newDate=new Date(times[n].getAttribute('datetime').replace(/-/g,'/').replace('T',' ').split('+')[0]);var dateString=formatterFunction(newDate,datetimeText);times[n].setAttribute('aria-label',dateString);if(tweets[n].textContent){if(supportsClassName){times[n].textContent=dateString;}else{var h=document.createElement('p');var t=document.createTextNode(dateString);h.appendChild(t);h.setAttribute('aria-label',dateString);times[n]=h;}}else{times[n].textContent=dateString;}}
	var op='';if(parseLinks){if(targetBlank){targetLinksToNewWindow(tweets[n]);if(printUser){targetLinksToNewWindow(authors[n]);}}
	if(printUser){op+='<div class="user">'+strip(authors[n].innerHTML)+'</div>';}
	op+='<p class="tweet">'+strip(tweets[n].innerHTML)+'</p>';if(printTime){if(permalinks){op+='<p class="timePosted"><a href="'+permalinksURL[n]+'">'+times[n].getAttribute('aria-label')+'</a></p>';}else{op+='<p class="timePosted">'+
	times[n].getAttribute('aria-label')+'</p>';}}}else{if(tweets[n].textContent){if(printUser){op+='<p class="user">'+authors[n].textContent+'</p>';}
	op+='<p class="tweet">'+tweets[n].textContent+'</p>';if(printTime){op+='<p class="timePosted">'+times[n].textContent+'</p>';}}else{if(printUser){op+='<p class="user">'+authors[n].textContent+'</p>';}
	op+='<p class="tweet">'+tweets[n].textContent+'</p>';if(printTime){op+='<p class="timePosted">'+times[n].textContent+'</p>';}}}
	if(showInteractionLinks){op+='<p class="interact"><a href="https://twitter.com/intent/'+'tweet?in_reply_to='+tids[n]+'" class="twitter_reply_icon"'+
	(targetBlank?' target="_blank">':'>')+'Reply</a><a href="https://twitter.com/intent/retweet?'+'tweet_id='+tids[n]+'" class="twitter_retweet_icon"'+
	(targetBlank?' target="_blank">':'>')+'Retweet</a>'+'<a href="https://twitter.com/intent/favorite?tweet_id='+
	tids[n]+'" class="twitter_fav_icon"'+
	(targetBlank?' target="_blank">':'>')+'Favorite</a></p>';}
	if(showImages&&images[n]!==undefined&&extractImageUrl(images[n])!==undefined){op+='<div class="media">'+'<img src="'+extractImageUrl(images[n])+'" alt="Image from tweet" />'+'</div>';}
	if(showImages){arrayTweets.push(op);}else if(!showImages&&tweets[n].textContent.length){arrayTweets.push(op);}
	n++;}}
	handleTweets(arrayTweets);inProgress=false;if(queue.length>0){twitterFetcher.fetch(queue[0]);queue.splice(0,1);}}};window.__twttrf=twitterFetcher;window.twitterFetcher=twitterFetcher;return twitterFetcher;}));


/***/ }),

/***/ "./src/components/About.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AboutModule = __webpack_require__("./src/components/About.module.scss");
	
	var _AboutModule2 = _interopRequireDefault(_AboutModule);
	
	var _content = __webpack_require__("./src/utils/content.js");
	
	var _Profile = __webpack_require__("./src/components/Profile.js");
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var About = function (_React$Component) {
	  _inherits(About, _React$Component);
	
	  function About() {
	    _classCallCheck(this, About);
	
	    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	  }
	
	  _createClass(About, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: _AboutModule2.default.root },
	        _react2.default.createElement(
	          'div',
	          { className: _AboutModule2.default.profile },
	          _react2.default.createElement(_Profile2.default, null)
	        ),
	        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _content.about } })
	      );
	    }
	  }]);
	
	  return About;
	}(_react2.default.Component);
	
	exports.default = About;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/About.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
	// imports
	
	
	// module
	exports.push([module.id, "._2c0PkKutWY8sLVPSLRaK_l{flex-shrink:0;max-width:30.625rem;padding:1.25rem}@media (min-width:60rem){._2c0PkKutWY8sLVPSLRaK_l{max-width:35.625rem;padding:3.75rem}}._1bUlpvkA4_-NSiwyWJ6wpE{margin-bottom:3rem}", ""]);
	
	// exports
	exports.locals = {
		"root": "_2c0PkKutWY8sLVPSLRaK_l",
		"profile": "_1bUlpvkA4_-NSiwyWJ6wpE"
	};

/***/ }),

/***/ "./src/components/About.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/About.module.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./About.module.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./About.module.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ "./src/components/Avatar.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AvatarModule = __webpack_require__("./src/components/Avatar.module.scss");
	
	var _AvatarModule2 = _interopRequireDefault(_AvatarModule);
	
	var _content = __webpack_require__("./src/utils/content.js");
	
	var _Profile = __webpack_require__("./src/components/Profile.js");
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Avatar = function (_React$Component) {
	  _inherits(Avatar, _React$Component);
	
	  function Avatar() {
	    _classCallCheck(this, Avatar);
	
	    return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
	  }
	
	  _createClass(Avatar, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'figure',
	        { className: _AvatarModule2.default.root },
	        _react2.default.createElement('img', { className: _AvatarModule2.default.image, src: _content.avatarUrl, width: '160', height: '160', alt: 'Photo of ' + _content.name })
	      );
	    }
	  }]);
	
	  return Avatar;
	}(_react2.default.Component);
	
	exports.default = Avatar;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/Avatar.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
	// imports
	
	
	// module
	exports.push([module.id, "._1ynZMl73JfJ65u6fX92htM{border-radius:2px;box-shadow:inset 0 0 2px rgba(0,0,0,.35);max-width:10rem;overflow:hidden}._1ynZMl73JfJ65u6fX92htM:hover ._3nds1MFyOTUdW0RXMWIGtf{transform:scale(1.1)}._3nds1MFyOTUdW0RXMWIGtf{display:block;position:relative;transition:transform 2s ease;width:100%;will-change:transform;z-index:-1}", ""]);
	
	// exports
	exports.locals = {
		"root": "_1ynZMl73JfJ65u6fX92htM",
		"image": "_3nds1MFyOTUdW0RXMWIGtf"
	};

/***/ }),

/***/ "./src/components/Avatar.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/Avatar.module.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./Avatar.module.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./Avatar.module.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ "./src/components/Github.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__("./src/components/SocialActivities.module.scss");
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _content = __webpack_require__("./src/utils/content.js");
	
	var _SocialActivity = __webpack_require__("./src/components/SocialActivity.js");
	
	var _SocialActivity2 = _interopRequireDefault(_SocialActivity);
	
	var _distance_in_words_to_now = __webpack_require__("./node_modules/date-fns/distance_in_words_to_now/index.js");
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Github = function (_React$Component) {
	  _inherits(Github, _React$Component);
	
	  function Github() {
	    _classCallCheck(this, Github);
	
	    var _this = _possibleConstructorReturn(this, (Github.__proto__ || Object.getPrototypeOf(Github)).call(this));
	
	    _this.state = {
	      appURL: 'https://github.com/',
	      loading: true,
	      error: false,
	      username: 'qkevinto',
	      network: 'GitHub'
	    };
	    return _this;
	  }
	
	  _createClass(Github, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      fetch('https://api.github.com/users/' + this.state.username + '/events').then(function (response) {
	        return response.json();
	      }).then(function (response) {
	        var latestEvent = response[0];
	
	        /**
	         * Maps a bunch of eventTypes that GitHub returns into some readable
	         * and more coherent strings.
	         */
	        var eventType = {
	          'CommitCommentEvent': 'Commented on a commit in',
	          'CreateEvent': 'Created',
	          'DeleteEvent': 'Deleted',
	          'ForkEvent': 'Forked',
	          'GollumEvent': 'Changed Wiki for',
	          'IssueCommentEvent': 'Changed issue comment in',
	          'IssuesEvent': 'Changed an issue in',
	          'MemberEvent': 'Changed members in',
	          'PublicEvent': 'Made public: ',
	          'PullRequestEvent': 'Made a pull request to',
	          'PullRequestReviewCommentEvent': 'Commented on a pull request in',
	          'PushEvent': 'Pushed changes to',
	          'ReleaseEvent': 'Created a new release for',
	          'WatchEvent': 'Starred'
	        };
	
	        _this2.setState({
	          loading: false,
	          content: eventType[latestEvent.type] + ' ' + latestEvent.repo.name,
	          link: '' + _this2.state.appURL + latestEvent.repo.name,
	          metaPrimary: (0, _distance_in_words_to_now2.default)(new Date(latestEvent.created_at).toString(), { addSuffix: true })
	        });
	      }).catch(function (error) {
	        throw new Error(error);
	
	        _this2.setState({
	          error: true
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _React$createElement;
	
	      return _react2.default.createElement(_SocialActivity2.default, (_React$createElement = {
	        loading: this.state.loading,
	        error: this.state.error,
	        link: this.state.link,
	        username: this.state.username,
	        network: this.state.network,
	        content: this.state.content
	      }, _defineProperty(_React$createElement, 'link', this.state.link), _defineProperty(_React$createElement, 'metaPrimary', this.state.metaPrimary), _React$createElement));
	    }
	  }]);
	
	  return Github;
	}(_react2.default.Component);
	
	exports.default = Github;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/Instagram.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__("./src/components/SocialActivities.module.scss");
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _ellipsize = __webpack_require__("./node_modules/ellipsize/index.js");
	
	var _ellipsize2 = _interopRequireDefault(_ellipsize);
	
	var _content = __webpack_require__("./src/utils/content.js");
	
	var _SocialActivity = __webpack_require__("./src/components/SocialActivity.js");
	
	var _SocialActivity2 = _interopRequireDefault(_SocialActivity);
	
	var _distance_in_words_to_now = __webpack_require__("./node_modules/date-fns/distance_in_words_to_now/index.js");
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var instagramUrl = 'https://www.instagram.com';
	
	var Instagram = function (_React$Component) {
	  _inherits(Instagram, _React$Component);
	
	  function Instagram() {
	    _classCallCheck(this, Instagram);
	
	    var _this = _possibleConstructorReturn(this, (Instagram.__proto__ || Object.getPrototypeOf(Instagram)).call(this));
	
	    _this.state = {
	      loading: true,
	      error: false,
	      username: 'qkevinto',
	      network: 'Instagram'
	    };
	    return _this;
	  }
	
	  _createClass(Instagram, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      fetch('https://pacific-caverns-68032.herokuapp.com/instagram').then(function (response) {
	        return response.json();
	      }).then(function (response) {
	        var latestPost = response.user.media.nodes[0];
	
	        _this2.setState({
	          loading: false,
	          content: (0, _ellipsize2.default)(latestPost.caption, 250),
	          // Get 640x640 thumbnail
	          background: latestPost.thumbnail_resources[4].src,
	          link: instagramUrl + '/p/' + latestPost.code,
	          metaPrimary: (0, _distance_in_words_to_now2.default)(new Date(latestPost.date * 1000).toString(), { addSuffix: true }),
	          metaSecondary: latestPost.likes.count + ' Like' + (latestPost.likes.count > 1 ? 's' : '')
	        });
	      }).catch(function (error) {
	        throw new Error(error);
	
	        _this2.setState({
	          error: true
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _React$createElement;
	
	      return _react2.default.createElement(_SocialActivity2.default, (_React$createElement = {
	        loading: this.state.loading,
	        error: this.state.error,
	        link: this.state.link,
	        username: this.state.username,
	        network: this.state.network,
	        content: this.state.content,
	        background: this.state.background
	      }, _defineProperty(_React$createElement, 'link', this.state.link), _defineProperty(_React$createElement, 'metaPrimary', this.state.metaPrimary), _defineProperty(_React$createElement, 'metaSecondary', this.state.metaSecondary), _React$createElement));
	    }
	  }]);
	
	  return Instagram;
	}(_react2.default.Component);
	
	exports.default = Instagram;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/LastFm.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__("./src/components/SocialActivities.module.scss");
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _content = __webpack_require__("./src/utils/content.js");
	
	var _SocialActivity = __webpack_require__("./src/components/SocialActivity.js");
	
	var _SocialActivity2 = _interopRequireDefault(_SocialActivity);
	
	var _distance_in_words_to_now = __webpack_require__("./node_modules/date-fns/distance_in_words_to_now/index.js");
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LastFm = function (_React$Component) {
	  _inherits(LastFm, _React$Component);
	
	  function LastFm() {
	    _classCallCheck(this, LastFm);
	
	    var _this = _possibleConstructorReturn(this, (LastFm.__proto__ || Object.getPrototypeOf(LastFm)).call(this));
	
	    _this.state = {
	      loading: true,
	      error: false,
	      username: 'qkevinto',
	      network: 'last.fm'
	    };
	    return _this;
	  }
	
	  _createClass(LastFm, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      fetch('https://pacific-caverns-68032.herokuapp.com/last-fm').then(function (response) {
	        return response.json();
	      }).then(function (response) {
	        var latestTrack = response.recenttracks.track[0];
	
	        _this2.setState({
	          loading: false,
	          content: latestTrack.name + ' - ' + latestTrack.artist['#text'],
	          link: latestTrack.url,
	          metaPrimary: '' + (latestTrack['@attr'] && latestTrack['@attr'].nowplaying ? 'Now playing' : (0, _distance_in_words_to_now2.default)(new Date(latestTrack.date.uts * 1000).toString(), { addSuffix: true }))
	        });
	      }).catch(function (error) {
	        throw new Error(error);
	
	        _this2.setState({
	          error: true
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _React$createElement;
	
	      return _react2.default.createElement(_SocialActivity2.default, (_React$createElement = {
	        loading: this.state.loading,
	        error: this.state.error,
	        link: this.state.link,
	        username: this.state.username,
	        network: this.state.network,
	        content: this.state.content,
	        background: this.state.background
	      }, _defineProperty(_React$createElement, 'link', this.state.link), _defineProperty(_React$createElement, 'metaPrimary', this.state.metaPrimary), _defineProperty(_React$createElement, 'extras', this.state.extras), _React$createElement));
	    }
	  }]);
	
	  return LastFm;
	}(_react2.default.Component);
	
	exports.default = LastFm;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/Loader.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LoaderModule = __webpack_require__("./src/components/Loader.module.scss");
	
	var _LoaderModule2 = _interopRequireDefault(_LoaderModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Loader = function (_React$Component) {
	  _inherits(Loader, _React$Component);
	
	  function Loader() {
	    _classCallCheck(this, Loader);
	
	    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
	  }
	
	  _createClass(Loader, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: _LoaderModule2.default.root });
	    }
	  }]);
	
	  return Loader;
	}(_react2.default.Component);
	
	exports.default = Loader;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/Loader.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
	// imports
	
	
	// module
	exports.push([module.id, "._3zkHChEuKBLCqEtOWuhV0D{animation:_11MXRTSDrBK1zl_3sB5EMZ .5s linear infinite;border:1px solid transparent;border-radius:50%;border-top:1px solid rgba(0,0,0,.15);content:\"\";display:block;height:30px;width:30px;will-change:transform}@keyframes _11MXRTSDrBK1zl_3sB5EMZ{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
	
	// exports
	exports.locals = {
		"root": "_3zkHChEuKBLCqEtOWuhV0D",
		"loader": "_11MXRTSDrBK1zl_3sB5EMZ"
	};

/***/ }),

/***/ "./src/components/Loader.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/Loader.module.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./Loader.module.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./Loader.module.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ "./src/components/Profile.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProfileModule = __webpack_require__("./src/components/Profile.module.scss");
	
	var _ProfileModule2 = _interopRequireDefault(_ProfileModule);
	
	var _Avatar = __webpack_require__("./src/components/Avatar.js");
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _content = __webpack_require__("./src/utils/content.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);
	
	  function Profile() {
	    _classCallCheck(this, Profile);
	
	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	  }
	
	  _createClass(Profile, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'header',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _ProfileModule2.default.avatar },
	          _react2.default.createElement(_Avatar2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            { className: _ProfileModule2.default.name },
	            _content.name
	          ),
	          _react2.default.createElement(
	            'h2',
	            { className: _ProfileModule2.default.role },
	            _content.role
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: _ProfileModule2.default.work },
	            'at ',
	            _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: _content.work } })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Profile;
	}(_react2.default.Component);
	
	exports.default = Profile;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/Profile.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/Profile.module.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./Profile.module.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./Profile.module.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/Profile.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
	// imports
	
	
	// module
	exports.push([module.id, "._1aC8F5_1VSTkpKDfu4LnhX{margin-bottom:1.5rem}._2ba3N3VPagOu-3loC8IeQu{color:rgba(0,0,0,.7);margin:0 0 .5rem}._2jSzH50TwftNTm0JQmoLDI,._3u0oHC-eVSd1cGR5Rwk16V{font-size:1.125rem;line-height:1.6;margin:0}", ""]);
	
	// exports
	exports.locals = {
		"avatar": "_1aC8F5_1VSTkpKDfu4LnhX",
		"name": "_2ba3N3VPagOu-3loC8IeQu",
		"role": "_2jSzH50TwftNTm0JQmoLDI",
		"work": "_3u0oHC-eVSd1cGR5Rwk16V"
	};

/***/ }),

/***/ "./src/components/Root.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RootModule = __webpack_require__("./src/components/Root.module.scss");
	
	var _RootModule2 = _interopRequireDefault(_RootModule);
	
	var _About = __webpack_require__("./src/components/About.js");
	
	var _About2 = _interopRequireDefault(_About);
	
	var _SocialActivities = __webpack_require__("./src/components/SocialActivities.js");
	
	var _SocialActivities2 = _interopRequireDefault(_SocialActivities);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Root = function (_React$Component) {
	  _inherits(Root, _React$Component);
	
	  function Root() {
	    _classCallCheck(this, Root);
	
	    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	  }
	
	  _createClass(Root, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _RootModule2.default.root },
	        _react2.default.createElement(_About2.default, null),
	        _react2.default.createElement(_SocialActivities2.default, null)
	      );
	    }
	  }]);
	
	  return Root;
	}(_react2.default.Component);
	
	exports.default = Root;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/Root.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/Root.module.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./Root.module.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./Root.module.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/Root.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
	// imports
	
	
	// module
	exports.push([module.id, "._19VNu0q7yIlJaA3pjDZmfO{display:flex;flex-direction:column;min-height:100%}@media (min-width:60rem){._19VNu0q7yIlJaA3pjDZmfO{flex-direction:row}}", ""]);
	
	// exports
	exports.locals = {
		"root": "_19VNu0q7yIlJaA3pjDZmfO"
	};

/***/ }),

/***/ "./src/components/SocialActivities.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__("./src/components/SocialActivities.module.scss");
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _content = __webpack_require__("./src/utils/content.js");
	
	var _Instagram = __webpack_require__("./src/components/Instagram.js");
	
	var _Instagram2 = _interopRequireDefault(_Instagram);
	
	var _Github = __webpack_require__("./src/components/Github.js");
	
	var _Github2 = _interopRequireDefault(_Github);
	
	var _Trakt = __webpack_require__("./src/components/Trakt.js");
	
	var _Trakt2 = _interopRequireDefault(_Trakt);
	
	var _Twitter = __webpack_require__("./src/components/Twitter.js");
	
	var _Twitter2 = _interopRequireDefault(_Twitter);
	
	var _LastFm = __webpack_require__("./src/components/LastFm.js");
	
	var _LastFm2 = _interopRequireDefault(_LastFm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SocialActivities = function (_React$Component) {
	  _inherits(SocialActivities, _React$Component);
	
	  function SocialActivities() {
	    _classCallCheck(this, SocialActivities);
	
	    return _possibleConstructorReturn(this, (SocialActivities.__proto__ || Object.getPrototypeOf(SocialActivities)).apply(this, arguments));
	  }
	
	  _createClass(SocialActivities, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'aside',
	        { className: _SocialActivitiesModule2.default.root, 'aria-label': _content.name + ' \'s social activities' },
	        _react2.default.createElement(
	          'header',
	          { className: _SocialActivitiesModule2.default.header },
	          _react2.default.createElement(
	            'h2',
	            { className: _SocialActivitiesModule2.default.heading },
	            'Elsewhere on the internets\u2026'
	          )
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: _SocialActivitiesModule2.default.list, 'aria-label': 'Elsewhere on the internets\u2026' },
	          _react2.default.createElement(
	            'li',
	            { className: _SocialActivitiesModule2.default['list-item'] },
	            _react2.default.createElement(_Github2.default, null)
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: _SocialActivitiesModule2.default['list-item'] },
	            _react2.default.createElement(_LastFm2.default, null)
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: _SocialActivitiesModule2.default['list-item'] },
	            _react2.default.createElement(_Trakt2.default, null)
	          )
	        )
	      );
	    }
	  }]);
	
	  return SocialActivities;
	}(_react2.default.Component);
	
	exports.default = SocialActivities;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/SocialActivities.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/SocialActivities.module.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./SocialActivities.module.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./SocialActivities.module.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/SocialActivities.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
	// imports
	
	
	// module
	exports.push([module.id, "._2v6TtiPlW4RxPYOYMj_8hK{display:flex;flex-direction:column;min-height:7.5rem;padding-top:0;position:relative}._2v6TtiPlW4RxPYOYMj_8hK:after,._2v6TtiPlW4RxPYOYMj_8hK:before{animation:1s ease 1:local(socialStream) both;background:rgba(0,0,0,.15);content:\"\";display:block;height:1px;position:absolute;top:0;width:100%;will-change:transform;display:none}@media (min-width:60rem){._2v6TtiPlW4RxPYOYMj_8hK{flex-basis:40rem;max-width:100%;padding-top:3.75rem}._2v6TtiPlW4RxPYOYMj_8hK:after,._2v6TtiPlW4RxPYOYMj_8hK:before{display:block;height:100%;width:1px}._2v6TtiPlW4RxPYOYMj_8hK:before{left:0}._2v6TtiPlW4RxPYOYMj_8hK:after{right:0}}._2v6TtiPlW4RxPYOYMj_8hK._1lVQiw0Y1_m9awB6y6sOkA ._9zmzcPizs6Gup03dgT31Q{display:block}._2v6TtiPlW4RxPYOYMj_8hK._1lVQiw0Y1_m9awB6y6sOkA .SDjrDOm2Dz4WrnXG1bA_W{opacity:0}._9zmzcPizs6Gup03dgT31Q{display:none;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%)}._1ZUMsSAXyIM83CYsQU1Vut{color:rgba(0,0,0,.7);padding:0 1.25rem 1.25rem}.Vw0u836O2ueNdakWbclgZ{font-size:1.125rem;line-height:1.6}.SDjrDOm2Dz4WrnXG1bA_W,.Vw0u836O2ueNdakWbclgZ{opacity:1;transition:opacity 1s ease}.SDjrDOm2Dz4WrnXG1bA_W{list-style:none;margin:0;padding:0;position:relative}._2DbnNMS79cAjwKcfUiM8BL{border-bottom:1px solid rgba(0,0,0,.15)}._2DbnNMS79cAjwKcfUiM8BL:first-child{border-top:1px solid rgba(0,0,0,.15)}@keyframes _1U4r9yDyFsomPTQjznznsr{0%{transform:scaleY(0)}to{transform:scaleY(1)}}", ""]);
	
	// exports
	exports.locals = {
		"root": "_2v6TtiPlW4RxPYOYMj_8hK",
		"is-loading": "_1lVQiw0Y1_m9awB6y6sOkA",
		"loader": "_9zmzcPizs6Gup03dgT31Q",
		"list": "SDjrDOm2Dz4WrnXG1bA_W",
		"header": "_1ZUMsSAXyIM83CYsQU1Vut",
		"heading": "Vw0u836O2ueNdakWbclgZ",
		"list-item": "_2DbnNMS79cAjwKcfUiM8BL",
		"socialStream": "_1U4r9yDyFsomPTQjznznsr"
	};

/***/ }),

/***/ "./src/components/SocialActivity.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _striptags = __webpack_require__("./node_modules/striptags/src/striptags.js");
	
	var _striptags2 = _interopRequireDefault(_striptags);
	
	var _SocialActivityModule = __webpack_require__("./src/components/SocialActivity.module.scss");
	
	var _SocialActivityModule2 = _interopRequireDefault(_SocialActivityModule);
	
	var _Loader = __webpack_require__("./src/components/Loader.js");
	
	var _Loader2 = _interopRequireDefault(_Loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SocialActivity = function (_React$Component) {
	  _inherits(SocialActivity, _React$Component);
	
	  function SocialActivity() {
	    _classCallCheck(this, SocialActivity);
	
	    return _possibleConstructorReturn(this, (SocialActivity.__proto__ || Object.getPrototypeOf(SocialActivity)).apply(this, arguments));
	  }
	
	  _createClass(SocialActivity, [{
	    key: 'render',
	    value: function render() {
	      var hasBackground = function hasBackground(image) {
	        return image ? 'url(' + image + ')' : undefined;
	      };
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.loading && !this.props.error ? _react2.default.createElement(
	          'div',
	          { className: _SocialActivityModule2.default.root + ' ' + (this.props.background ? _SocialActivityModule2.default['has-background'] : '') },
	          _react2.default.createElement(
	            'div',
	            { className: _SocialActivityModule2.default.header },
	            _react2.default.createElement(
	              'span',
	              { className: _SocialActivityModule2.default.username },
	              this.props.username
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: _SocialActivityModule2.default.network },
	              this.props.network
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _SocialActivityModule2.default.loader },
	            _react2.default.createElement(_Loader2.default, null)
	          )
	        ) : _react2.default.createElement(
	          'a',
	          {
	            href: this.props.link,
	            className: _SocialActivityModule2.default.root + ' ' + (this.props.background ? _SocialActivityModule2.default['has-background'] : ''),
	            'aria-label': this.props.username + ' on ' + this.props.network + ': ' + this.props.content,
	            style: {
	              backgroundImage: hasBackground(this.props.background)
	            } },
	          _react2.default.createElement(
	            'div',
	            { className: _SocialActivityModule2.default.header },
	            _react2.default.createElement(
	              'span',
	              { className: _SocialActivityModule2.default.username },
	              this.props.username
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: _SocialActivityModule2.default.network },
	              this.props.network
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _SocialActivityModule2.default.content },
	            this.props.error ? 'Uh oh, looks something broke! 💩' : (0, _striptags2.default)(this.props.content)
	          ),
	          typeof this.props.metaPrimary !== 'undefined' || typeof this.props.metaSecondary !== 'undefined' ? _react2.default.createElement(
	            'div',
	            { className: _SocialActivityModule2.default.meta },
	            typeof this.props.metaPrimary !== 'undefined' && this.props.metaPrimary ? _react2.default.createElement(
	              'div',
	              null,
	              this.props.metaPrimary
	            ) : undefined,
	            typeof this.props.metaSecondary !== 'undefined' ? _react2.default.createElement(
	              'div',
	              null,
	              this.props.metaSecondary
	            ) : undefined
	          ) : undefined
	        )
	      );
	    }
	  }]);
	
	  return SocialActivity;
	}(_react2.default.Component);
	
	exports.default = SocialActivity;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/SocialActivity.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/SocialActivity.module.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./SocialActivity.module.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&importLoaders=1!../../node_modules/sass-loader/index.js!./SocialActivity.module.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/components/SocialActivity.module.scss":
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
	// imports
	
	
	// module
	exports.push([module.id, "._1vdSSA_AKOaeabZuOKzqZx{font-size:.875rem;line-height:1.6;background-position:50%;background-size:cover;color:rgba(0,0,0,.55);display:flex;flex-direction:column;font-weight:400;hyphens:auto;overflow-wrap:break-word;padding:1.25rem;position:relative;will-change:transform;word-break:break-all;word-break:break-word;word-wrap:break-word}._1vdSSA_AKOaeabZuOKzqZx:after{height:100%;transform:scaleY(0);z-index:0}._1vdSSA_AKOaeabZuOKzqZx._2CkiHmgrYV7vux743aI6g{color:hsla(0,0%,100%,.9);padding-top:7.75rem}._1vdSSA_AKOaeabZuOKzqZx._2CkiHmgrYV7vux743aI6g:before{background:rgba(0,0,0,.6);bottom:0;content:\"\";display:block;left:0;position:absolute;right:0;top:0}._1Uw35mx7-EGANb1WHjy0XE,._2COtBvi-xh3JOS2T0MyiWs,.PIB74Q3jaLL6Hb7oEmQbz{position:relative;will-change:transform;z-index:1}._1Uw35mx7-EGANb1WHjy0XE{font-weight:700;margin-bottom:.25rem;width:100%}._2U78OvcTt4KA7OlZrqjcQJ,._3ogJD7iecRRbNSojqjSkW0{display:inline-block}._2U78OvcTt4KA7OlZrqjcQJ{margin-left:.75rem}._2BwveDbna0KoL5yMJqnt32{display:flex;justify-content:center;margin-top:.5rem}._2COtBvi-xh3JOS2T0MyiWs{font-size:.75rem;line-height:1.6;display:flex;justify-content:space-between;margin-top:.25rem}", ""]);
	
	// exports
	exports.locals = {
		"root": "_1vdSSA_AKOaeabZuOKzqZx",
		"has-background": "_2CkiHmgrYV7vux743aI6g",
		"header": "_1Uw35mx7-EGANb1WHjy0XE",
		"content": "PIB74Q3jaLL6Hb7oEmQbz",
		"meta": "_2COtBvi-xh3JOS2T0MyiWs",
		"username": "_3ogJD7iecRRbNSojqjSkW0",
		"network": "_2U78OvcTt4KA7OlZrqjcQJ",
		"loader": "_2BwveDbna0KoL5yMJqnt32"
	};

/***/ }),

/***/ "./src/components/Trakt.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__("./src/components/SocialActivities.module.scss");
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _content = __webpack_require__("./src/utils/content.js");
	
	var _SocialActivity = __webpack_require__("./src/components/SocialActivity.js");
	
	var _SocialActivity2 = _interopRequireDefault(_SocialActivity);
	
	var _distance_in_words_to_now = __webpack_require__("./node_modules/date-fns/distance_in_words_to_now/index.js");
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Trakt = function (_React$Component) {
	  _inherits(Trakt, _React$Component);
	
	  function Trakt() {
	    _classCallCheck(this, Trakt);
	
	    var _this = _possibleConstructorReturn(this, (Trakt.__proto__ || Object.getPrototypeOf(Trakt)).call(this));
	
	    _this.state = {
	      appURL: 'https://trakt.tv',
	      clientID: '0e48d28b25a45e5845b4f49b2a079bdacf0f966ce676b4be84002941bc6cee59',
	      loading: true,
	      error: false,
	      username: 'kevin',
	      network: 'Trakt'
	    };
	    return _this;
	  }
	
	  _createClass(Trakt, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      fetch('https://api-v2launch.trakt.tv/users/' + this.state.username + '/history', {
	        headers: {
	          'trakt-api-version': 2,
	          'trakt-api-key': this.state.clientID
	        }
	      }).then(function (response) {
	        return response.json();
	      }).then(function (response) {
	        var latestActivity = response[0];
	
	        _this2.setState({
	          loading: false,
	          content: function () {
	            if (latestActivity.show) {
	              return 'Watched ' + latestActivity.show.title + ': ' + (latestActivity.episode.title + ' (' + latestActivity.episode.season + 'x') + (latestActivity.episode.number + ')');
	            } else if (latestActivity.movie) {
	              return 'Watched ' + latestActivity.movie.title + ' ' + ('(' + latestActivity.movie.year + ')');
	            } else {
	              throw new TypeError('Activity is not a TV Show or Movie.');
	            }
	          }(),
	          link: function () {
	            if (latestActivity.show) {
	              return _this2.state.appURL + '/shows/' + latestActivity.show.ids.slug + '/seasons/' + (latestActivity.episode.season + '/episodes/' + latestActivity.episode.number);
	            } else if (latestActivity.movie) {
	              return _this2.state.appURL + '/movies/' + latestActivity.movie.ids.slug;
	            }
	          }(),
	          metaPrimary: (0, _distance_in_words_to_now2.default)(new Date(latestActivity.watched_at), { addSuffix: true })
	        });
	      }).catch(function (error) {
	        throw new Error(error);
	
	        _this2.setState({
	          error: true
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _React$createElement;
	
	      return _react2.default.createElement(_SocialActivity2.default, (_React$createElement = {
	        loading: this.state.loading,
	        error: this.state.error,
	        link: this.state.link,
	        username: this.state.username,
	        network: this.state.network,
	        content: this.state.content
	      }, _defineProperty(_React$createElement, 'link', this.state.link), _defineProperty(_React$createElement, 'metaPrimary', this.state.metaPrimary), _React$createElement));
	    }
	  }]);
	
	  return Trakt;
	}(_react2.default.Component);
	
	exports.default = Trakt;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/Twitter.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__("./src/components/SocialActivities.module.scss");
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _content = __webpack_require__("./src/utils/content.js");
	
	var _SocialActivity = __webpack_require__("./src/components/SocialActivity.js");
	
	var _SocialActivity2 = _interopRequireDefault(_SocialActivity);
	
	var _distance_in_words_to_now = __webpack_require__("./node_modules/date-fns/distance_in_words_to_now/index.js");
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var twitterFetcher = typeof window !== 'undefined' ? __webpack_require__("./node_modules/twitter-fetcher/js/twitterFetcher_min.js") : undefined;
	
	var Twitter = function (_React$Component) {
	  _inherits(Twitter, _React$Component);
	
	  function Twitter() {
	    _classCallCheck(this, Twitter);
	
	    var _this = _possibleConstructorReturn(this, (Twitter.__proto__ || Object.getPrototypeOf(Twitter)).call(this));
	
	    _this.state = {
	      widgetId: '300888125675278336',
	      loading: true,
	      error: false,
	      username: 'qkevinto',
	      network: 'Twitter'
	    };
	    return _this;
	  }
	
	  _createClass(Twitter, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      new Promise(function (resolve, reject) {
	        var renderTweets = function renderTweets(response) {
	          return resolve(response);
	        };
	
	        try {
	          twitterFetcher.fetch({
	            id: _this2.state.widgetId,
	            maxTweets: 1,
	            enableLinks: false,
	            showUser: true,
	            showTime: true,
	            dateFunction: '',
	            showRetweet: false,
	            showInteraction: false,
	            dataOnly: true,
	            customCallback: renderTweets
	          });
	        } catch (error) {
	          reject(error);
	        }
	      }).then(function (response) {
	        var latestTweet = response[0];
	
	        _this2.setState({
	          loading: false,
	          content: latestTweet.tweet,
	          link: latestTweet.permalinkURL,
	          metaPrimary: (0, _distance_in_words_to_now2.default)(latestTweet.timestamp, { addSuffix: true })
	        });
	      }).catch(function (error) {
	        throw new Error(error);
	
	        _this2.setState({
	          error: true
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _React$createElement;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('div', { id: 'twitterContainer' }),
	        _react2.default.createElement(_SocialActivity2.default, (_React$createElement = {
	          loading: this.state.loading,
	          error: this.state.error,
	          link: this.state.link,
	          username: this.state.username,
	          network: this.state.network,
	          content: this.state.content
	        }, _defineProperty(_React$createElement, 'link', this.state.link), _defineProperty(_React$createElement, 'metaPrimary', this.state.metaPrimary), _React$createElement))
	      );
	    }
	  }]);
	
	  return Twitter;
	}(_react2.default.Component);
	
	exports.default = Twitter;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/kevinto/development/git/kevinto.me/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[\"/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-env/lib/index.js\",\"/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__("./node_modules/react-helmet/lib/Helmet.js");
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _Root = __webpack_require__("./src/components/Root.js");
	
	var _Root2 = _interopRequireDefault(_Root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Index = function (_React$Component) {
	  _inherits(Index, _React$Component);
	
	  function Index() {
	    _classCallCheck(this, Index);
	
	    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
	  }
	
	  _createClass(Index, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Root2.default, null);
	    }
	  }]);
	
	  return Index;
	}(_react2.default.Component);
	
	exports.default = Index;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/utils/content.js":
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var currentDate = new Date();
	var experienceYears = currentDate.getFullYear() - 2012;
	var avatarUrl = exports.avatarUrl = '/images/avatar.jpg';
	var name = exports.name = 'Kevin To';
	var role = exports.role = 'Front-end Engineer';
	var work = exports.work = '<a href="https://upside.com.au/">Upside</a>, Sydney';
	var about = exports.about = '\n  <p>\n    I\u2019ve also been a <strong>Lead Front-end Developer</strong> at <a href="https://www.okendo.io/">Okendo</a>, <strong>Front-end Developer, Team Lead</strong> at <a href="https://www.freelancer.com/">Freelancer.com</a> and <strong>Front-end Developer</strong> at <a href="http://infasecure.com.au/">InfaSecure</a>.\n  </p>\n  <p>\n    You can find some of my stuff on <a href="https://codepen.io/qkevinto/">CodePen</a> and <a href="https://github.com/qkevinto/">GitHub</a>, including the source for <a href="https://github.com/qkevinto/kevinto.me">this site</a>!\n  </p>\n  <p>\n    I make things with CSS, HTML, JavaScript and background in design \u2014 I studied and worked as a Designer for about 6 years and now enjoy building accessible, lean and maintainable Front-end stacks, and have been doing it for the past ' + experienceYears + ' years or so.\n  </p>\n  <p>\n    When I\u2019m not making things for the web, I enjoy <a href="https://getpocket.com/@kevinto">reading</a>, <a href="https://www.instagram.com/qkevinto/">photography</a>, travelling and the great outdoors. I go out exploring, catch the sunrise and take photos almost every weekend! \uD83D\uDCF7\n  </p>\n  <p>\n    Feel free to say g\u2019day at <a href="mailto:hello@kevinto.me">hello@kevinto.me</a>, follow me on <a href="https://twitter.com/qkevinto">Twitter</a> or connect with me on <a href="https://au.linkedin.com/in/qkevinto">LinkedIn</a>.\n  </p>\n';

/***/ })

});
//# sourceMappingURL=page-component---src-pages-index-js-8b499189c624c0ea4d52.js.map