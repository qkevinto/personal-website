(self.webpackChunkkevinto_me=self.webpackChunkkevinto_me||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,u,c,l;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(u=s;0!=u--;)if(!o(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],i.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(u=s;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,c[u]))return!1;if(t&&e instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!o(e[c[u]],i[c[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function l(){u=e(c.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",s),f}}},2010:function(e,t,n){"use strict";var r;!function(a){if("function"!=typeof o){var o=function(e){return e};o.nonNative=!0}var i=o("plaintext"),s=o("html"),u=o("comment"),c=/<(\w*)>/g,l=/<\/?([^\s\/>]+)/;function f(e,t,n){return m(e=e||"",d(t=t||[],n=n||""))}function d(e,t){return{allowable_tags:e=function(e){var t,n=new Set;if("string"==typeof e)for(;t=c.exec(e);)n.add(t[1]);else o.nonNative||"function"!=typeof e[o.iterator]?"function"==typeof e.forEach&&e.forEach(n.add,n):n=new Set(e);return n}(e),tag_replacement:t,state:i,tag_buffer:"",depth:0,in_quote_char:""}}function m(e,t){if("string"!=typeof e)throw new TypeError("'html' parameter must be a string");for(var n=t.allowable_tags,r=t.tag_replacement,a=t.state,o=t.tag_buffer,c=t.depth,l=t.in_quote_char,f="",d=0,m=e.length;d<m;d++){var p=e[d];if(a===i)switch(p){case"<":a=s,o+=p;break;default:f+=p}else if(a===s)switch(p){case"<":if(l)break;c++;break;case">":if(l)break;if(c){c--;break}l="",a=i,o+=">",n.has(h(o))?f+=o:f+=r,o="";break;case'"':case"'":l=p===l?"":l||p,o+=p;break;case"-":"<!-"===o&&(a=u),o+=p;break;case" ":case"\n":if("<"===o){a=i,f+="< ",o="";break}o+=p;break;default:o+=p}else if(a===u)switch(p){case">":"--"==o.slice(-2)&&(a=i),o="";break;default:o+=p}}return t.state=a,t.tag_buffer=o,t.depth=c,t.in_quote_char=l,f}function h(e){var t=l.exec(e);return t?t[1].toLowerCase():null}f.init_streaming_mode=function(e,t){var n=d(e=e||[],t=t||"");return function(e){return m(e||"",n)}},void 0===(r=function(){return f}.call(t,n,t,e))||(e.exports=r)}()},8856:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return bt}});var r,a,o,i,s=n(7294),u=n(3552),c=n(5697),l=n.n(c),f=n(4839),d=n.n(f),m=n(2993),h=n.n(m),p=n(6494),g=n.n(p),v="bodyAttributes",y="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",k="href",S="http-equiv",C="innerHTML",A="itemprop",M="name",P="property",x="rel",O="src",j="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",I="defer",L="encodeSpecialCharacters",W="onChangeClientState",_="titleTemplate",q=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),F=[w.NOSCRIPT,w.SCRIPT,w.STYLE],R="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},B=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=$(e,w.TITLE),n=$(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,N);return t||r||void 0},J=function(e){return $(e,W)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],u=s.toLowerCase();-1===t.indexOf(u)||n===x&&"canonical"===e[n].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(s)||s!==C&&s!==E&&s!==A||(n=s)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][c]&&(a[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var s=o[i],u=g()({},r[s],a[s]);r[s]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ce(w.BODY,r),ce(w.HTML,a),ue(f,d);var m={baseTag:le(w.BASE,n),linkTags:le(w.LINK,o),metaTags:le(w.META,i),noscriptTags:le(w.NOSCRIPT,s),scriptTags:le(w.SCRIPT,c),styleTags:le(w.STYLE,l)},h={},p={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(p[e]=m[e].oldTags)})),t&&t(),u(e,h,p)},se=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),ce(w.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var u=i[s],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(R):n.getAttribute(R)!==i.join(",")&&n.setAttribute(R,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(R,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,a=de(n,r),[s.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=fe(n),o=se(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case y:return{toComponent:function(){return de(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},he=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.scriptTags,c=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:me(w.BASE,t,r),bodyAttributes:me(v,n,r),htmlAttributes:me(y,a,r),link:me(w.LINK,o,r),meta:me(w.META,i,r),noscript:me(w.NOSCRIPT,s,r),script:me(w.SCRIPT,u,r),style:me(w.STYLE,c,r),title:me(w.TITLE,{title:f,titleAttributes:d},r)}},pe=d()((function(e){return{baseTag:G([k,j],e),bodyAttributes:V(v,e),defer:$(e,I),encode:$(e,L),htmlAttributes:V(y,e),linkTags:Q(w.LINK,[x,k],e),metaTags:Q(w.META,[M,T,S,P,A],e),noscriptTags:Q(w.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:Q(w.SCRIPT,[O,C],e),styleTags:Q(w.STYLE,[E],e),title:Z(e),titleAttributes:V(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=ne((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),he)((function(){return null})),ge=(a=pe,i=o=function(e){function t(){return U(this,t),B(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return z({},a,((t={})[r.type]=i,t.titleAttributes=z({},o),t));case w.BODY:return z({},a,{bodyAttributes:z({},o)});case w.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((n={})[r.type]=z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(X(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=X(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(a,r)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ge.renderStatic=ge.rewind;var ve="Kevin To - UI Engineer",ye="https://kevinto.me",be="Kevin To is an experienced UI Engineer from Sydney, Australia.",we="Kevin To",Te="iOS, Swift, SwiftUI, Front-end Engineer, UI Engineer, Front-end Developer, Web Developer, HTML, CSS, JavaScript, Sydney, Australia",Ee="/images/avatar.jpg",ke="#ffffff",Se="qkevinto",Ce=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return s.createElement("div",null,s.createElement(ge,{title:ve,meta:[{name:"description",content:be},{name:"keywords",content:Te},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"author",content:we},{name:"apple-mobile-web-app-title",content:ve},{name:"application-name",content:ve},{name:"msapplication-TileColor",content:ke},{name:"msapplication-TileImage",content:"/mstile-144x144.png"},{name:"theme-color",content:ke},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+Se},{name:"twitter:title",content:ve},{name:"twitter:description",content:be},{name:"twitter:image",content:""+ye+Ee},{property:"og:title",content:ve},{property:"og:type",content:"website"},{property:"og:url",content:ye},{property:"og:image",content:""+ye+Ee}],link:[{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-touch-icon-57x57.png"},{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-touch-icon-60x60.png"},{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-touch-icon-72x72.png"},{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-touch-icon-76x76.png"},{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-touch-icon-114x114.png"},{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-touch-icon-120x120.png"},{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-touch-icon-144x144.png"},{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-touch-icon-152x152.png"},{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon-180x180.png"},{rel:"icon",type:"image/png",href:"/favicon-32x32.png",sizes:"32x32"},{rel:"icon",type:"image/png",href:"/android-chrome-192x192.png",sizes:"192x192"},{rel:"icon",type:"image/png",href:"/favicon-96x96.png",sizes:"96x96"},{rel:"icon",type:"image/png",href:"/favicon-16x16.png",sizes:"16x16"},{rel:"mask-icon",href:"/safari-pinned-tab.svg"},{rel:"canonical",href:ye}]}),this.props.children)},t}(s.Component),Ae=(new Date).getFullYear()-2012,Me="Kevin To",Pe='\n  <p>\n    My previous roles include <strong>Front-end Engineer</strong> at <a href="https://upside.com.au/">Upside</a>, <strong>Lead Front-end Developer</strong> at <a href="https://www.okendo.io/">Okendo</a> and <strong>Front-end Developer, Team Lead</strong> at <a href="https://www.freelancer.com/">Freelancer.com</a>.\n  </p>\n  <p>\n  I build stuff for the web and iOS with a background in design — I studied and worked as a Graphic Designer for about 6 years and now enjoy building accessible and maintainable web and iOS apps.\n  </p>\n  <p>\n  I\'ve been working with the web for about '+Ae+' years with a heavy focus on Angular, TypeScript and RxJS. And for the past year and a bit, iOS using Swift and SwiftUI along with RxSwift and Combine.\n  </p>\n  <p>\n    You can find some of my stuff on <a href="https://codepen.io/qkevinto/">CodePen</a> and <a href="https://github.com/qkevinto/">GitHub</a>.\n  </p>\n  <p>\n    When I’m not sat in front of the computer screen, I build and fly drones, tinker with 3D printing and electronics projects, work on my 4WD, go camping, take <a href="https://www.instagram.com/qkevinto/">photos</a>, and travel!\n  </p>\n  <p>\n    Feel free to say g’day at <a href="mailto:hello@kevinto.me">hello@kevinto.me</a> or connect with me on <a href="https://au.linkedin.com/in/qkevinto">LinkedIn</a>.\n  </p>\n',xe=n.p+"static/avatar-fcc32524225613f81fb323e4fba982bb.jpg",Oe=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return s.createElement("figure",{className:"Avatar-module--root--2nSnG"},s.createElement("img",{className:"Avatar-module--image--6LKjL",src:xe,width:"160",height:"160",alt:"Photo of Kevin To"}))},t}(s.Component),je=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return s.createElement("header",null,s.createElement("div",{className:"Profile-module--avatar--1rQ_C"},s.createElement(Oe,null)),s.createElement("div",null,s.createElement("h1",{className:"Profile-module--name--1Z_Mr"},Me),s.createElement("h2",{className:"Profile-module--role--3H6kh"},"UI Engineering Team Lead"),s.createElement("span",{className:"Profile-module--work--1nQTr"},"at ",s.createElement("span",{dangerouslySetInnerHTML:{__html:'<a href="https://nurturecloud.com/">NurtureCloud</a> in Sydney, AU'}}))))},t}(s.Component),De=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return s.createElement("section",{className:"About-module--root--26NaG"},s.createElement("div",{className:"About-module--profile--22ksD"},s.createElement(je,null)),s.createElement("div",{dangerouslySetInnerHTML:{__html:Pe}}))},t}(s.Component),Ne="SocialActivities-module--list-item--3QYX-";function Ie(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Le(e){Ie(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function We(e,t){Ie(2,arguments);var n=Le(e),r=Le(t),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function _e(e,t){Ie(2,arguments);var n=Le(e),r=Le(t),a=n.getFullYear()-r.getFullYear(),o=n.getMonth()-r.getMonth();return 12*a+o}function qe(e){Ie(1,arguments);var t=Le(e);return t.setHours(23,59,59,999),t}function Fe(e){Ie(1,arguments);var t=Le(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Re(e){Ie(1,arguments);var t=Le(e);return qe(t).getTime()===Fe(t).getTime()}function Ye(e,t){Ie(2,arguments);var n,r=Le(e),a=Le(t),o=We(r,a),i=Math.abs(_e(r,a));if(i<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-o*i);var s=We(r,a)===-o;Re(Le(e))&&1===i&&1===We(e,a)&&(s=!1),n=o*(i-Number(s))}return 0===n?0:n}function Ue(e,t){Ie(2,arguments);var n=Le(e),r=Le(t);return n.getTime()-r.getTime()}function He(e,t){Ie(2,arguments);var n=Ue(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var ze={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Xe(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var Be={date:Xe({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Xe({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Xe({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Ke={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Ze(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,u=a.width?String(a.width):e.defaultWidth;r=e.values[u]||e.values[s]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function Je(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,s=o[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(u)?Ge(u,(function(e){return e.test(s)})):Ve(u,(function(e){return e.test(s)}));i=e.valueCallback?e.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var l=t.slice(s.length);return{value:i,rest:l}}}function Ve(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function Ge(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var Qe,$e={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof ze[e]?ze[e]:1===t?ze[e].one:ze[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:Be,formatRelative:function(e,t,n,r){return Ke[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Ze({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Ze({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Ze({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Ze({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Ze({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Qe={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(Qe.matchPattern);if(!n)return null;var r=n[0],a=e.match(Qe.parsePattern);if(!a)return null;var o=Qe.valueCallback?Qe.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:Je({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Je({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Je({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Je({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Je({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function et(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}function tt(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var nt=1440,rt=43200;function at(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Ie(2,arguments);var r=n.locale||$e;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var a=We(e,t);if(isNaN(a))throw new RangeError("Invalid time value");var o,i,s=et(n);s.addSuffix=Boolean(n.addSuffix),s.comparison=a,a>0?(o=Le(t),i=Le(e)):(o=Le(e),i=Le(t));var u,c=He(i,o),l=(tt(i)-tt(o))/1e3,f=Math.round((c-l)/60);if(f<2)return n.includeSeconds?c<5?r.formatDistance("lessThanXSeconds",5,s):c<10?r.formatDistance("lessThanXSeconds",10,s):c<20?r.formatDistance("lessThanXSeconds",20,s):c<40?r.formatDistance("halfAMinute",null,s):c<60?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",1,s):0===f?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",f,s);if(f<45)return r.formatDistance("xMinutes",f,s);if(f<90)return r.formatDistance("aboutXHours",1,s);if(f<nt){var d=Math.round(f/60);return r.formatDistance("aboutXHours",d,s)}if(f<2520)return r.formatDistance("xDays",1,s);if(f<rt){var m=Math.round(f/nt);return r.formatDistance("xDays",m,s)}if(f<86400)return u=Math.round(f/rt),r.formatDistance("aboutXMonths",u,s);if((u=Ye(i,o))<12){var h=Math.round(f/rt);return r.formatDistance("xMonths",h,s)}var p=u%12,g=Math.floor(u/12);return p<3?r.formatDistance("aboutXYears",g,s):p<9?r.formatDistance("overXYears",g,s):r.formatDistance("almostXYears",g+1,s)}function ot(e,t){return Ie(1,arguments),at(e,Date.now(),t)}var it=n(2010),st=n.n(it),ut="SocialActivity-module--root--2aYg-",ct="SocialActivity-module--header--2mq1x",lt="SocialActivity-module--username--3x46C",ft="SocialActivity-module--network--38UVB",dt=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return s.createElement("div",{className:"Loader-module--root--1Xi3h"})},t}(s.Component),mt=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return s.createElement("div",null,this.props.loading&&!this.props.error?s.createElement("div",{className:""+ut},s.createElement("div",{className:ct},s.createElement("span",{className:lt},this.props.username),s.createElement("span",{className:ft},this.props.network)),s.createElement("div",{className:"SocialActivity-module--loader--23yZ4"},s.createElement(dt,null))):s.createElement("a",{href:this.props.link,className:""+ut,"aria-label":this.props.username+" on "+this.props.network+": "+this.props.content},s.createElement("div",{className:ct},s.createElement("span",{className:lt},this.props.username),s.createElement("span",{className:ft},this.props.network)),s.createElement("div",{className:"SocialActivity-module--content--3c1yf"},this.props.error?"Uh oh, looks something broke! 💩":st()(this.props.content)),void 0!==this.props.metaPrimary||void 0!==this.props.metaSecondary?s.createElement("div",{className:"SocialActivity-module--meta--266xC"},void 0!==this.props.metaPrimary&&this.props.metaPrimary?s.createElement("div",null,this.props.metaPrimary):void 0,void 0!==this.props.metaSecondary?s.createElement("div",null,this.props.metaSecondary):void 0):void 0))},t}(s.Component),ht=function(e){function t(){var t;return(t=e.call(this)||this).state={appURL:"https://github.com/",loading:!0,error:!1,username:"qkevinto",network:"GitHub"},t}(0,u.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;fetch("https://api.github.com/users/"+this.state.username+"/events").then((function(e){return e.json()})).then((function(t){var n=t[0];e.setState({loading:!1,content:{CommitCommentEvent:"Commented on a commit in",CreateEvent:"Created",DeleteEvent:"Deleted",ForkEvent:"Forked",GollumEvent:"Changed Wiki for",IssueCommentEvent:"Changed issue comment in",IssuesEvent:"Changed an issue in",MemberEvent:"Changed members in",PublicEvent:"Made public: ",PullRequestEvent:"Made a pull request to",PullRequestReviewCommentEvent:"Commented on a pull request in",PushEvent:"Pushed changes to",ReleaseEvent:"Created a new release for",WatchEvent:"Starred"}[n.type]+" "+n.repo.name,link:""+e.state.appURL+n.repo.name,metaPrimary:ot(new Date(n.created_at),{addSuffix:!0})})})).catch((function(e){throw new Error(e)}))},n.render=function(){var e;return s.createElement(mt,((e={loading:this.state.loading,error:this.state.error,link:this.state.link,username:this.state.username,network:this.state.network,content:this.state.content}).link=this.state.link,e.metaPrimary=this.state.metaPrimary,e))},t}(s.Component),pt=function(e){function t(){var t;return(t=e.call(this)||this).state={appURL:"https://trakt.tv",clientID:"0e48d28b25a45e5845b4f49b2a079bdacf0f966ce676b4be84002941bc6cee59",loading:!0,error:!1,username:"kevin",network:"Trakt"},t}(0,u.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;fetch("https://api-v2launch.trakt.tv/users/"+this.state.username+"/history",{headers:{"trakt-api-version":2,"trakt-api-key":this.state.clientID}}).then((function(e){return e.json()})).then((function(t){var n=t[0];e.setState({loading:!1,content:function(){if(n.show)return"Watched "+n.show.title+": "+n.episode.title+" ("+n.episode.season+"x"+n.episode.number+")";if(n.movie)return"Watched "+n.movie.title+" ("+n.movie.year+")";throw new TypeError("Activity is not a TV Show or Movie.")}(),link:n.show?e.state.appURL+"/shows/"+n.show.ids.slug+"/seasons/"+n.episode.season+"/episodes/"+n.episode.number:n.movie?e.state.appURL+"/movies/"+n.movie.ids.slug:void 0,metaPrimary:ot(new Date(n.watched_at),{addSuffix:!0})})})).catch((function(e){throw new Error(e)}))},n.render=function(){var e;return s.createElement(mt,((e={loading:this.state.loading,error:this.state.error,link:this.state.link,username:this.state.username,network:this.state.network,content:this.state.content}).link=this.state.link,e.metaPrimary=this.state.metaPrimary,e))},t}(s.Component),gt=function(e){function t(){var t;return(t=e.call(this)||this).state={loading:!0,error:!1,username:"qkevinto",network:"last.fm"},t}(0,u.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;fetch("https://pacific-caverns-68032.herokuapp.com/last-fm").then((function(e){return e.json()})).then((function(t){var n=t.recenttracks.track[0];e.setState({loading:!1,content:n.name+" - "+n.artist["#text"],link:n.url,metaPrimary:""+(n["@attr"]&&n["@attr"].nowplaying?"Now playing":ot(new Date(1e3*n.date.uts),{addSuffix:!0}))})})).catch((function(e){throw new Error(e)}))},n.render=function(){var e;return s.createElement(mt,((e={loading:this.state.loading,error:this.state.error,link:this.state.link,username:this.state.username,network:this.state.network,content:this.state.content,background:this.state.background}).link=this.state.link,e.metaPrimary=this.state.metaPrimary,e.extras=this.state.extras,e))},t}(s.Component),vt=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return s.createElement("aside",{className:"SocialActivities-module--root--R8cg4","aria-label":"Kevin To 's social activities"},s.createElement("header",{className:"SocialActivities-module--header--1moft"},s.createElement("h2",{className:"SocialActivities-module--heading--JGDIe"},"Elsewhere on the internets…")),s.createElement("ul",{className:"SocialActivities-module--list--iYgd3","aria-label":"Elsewhere on the internets…"},s.createElement("li",{className:Ne},s.createElement(ht,null)),s.createElement("li",{className:Ne},s.createElement(gt,null)),s.createElement("li",{className:Ne},s.createElement(pt,null))))},t}(s.Component),yt=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return s.createElement("div",{className:"Root-module--root--1ypvS"},s.createElement(De,null),s.createElement(vt,null))},t}(s.Component),bt=function(){return s.createElement(Ce,null,s.createElement(yt,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-247ea6032f29e0d73bfb.js.map