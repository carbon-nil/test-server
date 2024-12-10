(()=>{var t={806:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function l(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,l)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},u=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return u.next=l(0),u.throw=l(1),u.return=l(2),"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;u&&(u=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=e.call(t,i)}catch(t){l=[6,t],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=n(896),l=i(n(928)),c=n(935),s=n(81),a=n(932);!function(){var t=this;u.promises.readFile(l.default.join(process.cwd(),"config.json"),"utf-8").then((function(t){var e=JSON.parse(t);(0,s.runServer)(e.port)})).catch((function(e){return r(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return(0,c.log)("Error reading config file: ".concat(e.message),"Error"),[4,u.promises.writeFile(l.default.join(process.cwd(),"config.json"),'{"version":"'.concat(process.env.npm_package_version,'","port":"3001"}'))];case 1:return t.sent(),(0,a.exit)(1),[2]}}))}))}))}()},81:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.runServer=function(t){i.default.createServer((function(t,e){t.setEncoding("utf-8");var n=(0,s.parseRequest)(t),r=n.url.replace(/^\//,"").split("?",2),i=r[0],f=r[1],h=f?f.split("&").reduce((function(t,e){var n=e.split("="),r=n[0],o=n[1];return t[r]=o,t}),{}):{},d=f?(0,a.parseQuery)(f):{};return(0,c.log)("".concat(n.Host,"/").concat(i," : ").concat(JSON.stringify(h)," ").concat(JSON.stringify(d)),"Debug"),""===i?(e.writeHead(303,{"Content-Type":"text/html"}),void e.end('<html><head><meta http-equiv="refresh" content="0;url=/index.html"></head></html>')):o.default.existsSync(u.default.join(process.cwd(),"resources",i))?void(0,l.getHTML)(u.default.join(process.cwd(),"resources",i)).then((function(t){e.end(t)})).catch((function(t){e.writeHead(500,{"Content-Type":"text/plain"}),e.end("Internal Server Error"),(0,c.log)("Error reading file: ".concat(t.message),"Error")})):(e.writeHead(404,{"Content-Type":"text/plain"}),void e.end("Not Found"))})).listen(t),(0,c.log)("Server is running on port ".concat(t))};var o=r(n(896)),i=r(n(611)),u=r(n(928)),l=n(341),c=n(935),s=n(38),a=n(544)},341:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function l(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,l)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},u=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return u.next=l(0),u.throw=l(1),u.return=l(2),"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;u&&(u=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=e.call(t,i)}catch(t){l=[6,t],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.getHTML=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,i.promises.readFile(t,"utf-8").then((function(t){return t}))];case 1:return[2,e.sent()]}}))}))};var i=n(896)},935:(t,e)=>{"use strict";function n(t,e){void 0===e&&(e="Info");for(var n=new Date,r=("00"+n.getHours()).slice(-2),o=("00"+n.getMinutes()).slice(-2),i=("00"+n.getSeconds()).slice(-2),u=0,l=t.split("\n");u<l.length;u++){var c=l[u];console.log("[".concat(r,":").concat(o,":").concat(i,"] [").concat(e,"] ").concat(c))}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=n,e.logHTML=function(t){for(var e="".concat(t.method," ").concat(t.url," HTTP/").concat(t.httpVersion,"\n"),r=void 0,o=0,i=t.rawHeaders;o<i.length;o++){var u=i[o];void 0===r?r=u:(e+="".concat(r,": ").concat(u,"\n"),r=void 0)}e+="\n";var l="";t.on("data",(function(t){return l+=t})),t.on("end",(function(){e+=l})),n(e)}},38:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parseRequest=function(t){for(var e={method:t.method||"",url:t.url||"",httpVersion:t.httpVersion||""},n=void 0,r=0,o=t.rawHeaders;r<o.length;r++){var i=o[r];void 0===n?n=i:(e[n]=i,n=void 0)}var u="";return t.on("data",(function(t){return u+=t})),t.on("end",(function(){e.body+=u})),e}},544:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.compressQuery=function(t){return Object.keys(t).map((function(e){return"".concat(e,"=").concat(o.default.compress(t[e]))})).join("&")},e.parseQuery=function(t){return t.split("&").reduce((function(t,e){var n=e.split("="),r=n[0],i=n[1];return t[r]=o.default.expand(i),t}),{})};var o=r(n(30))},30:(t,e,n)=>{t=n.nmd(t);const r=(()=>{function t(t){const e=function(t){if("string"!=typeof t)return null;const e=[];for(let n=t.length,r=0;r<n;r++){const o=t.charCodeAt(r);if(o>=55296&&o<=56319){if(r+1>=n)return null;e.push(64+(1023&o)<<10|1023&t.charCodeAt(++r))}else e.push(o)}return e}(t);if(null===e)return null;let n="";for(let t=e.length,r=0;r<t;r++){const t=e[r];if(t<=127)n+=String.fromCharCode(t);else if(t<=2047)n+=String.fromCharCode(192|t>>>6,128|191&t);else if(t<=65535)n+=String.fromCharCode(224|t>>>12,128|t>>>6&191,128|191&t);else{if(!(t<=1114111))return null;n+=String.fromCharCode(240|t>>>18,128|t>>>12&191,128|t>>>6&191,128|191&t)}}return n}function e(t){if("string"!=typeof t)return null;let e="";for(let n=0,r=t.length;n<r;n++){const o=t.charCodeAt(n);if(o<=127)e+=String.fromCharCode(o);else if(o>=194&&o<=223){if(n+1>=r)return null;const i=t.charCodeAt(++n);e+=String.fromCharCode((31&o)<<6|63&i)}else if(o>=224&&o<=239){if(n+2>=r)return null;const i=t.charCodeAt(++n),u=t.charCodeAt(++n);e+=String.fromCharCode((15&o)<<12|(63&i)<<6|63&u)}else{if(!(o>=240&&o<=244))return null;{if(n+3>=r)return null;const i=t.charCodeAt(++n),u=t.charCodeAt(++n),l=t.charCodeAt(++n);e+=String.fromCharCode(55296|((7&o)<<8|(63&i)<<2|u>>>4&3)-64,56320|(15&u)<<6|63&l)}}}return e}const n=[258,258,130,99],r=[256,256,128,97],o=[257,257,129,98],u=1e3,l=(()=>{const t=[];let e=0;for(i=0;i<128;i++)i<32&&9!==i&&10!==i||127===i?t.push(null):t.push(e++);return t})(),c=(()=>{const t=[];for(i=0;i<l.length;i++)null!==l[i]&&t.push(i);return t})(),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",a=(()=>{const t=new Map;for(let e=64,n=0;n<e;n++)t.set(s[n],n);return t})();function f(t){let e=1,n=0;for(;t>=e;)e<<=1,n++;return n}function h(t,e){const n=[];for(let r=0;r<e;r++){n.push(null);let e=r;for(;e>0&&n[e-1].count<t[r];)n[e]=n[e-1],e--;n[e]={count:t[r],symbol:r,left:null,right:null}}for(;n.length>1;){const t={count:n[n.length-2].count+n[n.length-1].count,symbol:-1,left:n[n.length-2],right:n[n.length-1]};n.pop();let e=n.length-1;for(;e>0&&n[e-1].count<t.count;)n[e]=n[e-1],e--;n[e]=t}return n[0]}function d(t,e){const n=[];for(let t=0;t<e;t++)n.push(null);const r={buf:new Uint8Array(e+7>>>3),bitNum:0},o=t=>{if(t.symbol>=0){const e=r.bitNum,o=e+7>>>3,i=new Uint8Array(o);for(let t=0;t<o;t++)i[t]=r.buf[t];n[t.symbol]={code:i,bitNum:e}}else{const e=r.bitNum;r.buf[e>>>3]&=~(1<<7-e%8),r.bitNum++,o(t.left),r.buf[e>>>3]|=1<<7-e%8,o(t.right),r.bitNum--}};return o(t),n}return{compress:function(e,i=!0){let c="",a=0,p=0;const g=i?6:8,v=t=>{const e=[3];let n=t;for(;0!==n;)n--,e.push(n%3),n=Math.floor(n/3);const r=new Uint8Array(2*e.length+6>>>3);let o=0,i=0;for(let t=e.length-1;t>=0;t--)i=(i<<2)+e[t],o+=2,o%8==0&&(r[(o>>>3)-1]=i,i=0);if(o%8!=0){const t=8-o%8;r[o>>>3]=i<<t}return{codeBuf:r,bitCnt:o}},y=(t,e)=>{let n=0,r=0,o=e;for(;o>0;)a=(a<<1)+(t[r]>>7-n&1),++p===g&&(c+=i?s[a]:String.fromCharCode(a),a=0,p=0),8==++n&&(n=0,r++),o--};if("string"!=typeof e)return null;const b=(t=>{const e=[];for(let t=0;t<256;t++)e.push(0);for(let n=t.length,r=0;r<n;r++){if(t.charCodeAt(r)>=256)return 0;e[t.charCodeAt(r)]++}for(let t=128;t<256;t++)if(e[t]>0)return 1;for(let t=l.length,n=0;n<=t;n++)if(null===l[n]&&e[n]>0)return 2;return 3})(e),m=n[b],C=r[b],w=o[b];let _;if(0===b){if(_=t(e),null===_)return null}else if(3===b){const t=l;_="";for(let n=e.length,r=0;r<n;r++)_+=String.fromCharCode(t[e.charCodeAt(r)])}else _=e;let x=[];for(let t=0;t<m;t++)x.push(.25);(t=>{const e=new Uint8Array(1);e[0]=t<<6,y(e,2)})(b);const S=[];for(let t=0;t<256;t++)S.push(null);const A=[];let j,M,O=0,k=0,H=_.length;for(;(k<256||k%8==0)&&(j=h(x,m),M=d(j,m)),!(O>=H);){let t=_.charCodeAt(O),e=0,n=0;if(O>0){let r=S[t];for(;null!==r&&O-r<=2048;){let t=1;for(;O+t-1<_.length&&_[O+t]===_[r+t]&&(t++,!(t>=u)););if(t>e&&(e=t,n=r,e>=u))break;r=A[r]}}e>=3&&(t=C),y(M[t].code,M[t].bitNum);let r=1;if(t===C){const t=v(e-3);y(t.codeBuf,t.bitCnt);const o=O-n-1,i=f(Math.min(O-1,2047)),u=new Uint8Array(2);i<=8?u[0]=o<<8-i:(u[0]=o>>i-8,u[1]=o<<16-i&255),y(u,i),r=e}for(let t=0;t<r;t++)A.push(S[_.charCodeAt(O)]),S[_.charCodeAt(O)]=O,O++;k++,x[t]++}return p>0&&(a=(a<<g-p)+(M[w].code[0]>>p+8-g),c+=i?s[a]:String.fromCharCode(a)),c},expand:function(t,i=!0){let l,s,d;const p=new Uint8Array(t.length),g=i?6:8,v=()=>{const t=d>>g-s-1&1;return++s===g&&(s=0,l++,l<M&&(d=p[l])),t},y=()=>{let t=0,e=0;do{if(l>=p.length)return-1;if(t=v(),l>=p.length)return-1;t=(t<<1)+v(),t<3&&(e=3*e+t+1)}while(t<3);return e};if("string"!=typeof t||0===t.length)return null;for(let e=t.length,n=0;n<e;n++){let e;if(i){if(e=a.get(t[n]),void 0===e)return null}else if(e=t.charCodeAt(n),e>=256)return null;p[n]=e}l=0,s=0,d=p[0];const b=(()=>{let t=v();return t=(t<<1)+v(),t})(),m=n[b],C=r[b],w=o[b];let _=[];for(let t=0;t<m;t++)_.push(.25);let x="",S=h(_,m),A=S,j=0;const M=p.length;let O=0;for(;l<M;)if(A=v()?A.right:A.left,A.symbol>=0){if(A.symbol===w)break;if(A.symbol===C){const t=y();if(t<0)return null;const e=t+3;if(e>u)return null;let n=0;const r=f(Math.min(O-1,2047));for(let t=0;t<r;t++){if(l>=M)return null;n=(n<<1)+v()}if(n>=O)return null;for(let t=0;t<e;t++)x+=x[O-n-1+t];O+=e}else x+=String.fromCharCode(A.symbol),O++;_[A.symbol]++,j++,(j<256||j%8==0)&&(S=h(_,m)),A=S}if(0===b){if(x=e(x),null===x)return null}else if(3===b){t="";for(let e=x.length,n=0;n<e;n++)t+=String.fromCharCode(c[x.charCodeAt(n)]);x=t}return x},encodeUtf8:t,decodeUtf8:e}})();null!=t&&(t.exports=r)},896:t=>{"use strict";t.exports=require("fs")},611:t=>{"use strict";t.exports=require("http")},928:t=>{"use strict";t.exports=require("path")},932:t=>{"use strict";t.exports=require("process")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n(806)})();