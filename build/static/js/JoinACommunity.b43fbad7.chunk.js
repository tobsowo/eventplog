webpackJsonp([2],{1022:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(1023),i=t(1024),c=function(){return o.a.createElement(a.a,null,function(e){return o.a.createElement(i.a,e)})};n.a=c},1023:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),c=(t.n(i),t(38),t(222),t(83),t(84)),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),l=function(e){function n(){var e,t,a,i;r(this,n);for(var u=arguments.length,l=Array(u),f=0;f<u;f++)l[f]=arguments[f];return t=a=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),a.getProps=function(){return{user:c.b.currentUser()}},i=t,o(a,i)}return a(n,e),u(n,[{key:"render",value:function(){return this.props.children(this.getProps())}}]),n}(i.Component);n.a=l},1024:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(38),i=(t(931),t(422)),c=t(31),u=t(134),l=t(135),f=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  --fg: ",";\n  --bg: ",";\n  --activeLink: ",";\n  --gray: ",";\n  height: 100%;\n  \n  a, a:hover {\n    color: var(--activeLink);\n  }\n"],["\n  --fg: ",";\n  --bg: ",";\n  --activeLink: ",";\n  --gray: ",";\n  height: 100%;\n  \n  a, a:hover {\n    color: var(--activeLink);\n  }\n"]),s=Object(i.a)(function(){return t.e(13).then(t.bind(null,1025))}),p=Object(i.a)(function(){return t.e(10).then(t.bind(null,1033))}),d=Object(i.a)(function(){return t.e(8).then(t.bind(null,1043))}),m=Object(i.a)(function(){return new Promise(function(e){e()}).then(t.bind(null,1045))}),b=c.b.div(f,function(e){return e.theme.fg},function(e){return e.theme.bg},function(e){return e.theme.activeLink},function(e){return e.theme.gray}),g=function(e){var n=e.community,t=void 0===n?{}:n,r=(e.communities,e.user),i=void 0===r?{}:r;return o.a.createElement(c.a,{theme:Object.assign({},u.a,i.theme,t.theme)},o.a.createElement(b,null,o.a.createElement(a.f,null,o.a.createElement(l.b,{exact:!0,path:"/",component:s}),o.a.createElement(l.b,{exact:!0,path:"/communities",component:s}),o.a.createElement(l.b,{exact:!0,path:"/communities/join-a-community",component:m}),o.a.createElement(l.b,{exact:!0,path:"/communities/new",component:d}),o.a.createElement(l.b,{path:"/communities/:id",component:p}))))};n.a=g},1028:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(1029),o=function(){return new Promise(function(e,n){setTimeout(function(){e(r.a)},2e3)})}},1029:function(e,n,t){"use strict";n.a={communities:[{name:"Facebook Developer Circle Lagos",description:"A community of developers united in knowledge sharing.",no_of_followers:200,no_of_upcoming_events:2,community_focus:["Technology","developers"]},{name:"Google Developer Group",description:"Developer community bringing up community interest, powereed by google.",no_of_followers:200,no_of_upcoming_events:2,community_focus:["Technology","Developers"]},{name:"Facebook Developer Circle Lagos",description:"A community of developers united in knowledge sharing",no_of_followers:200,no_of_upcoming_events:2,community_focus:["Technology","developers"]},{name:"Google Developer Group",description:"Developer community bringing up community interest, powereed by google.",no_of_followers:200,no_of_upcoming_events:2,community_focus:["Technology","Developers"]},{name:"Facebook Developer Circle Lagos",description:"A community of developers united in knowledge sharing",no_of_followers:200,no_of_upcoming_events:2,community_focus:["Technology","developers"]},{name:"Google Developer Group",description:"Developer community bringing up community interest, powereed by google.",no_of_followers:200,no_of_upcoming_events:2,community_focus:["Technology","developers"]}]}},1045:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t.n(r),a=t(1046),i=t(1051),c=function(){return o.a.createElement(i.a,null,function(e){return o.a.createElement(a.a,e)})};n.default=c},1046:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(31),i=t(134),c=t(1047),u=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  --fg: ",";\n  --bg: ",";\n  --activeLink: ",";\n  \n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  \n  > .header {\n    height: 70px;\n  }\n  \n  .main-content {\n    flex: 1;\n    margin-top: 60px;\n  }\n  \n  .footer {\n    height: 200px;\n    background: #eee;\n  }\n"],["\n  --fg: ",";\n  --bg: ",";\n  --activeLink: ",";\n  \n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  \n  > .header {\n    height: 70px;\n  }\n  \n  .main-content {\n    flex: 1;\n    margin-top: 60px;\n  }\n  \n  .footer {\n    height: 200px;\n    background: #eee;\n  }\n"]),l=a.b.div(u,i.a.fg,i.a.bg,i.a.activeLink),f=function(e){var n=e.communities;return o.a.createElement(l,null,o.a.createElement(c.a,{communities:n}))};n.a=f},1047:function(e,n,t){"use strict";var r=t(1048);t.d(n,"a",function(){return r.a})},1048:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(31),i=t(134),c=t(58),u=t(1049),l=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  h2 {\n    color: ",";\n  }\n  \n  > p {\n    margin: 20px 0 50px;\n    font-size: 1.2rem;\n    font-weight: 300;\n  }\n  \n  .selection {\n    width: 100%;\n    \n    .selection-dropdown {\n      display: flex;\n      justify-content: space-around;\n      margin: 30px 0;\n    }\n  },\n  \n  \n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  h2 {\n    color: ",";\n  }\n  \n  > p {\n    margin: 20px 0 50px;\n    font-size: 1.2rem;\n    font-weight: 300;\n  }\n  \n  .selection {\n    width: 100%;\n    \n    .selection-dropdown {\n      display: flex;\n      justify-content: space-around;\n      margin: 30px 0;\n    }\n  },\n  \n  \n"]),f=a.b.div(l,i.a.grayLight),s=[{key:"lagos",text:"Lagos",value:"lagos"},{key:"abuja",text:"Lagos",value:"abuja"}],p=[{key:"tech",text:"Technology",value:"Technology"},{key:"software",text:"Software",value:"Software"}],d=function(e){var n=e.communities,t=void 0===n?[]:n,r=(e.handleLocationSelect,e.handleFocusChange,e.handleChange);return o.a.createElement(f,{className:"main-content app-container"},o.a.createElement("h2",null,"Follow your favorite communities"),o.a.createElement("p",null,"To know when they might host an event or share an event-related news"),o.a.createElement("div",{className:"selection"},o.a.createElement("div",{className:"selection-dropdown"},o.a.createElement(c.g.Field,null,o.a.createElement("label",null,"Active location:"),o.a.createElement(c.p,{onChange:function(e){return r(e,"gender")},defaultValue:"Lagos",placeholder:"State",options:s})),o.a.createElement(c.g.Field,null,o.a.createElement("label",null,"Community focus: "),o.a.createElement(c.p,{onChange:function(e){return r(e,"gender")},defaultValue:"Technology",placeholder:"Gender",options:p}))),o.a.createElement("div",{className:"options"},!!t&&t.map(function(e){return o.a.createElement(u.a,e)}))))};n.a=d},1049:function(e,n,t){"use strict";var r=t(1050);t.d(n,"a",function(){return r.a})},1050:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=(t(58),t(923)),i=function(e){var n=e.name,t=e.description,r=e.no_of_followers,i=e.no_of_upcoming_events,c=e.community_focus;return o.a.createElement("div",null,o.a.createElement("div",{className:"header"},n),o.a.createElement("div",{className:"description"},t),o.a.createElement("div",{className:"meta"},o.a.createElement("div",{className:"item"},r),o.a.createElement("div",{className:"item"},i),o.a.createElement("div",{className:"item"},c),o.a.createElement(a.a,null,"Follow")))};n.a=i},1051:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),c=(t.n(i),t(222)),u=t(83),l=t(38),f=t(953),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),p=function(e){function n(e){r(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.fetchData(e),t}return a(n,e),s(n,[{key:"fetchData",value:function(e){e.getCommunities()}},{key:"render",value:function(){return this.props.children(this.props)}}]),n}(i.Component),d=function(e){return{communities:e.communities.communities}},m=function(e){return Object(u.b)({getCommunities:f.b},e)};n.a=Object(l.g)(Object(c.b)(d,m)(p))},916:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1022);t.d(n,"default",function(){return r.a})},918:function(e,n,t){"use strict";function r(e){return Math.round(255*e)}function o(e,n,t){return r(e)+","+r(n)+","+r(t)}function a(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o;if(0===n)return r(t,t,t);var a=e%360/60,i=(1-Math.abs(2*t-1))*n,c=i*(1-Math.abs(a%2-1)),u=0,l=0,f=0;a>=0&&a<1?(u=i,l=c):a>=1&&a<2?(u=c,l=i):a>=2&&a<3?(l=i,f=c):a>=3&&a<4?(l=c,f=i):a>=4&&a<5?(u=c,f=i):a>=5&&a<6&&(u=i,f=c);var s=t-i/2;return r(u+s,l+s,f+s)}function i(e){if("string"!==typeof e)return e;var n=e.toLowerCase();return I[n]?"#"+I[n]:e}function c(e){if("string"!==typeof e)throw new Error("Passed an incorrect argument to a color function, please pass a string representation of a color.");var n=i(e);if(n.match(C))return{red:parseInt(""+n[1]+n[2],16),green:parseInt(""+n[3]+n[4],16),blue:parseInt(""+n[5]+n[6],16)};if(n.match(L))return{red:parseInt(""+n[1]+n[1],16),green:parseInt(""+n[2]+n[2],16),blue:parseInt(""+n[3]+n[3],16)};var t=z.exec(n);if(t)return{red:parseInt(""+t[1],10),green:parseInt(""+t[2],10),blue:parseInt(""+t[3],10)};var r=P.exec(n);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10),alpha:parseFloat(""+r[4])};var o=T.exec(n);if(o){var c=parseInt(""+o[1],10),u=parseInt(""+o[2],10)/100,l=parseInt(""+o[3],10)/100,f="rgb("+a(c,u,l)+")",s=z.exec(f);return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10)}}var p=S.exec(n);if(p){var d=parseInt(""+p[1],10),m=parseInt(""+p[2],10)/100,b=parseInt(""+p[3],10)/100,g="rgb("+a(d,m,b)+")",h=z.exec(g);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10),alpha:parseFloat(""+p[4])}}throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.")}function u(e){var n=e.red/255,t=e.green/255,r=e.blue/255,o=Math.max(n,t,r),a=Math.min(n,t,r),i=(o+a)/2;if(o===a)return void 0!==e.alpha?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var c=void 0,u=o-a,l=i>.5?u/(2-o-a):u/(o+a);switch(o){case n:c=(t-r)/u+(t<r?6:0);break;case t:c=(r-n)/u+2;break;default:c=(n-t)/u+4}return c*=60,void 0!==e.alpha?{hue:c,saturation:l,lightness:i,alpha:e.alpha}:{hue:c,saturation:l,lightness:i}}function l(e){return u(c(e))}function f(e){var n=e.toString(16);return 1===n.length?"0"+n:n}function s(e,n,t){if("number"===typeof e&&"number"===typeof n&&"number"===typeof t)return M("#"+f(e)+f(n)+f(t));if("object"===typeof e&&void 0===n&&void 0===t)return M("#"+f(e.red)+f(e.green)+f(e.blue));throw new Error("Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).")}function p(e,n,t,r){if("string"===typeof e&&"number"===typeof n){var o=c(e);return"rgba("+o.red+","+o.green+","+o.blue+","+n+")"}if("number"===typeof e&&"number"===typeof n&&"number"===typeof t&&"number"===typeof r)return r>=1?s(e,n,t):"rgba("+e+","+n+","+t+","+r+")";if("object"===typeof e&&void 0===n&&void 0===t&&void 0===r)return e.alpha>=1?s(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new Error("Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).")}function d(e){return f(Math.round(255*e))}function m(e,n,t){return M("#"+d(e)+d(n)+d(t))}function b(e,n,t){return a(e,n,t,m)}function g(e,n,t){if("number"===typeof e&&"number"===typeof n&&"number"===typeof t)return b(e,n,t);if("object"===typeof e&&void 0===n&&void 0===t)return b(e.hue,e.saturation,e.lightness);throw new Error("Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).")}function h(e,n,t,r){if("number"===typeof e&&"number"===typeof n&&"number"===typeof t&&"number"===typeof r)return r>=1?b(e,n,t):"rgba("+a(e,n,t)+","+r+")";if("object"===typeof e&&void 0===n&&void 0===t&&void 0===r)return e.alpha>=1?b(e.hue,e.saturation,e.lightness):"rgba("+a(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new Error("Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).")}function v(e){if("object"!==typeof e)throw new Error(q);if(D(e))return p(e);if(N(e))return s(e);if(A(e))return h(e);if(F(e))return g(e);throw new Error(q)}function y(e,n,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=n?e.apply(this,r):y(e,n,r)}}function w(e){return y(e,e.length,[])}function k(e,n,t){return Math.max(e,Math.min(n,t))}function x(e,n){var t=l(n);return v(O({},t,{lightness:k(0,1,t.lightness+e)}))}t.d(n,"a",function(){return G});var E,_,j,O=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},I=(E={html:{fontFamily:"sans-serif"},body:{margin:"0"}},E["a:active,\n  a:hover"]={outlineWidth:"0"},E["button,\n  input,\n  optgroup,\n  select,\n  textarea"]={fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15"},j={html:{lineHeight:"1.15",textSizeAdjust:"100%"}},j["article,\n  aside,\n  footer,\n  header,\n  nav,\n  section"]={display:"block"},j.h1={fontSize:"2em",margin:"0.67em 0"},j["figcaption,\n  figure,\n  main"]={display:"block"},j.figure={margin:"1em 40px"},j.hr={boxSizing:"content-box",height:"0",overflow:"visible"},j.pre={fontFamily:"monospace, monospace",fontSize:"1em"},j.a={"background-color":"transparent","-webkit-text-decoration-skip":"objects"},j["abbr[title]"]=(_={borderBottom:"none",textDecoration:"underline"},_.textDecoration="underline dotted",_),j["b,\n  strong"]={fontWeight:"inherit"},j["code,\n  kbd,\n  samp"]={fontFamily:"monospace, monospace",fontSize:"1em"},j.dfn={fontStyle:"italic"},j.mark={backgroundColor:"#ff0",color:"#000"},j.small={fontSize:"80%"},j["sub,\n  sup"]={fontSize:"75%",lineHeight:"0",position:"relative",verticalAlign:"baseline"},j.sub={bottom:"-0.25em"},j.sup={top:"-0.5em"},j["audio,\n  video"]={display:"inline-block"},j["audio:not([controls])"]={display:"none",height:"0"},j.img={borderStyle:"none"},j["svg:not(:root)"]={overflow:"hidden"},j["button,\n  input,\n  optgroup,\n  select,\n  textarea"]={margin:"0"},j["button,\n  input"]={overflow:"visible"},j["button,\n  select"]={textTransform:"none"},j['button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"]']={"-webkit-appearance":"button"},j['button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner']={borderStyle:"none",padding:"0"},j['button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring']={outline:"1px dotted ButtonText"},j.fieldset={border:"1px solid #c0c0c0",margin:"0 2px",padding:"0.35em 0.625em 0.75em"},j.legend={boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:"0",whiteSpace:"normal"},j.progress={display:"inline-block",verticalAlign:"baseline"},j.textarea={overflow:"auto"},j['[type="checkbox"],\n  [type="radio"]']={boxSizing:"border-box",padding:"0"},j['[type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button']={height:"auto"},j['[type="search"]']={"-webkit-appearance":"textfield",outlineOffset:"-2px"},j['[type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration']={"-webkit-appearance":"none"},j["::-webkit-file-upload-button"]={"-webkit-appearance":"button",font:"inherit"},j["details,\n  menu"]={display:"block"},j.summary={display:"list-item"},j.canvas={display:"inline-block"},j.template={display:"none"},j["[hidden]"]={display:"none"},{aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}),C=/^#[a-fA-F0-9]{6}$/,L=/^#[a-fA-F0-9]{3}$/,z=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,P=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,T=/^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,S=/^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,M=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},N=function(e){return"number"===typeof e.red&&"number"===typeof e.green&&"number"===typeof e.blue&&("number"!==typeof e.alpha||"undefined"===typeof e.alpha)},D=function(e){return"number"===typeof e.red&&"number"===typeof e.green&&"number"===typeof e.blue&&"number"===typeof e.alpha},F=function(e){return"number"===typeof e.hue&&"number"===typeof e.saturation&&"number"===typeof e.lightness&&("number"!==typeof e.alpha||"undefined"===typeof e.alpha)},A=function(e){return"number"===typeof e.hue&&"number"===typeof e.saturation&&"number"===typeof e.lightness&&"number"===typeof e.alpha},q="Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.",G=w(x)},923:function(e,n,t){"use strict";var r=t(926);t.d(n,"a",function(){return r.a})},926:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(31),i=t(223),c=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  border: 1px solid var(--activeLink);\n  color: var(--activeLink);\n  background: transparent;\n  padding: 10px 30px;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 1px;\n  \n  &:hover {\n    background: var(--activeLink);\n    color: ",";\n  }\n"],["\n  border: 1px solid var(--activeLink);\n  color: var(--activeLink);\n  background: transparent;\n  padding: 10px 30px;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 1px;\n  \n  &:hover {\n    background: var(--activeLink);\n    color: ",";\n  }\n"]),u=a.b.button(c,i.a.white),l=function(e){return o.a.createElement(u,e)};n.a=l},931:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),c=t.n(i),u=t(932),l=t.n(u),f=t(58),s=t(38),p=t(918),d=t(134),m=t(222),b=t(83),g=t(84),h=t(31),v=t(923),y=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),w=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  --bg: ",";\n  background: var(--bg);\n  \n  .logo, .ui.menu {\n    background: #fff;\n  }\n  \n  .ui.secondary.menu .item {\n    \n    &.active {\n      color: var(--activeLink);\n      border-color: var(--activeLink);\n    }\n  }\n  \n  .logo img {\n    height: 50px;\n    margin: 20px;\n  }\n  \n  .ui.secondary.menu a.item.create-event-btn {\n    border: 1px solid var(--activeLink);\n    border-radius: 5px;\n    background: var(--activeLink);\n    color: var(--bg);\n    letter-spacing: 1.2px;\n    padding: 8px 15px 6px;\n    margin: 5px;\n  }\n  \n  button {\n    margin: -.5em 0;\n    padding: 0.7rem 1rem;\n  }\n"],["\n  --bg: ",";\n  background: var(--bg);\n  \n  .logo, .ui.menu {\n    background: #fff;\n  }\n  \n  .ui.secondary.menu .item {\n    \n    &.active {\n      color: var(--activeLink);\n      border-color: var(--activeLink);\n    }\n  }\n  \n  .logo img {\n    height: 50px;\n    margin: 20px;\n  }\n  \n  .ui.secondary.menu a.item.create-event-btn {\n    border: 1px solid var(--activeLink);\n    border-radius: 5px;\n    background: var(--activeLink);\n    color: var(--bg);\n    letter-spacing: 1.2px;\n    padding: 8px 15px 6px;\n    margin: 5px;\n  }\n  \n  button {\n    margin: -.5em 0;\n    padding: 0.7rem 1rem;\n  }\n"]),k=h.b.div(w,Object(p.a)(.6,d.a.fg)),x=function(e){function n(){var e,t,a,i;r(this,n);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return t=a=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(u))),a.state={activeItem:"Events"},a.handleItemClick=function(e,n){var t=n.name;a.props.history.push("/"+t.replace(" ","_").toLowerCase()),a.setState({activeItem:t})},a.handleLogout=function(e){a.props.logout().then(function(e){return window.location.replace("/login")})},i=t,o(a,i)}return a(n,e),y(n,[{key:"render",value:function(){var e=this,n=["Events","Communities","Explore"],t=this.state.activeItem;return c.a.createElement(k,{className:"header"},c.a.createElement("div",{className:"logo"},c.a.createElement("a",{href:"/"},c.a.createElement("img",{src:l.a,className:"img-logo"}))),c.a.createElement(f.l,{pointing:!0,secondary:!0},n.map(function(n){return c.a.createElement(f.l.Item,{key:n,name:n,active:t===n,onClick:e.handleItemClick})}),c.a.createElement(f.l.Menu,{position:"right"},c.a.createElement(f.l.Item,null,c.a.createElement(f.j,{icon:"search",placeholder:"Search..."})),c.a.createElement(f.l.Item,{link:!0},c.a.createElement(v.a,{onClick:function(){return e.props.history.push("/events/new")}},c.a.createElement(f.i,{name:"plus"}),"Create Event")),c.a.createElement(f.l.Item,{name:"logout",active:"logout"===t,onClick:this.handleLogout}))))}}]),n}(i.Component),E=function(e){return{}},_=function(e){return Object(b.b)({logout:g.a.logout},e)};Object(s.g)(Object(m.b)(E,_)(x))},932:function(e,n,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},953:function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"a",function(){return c});var r=t(428),o=t(421),a=t(1028),i=function(){return function(e){return Object(a.a)().then(function(n){e({type:r.a.COMMUNITY_INDEX_COMPLETE,payload:n.communities})})}},c=function(e){var n=Object(o.a)({requestType:r.a.COMMUNITY_INDEX_START,receiveType:r.a.COMMUNITY_INDEX_COMPLETE,failType:r.a.COMMUNITY_INDEX_FAIL});return Object(o.b)({actions:n,data:e,errorMessage:"Something prevented us from retrieving an email",caller:"getCommunities",route:"/api/v1/web/communities",requestMethod:"GET"})}}});
//# sourceMappingURL=JoinACommunity.b43fbad7.chunk.js.map