"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[678],{1070:function(e,t,a){a.r(t),a.d(t,{Head:function(){return ue},default:function(){return ce}});var n=a(7294),r=a(4854);var i=e=>{let{children:t}=e;return n.createElement("div",null,t)};const o=new Date,s=o.getFullYear()-2012,l=o.getFullYear()-2020,u="Kevin To",c='\n  <p>\n    My previous roles include <strong>Front-end Engineer</strong> at <a href="https://upside.com.au/">Upside</a>, <strong>Lead Front-end Developer</strong> at <a href="https://www.okendo.io/">Okendo</a> and <strong>Front-end Developer, Team Lead</strong> at <a href="https://www.freelancer.com/">Freelancer.com</a>.\n  </p>\n  <p>\n  I build stuff for the web and iOS with a background in design — I studied and worked as a Graphic Designer for about 6 years and now enjoy building accessible and maintainable web and iOS apps.\n  </p>\n  <p>\n  I\'ve been working with the web for about '+s+" years with a heavy focus on Angular, TypeScript and RxJS. And for the past "+l+' years, iOS using Swift and SwiftUI along with RxSwift and Combine.\n  </p>\n  <p>\n    When I’m not sat in front of the computer screen, I build and fly quadcopters, tinker with 3D printing and electronics projects, work on my 4WD, go camping, take <a href="https://www.instagram.com/qkevinto/">photos</a>, and travel!\n  </p>\n  <p>\n    Feel free to say g’day at <a href="mailto:hello@kevinto.me">hello@kevinto.me</a> or connect with me on <a href="https://au.linkedin.com/in/qkevinto">LinkedIn</a>.\n  </p>\n';var m=a.p+"static/avatar-fcc32524225613f81fb323e4fba982bb.jpg";var d=()=>n.createElement("figure",{className:"Avatar-module--root--a06bc"},n.createElement("img",{className:"Avatar-module--image--20245",src:m,width:"160",height:"160",alt:"Photo of Kevin To"}));var h=()=>n.createElement("header",null,n.createElement("div",{className:"Profile-module--avatar--96090"},n.createElement(d,null)),n.createElement("div",null,n.createElement("h1",{className:"Profile-module--name--165c6"},u),n.createElement("h2",{className:"Profile-module--role--69c31"},"UI Engineering Team Lead"),n.createElement("span",{className:"Profile-module--work--eca71"},"at ",n.createElement("span",{dangerouslySetInnerHTML:{__html:'<a href="https://nurturecloud.com/">NurtureCloud</a> in Sydney, AU'}}))));var f=()=>n.createElement("section",{className:"About-module--root--6ddd3"},n.createElement("div",{className:"About-module--profile--85f5e"},n.createElement(h,null)),n.createElement("div",{dangerouslySetInnerHTML:{__html:c}})),v="SocialActivities-module--list-item--f6e4f",g={};function p(){return g}function w(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e){w(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===y(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function E(e,t){w(2,arguments);var a=b(e),n=b(t),r=a.getTime()-n.getTime();return r<0?-1:r>0?1:r}function M(e,t){w(2,arguments);var a=b(e),n=b(t),r=a.getFullYear()-n.getFullYear(),i=a.getMonth()-n.getMonth();return 12*r+i}function S(e){w(1,arguments);var t=b(e);return t.setHours(23,59,59,999),t}function k(e){w(1,arguments);var t=b(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function D(e){w(1,arguments);var t=b(e);return S(t).getTime()===k(t).getTime()}function P(e,t){w(2,arguments);var a,n=b(e),r=b(t),i=E(n,r),o=Math.abs(M(n,r));if(o<1)a=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-i*o);var s=E(n,r)===-i;D(b(e))&&1===o&&1===E(e,r)&&(s=!1),a=i*(o-Number(s))}return 0===a?0:a}function x(e,t){return w(2,arguments),b(e).getTime()-b(t).getTime()}var N={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function T(e){return e?N[e]:N.trunc}function W(e,t,a){w(2,arguments);var n=x(e,t)/1e3;return T(null==a?void 0:a.roundingMethod)(n)}var C={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},A=function(e,t,a){var n,r=C[e];return n="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};function j(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}}var F={date:j({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:j({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:j({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},_={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},q=function(e,t,a,n){return _[e]};function X(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=a&&a.width?String(a.width):r;n=e.formattingValues[i]||e.formattingValues[r]}else{var o=e.defaultWidth,s=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[s]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}}var I={ordinalNumber:function(e,t){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:X({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:X({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:X({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:X({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:X({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function Y(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;var o,s=i[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?O(l,(function(e){return e.test(s)})):z(l,(function(e){return e.test(s)}));o=e.valueCallback?e.valueCallback(u):u,o=a.valueCallback?a.valueCallback(o):o;var c=t.slice(s.length);return{value:o,rest:c}}}function z(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function O(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}var H,J={ordinalNumber:(H={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.match(H.matchPattern);if(!a)return null;var n=a[0],r=e.match(H.parsePattern);if(!r)return null;var i=H.valueCallback?H.valueCallback(r[0]):r[0];i=t.valueCallback?t.valueCallback(i):i;var o=e.slice(n.length);return{value:i,rest:o}}),era:Y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},R={code:"en-US",formatDistance:A,formatLong:F,formatRelative:q,localize:I,match:J,options:{weekStartsOn:0,firstWeekContainsDate:1}};function L(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function U(e){return L({},e)}function Q(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var V=1440,B=43200;function G(e,t,a){var n,r;w(2,arguments);var i=p(),o=null!==(n=null!==(r=null==a?void 0:a.locale)&&void 0!==r?r:i.locale)&&void 0!==n?n:R;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=E(e,t);if(isNaN(s))throw new RangeError("Invalid time value");var l,u,c=L(U(a),{addSuffix:Boolean(null==a?void 0:a.addSuffix),comparison:s});s>0?(l=b(t),u=b(e)):(l=b(e),u=b(t));var m,d=W(u,l),h=(Q(u)-Q(l))/1e3,f=Math.round((d-h)/60);if(f<2)return null!=a&&a.includeSeconds?d<5?o.formatDistance("lessThanXSeconds",5,c):d<10?o.formatDistance("lessThanXSeconds",10,c):d<20?o.formatDistance("lessThanXSeconds",20,c):d<40?o.formatDistance("halfAMinute",0,c):d<60?o.formatDistance("lessThanXMinutes",1,c):o.formatDistance("xMinutes",1,c):0===f?o.formatDistance("lessThanXMinutes",1,c):o.formatDistance("xMinutes",f,c);if(f<45)return o.formatDistance("xMinutes",f,c);if(f<90)return o.formatDistance("aboutXHours",1,c);if(f<V){var v=Math.round(f/60);return o.formatDistance("aboutXHours",v,c)}if(f<2520)return o.formatDistance("xDays",1,c);if(f<B){var g=Math.round(f/V);return o.formatDistance("xDays",g,c)}if(f<86400)return m=Math.round(f/B),o.formatDistance("aboutXMonths",m,c);if((m=P(u,l))<12){var y=Math.round(f/B);return o.formatDistance("xMonths",y,c)}var M=m%12,S=Math.floor(m/12);return M<3?o.formatDistance("aboutXYears",S,c):M<9?o.formatDistance("overXYears",S,c):o.formatDistance("almostXYears",S+1,c)}function K(e,t){return w(1,arguments),G(e,Date.now(),t)}var Z=a(3726),$=a.n(Z),ee="SocialActivity-module--root--306a6";var te=()=>n.createElement("div",{className:"Loader-module--root--9f920"});var ae=e=>{const t=n.createElement("div",{className:"SocialActivity-module--header--c46bf"},e.username?n.createElement("span",{className:"SocialActivity-module--username--33041"},e.username):void 0,n.createElement("span",{className:"SocialActivity-module--network--5710e"},e.network)),a=n.createElement(n.Fragment,null,t,n.createElement("div",{className:"SocialActivity-module--content--e7b42"},e.error?"Uh oh, looks something broke! 💩":$()(e.content)),void 0!==e.metaPrimary||void 0!==e.metaSecondary?n.createElement("div",{className:"SocialActivity-module--meta--830f0"},void 0!==e.metaPrimary&&e.metaPrimary?n.createElement("div",null,e.metaPrimary):void 0,void 0!==e.metaSecondary?n.createElement("div",null,e.metaSecondary):void 0):void 0),r=e.link?n.createElement("a",{href:e.link,className:""+ee,"aria-label":e.username+" on "+e.network+": "+e.content},a):n.createElement("div",{className:""+ee},a);return n.createElement("div",null,e.loading&&!e.error?n.createElement("div",{className:""+ee},t,n.createElement("div",{className:"SocialActivity-module--loader--c4cc6"},n.createElement(te,null))):r)};var ne=()=>{const e="qkevinto",{0:t,1:a}=(0,n.useState)(!0),{0:r,1:i}=(0,n.useState)(!1),{0:o,1:s}=(0,n.useState)(null),{0:l,1:u}=(0,n.useState)(null),{0:c,1:m}=(0,n.useState)(null);return(0,n.useEffect)((()=>{fetch("https://api.github.com/users/qkevinto/events").then((e=>e.json())).then((e=>{const t=e[0];a(!1),s({CommitCommentEvent:"Commented on a commit in",CreateEvent:"Created",DeleteEvent:"Deleted",ForkEvent:"Forked",GollumEvent:"Changed Wiki for",IssueCommentEvent:"Changed issue comment in",IssuesEvent:"Changed an issue in",MemberEvent:"Changed members in",PublicEvent:"Made public: ",PullRequestEvent:"Made a pull request to",PullRequestReviewCommentEvent:"Commented on a pull request in",PushEvent:"Pushed changes to",ReleaseEvent:"Created a new release for",WatchEvent:"Starred"}[t.type]+" "+t.repo.name),u("https://github.com/"+t.repo.name),m(K(new Date(t.created_at),{addSuffix:!0}))})).catch((()=>{i(!0)}))}),[]),n.createElement(ae,{loading:t,error:r,link:l,username:e,network:"GitHub",content:o,metaPrimary:c})};var re=()=>{const e="https://trakt.tv",{0:t,1:a}=(0,n.useState)(!0),{0:r,1:i}=(0,n.useState)(!1),{0:o,1:s}=(0,n.useState)(null),{0:l,1:u}=(0,n.useState)(null),{0:c,1:m}=(0,n.useState)(null);return(0,n.useEffect)((()=>{fetch("https://hsxvw47yof.execute-api.us-east-1.amazonaws.com/trakt").then((e=>e.json())).then((t=>{const n=t[0];a(!1),s((()=>{if(n.show)return"Watched "+n.show.title+": "+n.episode.title+" ("+n.episode.season+"x"+n.episode.number+")";if(n.movie)return"Watched "+n.movie.title+" ("+n.movie.year+")";throw new TypeError("Activity is not a TV Show or Movie.")})()),u(n.show?e+"/shows/"+n.show.ids.slug+"/seasons/"+n.episode.season+"/episodes/"+n.episode.number:n.movie?e+"/movies/"+n.movie.ids.slug:void 0),m(K(new Date(n.watched_at),{addSuffix:!0}))})).catch((()=>{i(!0)}))}),[]),n.createElement(ae,{loading:t,error:r,link:l,username:"kevin",network:"Trakt",content:o,metaPrimary:c})};var ie=()=>{const{0:e,1:t}=(0,n.useState)(!0),{0:a,1:r}=(0,n.useState)(!1),{0:i,1:o}=(0,n.useState)(null),{0:s,1:l}=(0,n.useState)(null),{0:u,1:c}=(0,n.useState)(null);return(0,n.useEffect)((()=>{fetch("https://hsxvw47yof.execute-api.us-east-1.amazonaws.com/last-fm").then((e=>e.json())).then((e=>{const a=e.recenttracks.track[0];t(!1),o(a.name+" - "+a.artist["#text"]),l(a.url),c(""+(a["@attr"]&&a["@attr"].nowplaying?"Now playing":K(new Date(1e3*a.date.uts),{addSuffix:!0})))})).catch((()=>{r(!0)}))}),[]),n.createElement(ae,{loading:e,error:a,link:s,username:"qkevinto",network:"last.fm",content:i,metaPrimary:u})};var oe=()=>{const{0:e,1:t}=(0,n.useState)(!0),{0:a,1:r}=(0,n.useState)(!1),{0:i,1:o}=(0,n.useState)(null),{0:s,1:l}=(0,n.useState)(null);return(0,n.useEffect)((()=>{fetch("https://hsxvw47yof.execute-api.us-east-1.amazonaws.com/wanikani").then((e=>e.json())).then((e=>{t(!1),o(e.total_count+" kanji learnt"),l(K(new Date(e.data_updated_at),{addSuffix:!0}))})).catch((()=>{r(!0)}))}),[]),n.createElement(ae,{loading:e,error:a,link:"https://www.wanikani.com/users/qkevinto",network:"WaniKani",content:i,metaPrimary:s})};var se=()=>n.createElement("aside",{className:"SocialActivities-module--root--0d465","aria-label":"Kevin To 's social activities"},n.createElement("header",{className:"SocialActivities-module--header--809af"},n.createElement("h2",{className:"SocialActivities-module--heading--37897"},"Elsewhere on the internets…")),n.createElement("ul",{className:"SocialActivities-module--list--9cf47","aria-label":"Elsewhere on the internets…"},n.createElement("li",{className:v},n.createElement(ne,null)),n.createElement("li",{className:v},n.createElement(ie,null)),n.createElement("li",{className:v},n.createElement(re,null)),n.createElement("li",{className:v},n.createElement(oe,null))));var le=()=>n.createElement("div",{className:"Root-module--root--c0869"},n.createElement(f,null),n.createElement(se,null));const ue=()=>{const e=(0,r.useStaticQuery)("1575821973");return n.createElement(n.Fragment,null,n.createElement("title",null,e.site.siteMetadata.title),n.createElement("meta",{charSet:"utf-8"}),n.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),n.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),n.createElement("meta",{name:"keywords",content:e.site.siteMetadata.keywords}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.createElement("meta",{name:"author",content:e.site.siteMetadata.author}),n.createElement("meta",{name:"apple-mobile-web-app-title",content:e.site.siteMetadata.title}),n.createElement("meta",{name:"application-name",content:e.site.siteMetadata.title}),n.createElement("meta",{name:"msapplication-TileColor",content:e.site.siteMetadata.themeColor}),n.createElement("meta",{name:"msapplication-TileImage",content:"/mstile-144x144.png"}),n.createElement("meta",{name:"theme-color",content:e.site.siteMetadata.themeColor}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:site",content:"@"+e.site.siteMetadata.twitterHandle}),n.createElement("meta",{name:"twitter:title",content:e.site.siteMetadata.title}),n.createElement("meta",{name:"twitter:description",content:e.site.siteMetadata.description}),n.createElement("meta",{name:"twitter:image",content:""+e.site.siteMetadata.url+e.site.siteMetadata.image}),n.createElement("meta",{property:"og:title",content:e.site.siteMetadata.title}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:url",content:e.site.siteMetadata.url}),n.createElement("meta",{property:"og:image",content:""+e.site.siteMetadata.url+e.site.siteMetadata.image}),n.createElement("link",{rel:"icon",type:"image/png",href:"/favicon-32x32.png",sizes:"32x32"}),n.createElement("link",{rel:"icon",type:"image/png",href:"/android-chrome-192x192.png",sizes:"192x192"}),n.createElement("link",{rel:"icon",type:"image/png",href:"/favicon-96x96.png",sizes:"96x96"}),n.createElement("link",{rel:"icon",type:"image/png",href:"/favicon-16x16.png",sizes:"16x16"}),n.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg"}),n.createElement("link",{rel:"canonical",href:e.site.siteMetadata.url}))};var ce=()=>n.createElement(i,null,n.createElement(le,null))},3726:function(e,t,a){var n;!function(r){if("function"!=typeof i){var i=function(e){return e};i.nonNative=!0}const o=i("plaintext"),s=i("html"),l=i("comment"),u=/<(\w*)>/g,c=/<\/?([^\s\/>]+)/;function m(e,t,a){return h(e=e||"",d(t=t||[],a=a||""))}function d(e,t){return{allowable_tags:e=function(e){let t=new Set;if("string"==typeof e){let a;for(;a=u.exec(e);)t.add(a[1])}else i.nonNative||"function"!=typeof e[i.iterator]?"function"==typeof e.forEach&&e.forEach(t.add,t):t=new Set(e);return t}(e),tag_replacement:t,state:o,tag_buffer:"",depth:0,in_quote_char:""}}function h(e,t){if("string"!=typeof e)throw new TypeError("'html' parameter must be a string");let a=t.allowable_tags,n=t.tag_replacement,r=t.state,i=t.tag_buffer,u=t.depth,c=t.in_quote_char,m="";for(let d=0,h=e.length;d<h;d++){let t=e[d];if(r===o)if("<"===t)r=s,i+=t;else m+=t;else if(r===s)switch(t){case"<":if(c)break;u++;break;case">":if(c)break;if(u){u--;break}c="",r=o,i+=">",a.has(f(i))?m+=i:m+=n,i="";break;case'"':case"'":c=t===c?"":c||t,i+=t;break;case"-":"<!-"===i&&(r=l),i+=t;break;case" ":case"\n":if("<"===i){r=o,m+="< ",i="";break}i+=t;break;default:i+=t}else if(r===l)if(">"===t)"--"==i.slice(-2)&&(r=o),i="";else i+=t}return t.state=r,t.tag_buffer=i,t.depth=u,t.in_quote_char=c,m}function f(e){let t=c.exec(e);return t?t[1].toLowerCase():null}m.init_streaming_mode=function(e,t){let a=d(e=e||[],t=t||"");return function(e){return h(e||"",a)}},void 0===(n=function(){return m}.call(t,a,t,e))||(e.exports=n)}()}}]);
//# sourceMappingURL=component---src-pages-index-js-8ffa65da586e78b67868.js.map