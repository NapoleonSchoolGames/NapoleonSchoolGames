!function(t){function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var i={};o.m=t,o.c=i,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=2)}([function(n,e,t){"use strict";window.config.title||console.error(new Error("No title on window.config"));var o=Object.assign({loader:"unity",maxRatio:16/9,minRatio:9/16,thumbnail:"https://img.poki.com/cdn-cgi/image/quality=80,width=100,height=100,fit=cover,g=0.5x0.5,f=auto/a398cd4e645b76810031bd97f8697414.png",numScreenshots:4,commentChangeTime:5e3,spinnerRemoveDelay:1e3,fullImageMaxWidth:.6,fullImageMaxHeight:.7,smallImageSizeOfFullImage:.8,animationTargetSizeOfSmallImage:.5,transitionDuration:.5,slideshowInterval:5},window.config);e.a=o},function(n,e,t){"use strict";function c(n,e,t,o,i,r,a){try{var s=n[r](a),c=s.value}catch(n){return t(n),0}s.done?e(c):Promise.resolve(c).then(o,i)}function o(s){return function(){var n=this,a=arguments;return new Promise(function(e,t){function o(n){c(r,e,t,o,i,"next",n)}function i(n){c(r,e,t,o,i,"throw",n)}var r=s.apply(n,a);o(void 0)})}}function i(){return(i=o(y.a.mark(function n(){var e,t,o,i,r,a,s;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return f=document.getElementById("slideshow"),m=document.getElementById("slideshow-top"),p=document.getElementById("slideshow-nav"),g=document.getElementById("slideshow-images"),m.className="active",n.prev=5,n.next=8,u("".concat(I,"screenshots/1-small.jpg").concat(k));case 8:e=n.sent,n.next=16;break;case 11:return n.prev=11,n.t0=n.catch(5),n.next=15,u("".concat(I,"screenshots/1.jpg").concat(k));case 15:e=n.sent;case 16:for((t=h()).className="".concat(x," middle"),t.setAttribute("fullImageLoaded",!0),t.setAttribute("data-idx",0),t.appendChild(e),g.appendChild(t),f.className="active",w=e.width/e.height,v=document.createElement("style"),d(),document.body.appendChild(v),window.addEventListener("resize",d),o=0;o<=b.a.numScreenshots-1;o++)(i=document.createElement("div")).className="bullet".concat(0===o?" active":""),i.setAttribute("data-idx",o),p.appendChild(i);return n.next=31,u("".concat(I,"screenshots/1.jpg").concat(k));case 31:for(r=n.sent,t.querySelector("img").src=r.src,a=function(n){var e=h(),t=new Image;t.src="".concat(I,"screenshots/").concat(n+1,"-small.jpg").concat(k),e.appendChild(t),e.setAttribute("data-idx",n),1===n?e.className="".concat(x," right"):n===b.a.numScreenshots-1?e.className="".concat(x," left"):e.className="".concat(x," inactive"),g.appendChild(e)},s=1;s<=b.a.numScreenshots-1;s++)a(s);l();case 36:case"end":return n.stop()}},n,null,[[5,11]])}))).apply(this,arguments)}function l(){return r.apply(this,arguments)}function r(){return(r=o(y.a.mark(function n(){var e,t,o,i,r,a;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=1e3*b.a.slideshowInterval,t=g.querySelector("#slideshow-images .right"),o=t.getAttribute("data-idx")<<0,t.getAttribute("fullImageLoaded")){n.next=16;break}return i=Date.now(),n.next=7,u("".concat(I,"screenshots/").concat(1+o,".jpg").concat(k));case 7:r=n.sent,t.querySelector("img").src=r.src,t.setAttribute("fullImageLoaded",!0),clearTimeout(window.slideShowMoveTransitionID),clearTimeout(window.slideShowTimeoutID),a=Date.now()-i,e<a?s():window.slideShowTimeoutID=window.setTimeout(s,e-a),n.next=19;break;case 16:clearTimeout(window.slideShowMoveTransitionID),clearTimeout(window.slideShowTimeoutID),window.slideShowTimeoutID=window.setTimeout(s,e);case 19:case"end":return n.stop()}},n)}))).apply(this,arguments)}function s(){var n,e,t;L||((n=S+1)>b.a.numScreenshots-1&&(n=0),e=0<(S=n<<0)?S-1:b.a.numScreenshots-1,t=S<b.a.numScreenshots-1?S+1:0,g.querySelectorAll(".image").forEach(function(n){n.className==="".concat(x," left")&&(n.className="".concat(x," fromLeft")),n.className==="".concat(x," right")&&(n.className="".concat(x," fromRight")),-1===n.className.indexOf("inactive")&&(n.className+=" inactive")}),g.querySelector('[data-idx="'.concat(S,'"]')).className="".concat(x," middle"),g.querySelector('[data-idx="'.concat(e,'"]')).className="".concat(x," left"),g.querySelector('[data-idx="'.concat(t,'"]')).className="".concat(x," right"),p.querySelectorAll(".bullet").forEach(function(n,e){n.className="bullet",e===S&&(n.className+=" active")}),window.slideShowMoveTransitionID=window.setTimeout(function(){g.querySelectorAll(".inactive").forEach(function(n){n.className="".concat(x," inactive fromRight")})},1e3*b.a.transitionDuration),l())}function d(){var n=window.innerWidth/window.innerHeight,e=b.a.fullImageMaxWidth/w*n,t=b.a.fullImageMaxWidth;e>b.a.fullImageMaxHeight&&(t=(e=b.a.fullImageMaxHeight)*w/n);var o=t*b.a.smallImageSizeOfFullImage,i=.5-t/2,r=t*b.a.animationTargetSizeOfSmallImage,a=-2*r,s=1+r,c=(1-t)/4-t/2,l=.5-.5*t-(o+t)/2,d=1-(1-t)/4-t/2,u=.5+.5*o,h=Math.min(c,l),f=Math.max(d,u);v.innerHTML="\n\t\t#slideshow-images {\n\t\t\theight: ".concat(100*e,"vh;\n\t\t}\n\t\t#slideshow-images .image {\n\t\t\ttransition-duration: ").concat(b.a.transitionDuration,"s;\n\t\t\twidth: ").concat(100*t,"vw;\n\t\t\theight: ").concat(100*e,"vh;\n\t\t}\n\t\t#slideshow-images .middle {\n\t\t\ttransform: translateX(").concat(100*i,"vw);\n\t\t}\n\t\t#slideshow-images .left {\n\t\t\ttransform: translateX(").concat(100*h,"vw) scale(").concat(b.a.smallImageSizeOfFullImage,");\n\t\t}\n\t\t#slideshow-images .right {\n\t\t\ttransform: translateX(").concat(100*f,"vw) scale(").concat(b.a.smallImageSizeOfFullImage,");\n\t\t}\n\t\t#slideshow-images .inactive.fromLeft {\n\t\t\ttransform: translateX(").concat(100*a,"vw) scale(").concat(b.a.smallImageSizeOfFullImage*b.a.animationTargetSizeOfSmallImage,");\n\t\t}\n\t\t#slideshow-images .inactive.fromRight {\n\t\t\ttransform: translateX(").concat(100*s,"vw) scale(").concat(b.a.smallImageSizeOfFullImage*b.a.animationTargetSizeOfSmallImage,");\n\t\t}\n\t")}function u(o){return new Promise(function(n,e){var t=new Image;t.addEventListener("load",function(){return n(t)}),t.addEventListener("error",function(n){0<t.src.indexOf(".jpg")?t.src=t.src.replace(".jpg",".png"):e(n)}),t.src=o})}function h(){var n=document.createElement("div");return n.className=x,n}e.a=function(){return i.apply(this,arguments)};var f,m,p,g,w,v,a=t(10),y=t.n(a),b=t(0),x="image",S=0,L=!1,k=b.a.screenshotsVersion?"?v".concat(b.a.screenshotsVersion):"",E=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")),I=window.location.hostname.endsWith("game-cdn.poki.com")||window.location.hostname.endsWith(".poki-gdn.com")?"/cdn-cgi/image/f=auto,quality=78".concat(E,"/"):"";window.navigateNext=s,window.removeSlideshowEventListeners=function(){L=!0}},function(n,e,t){n.exports=t(3)},function(n,e,t){"use strict";function o(n){var e=document.createElement("div");return e.id=n,e}Object.defineProperty(e,"__esModule",{value:!0});var i=t(4),r=(t.n(i),t(0)),a=(t(9),t(1),t(11)),s=(t.n(a),o("loader")),c=o("slideshow"),l=o("slideshow-top"),d=document.createElement("img");d.id="thumbnail",d.alt=r.a.title,d.title=r.a.title;var u=r.a.thumbnail;u.startsWith("https://img.poki.com/")&&(u="https://img.poki.com/cdn-cgi/image/quality=78,width=40,height=40,fit=cover,g=0.5x0.5,f=auto/".concat(u.substr(21))),d.src=u;var h=o("slideshow-top-container"),f=o("game-title");f.innerText=r.a.title;var m=o("progress-spinner");m.innerHTML='<div class="bounce0"></div><div class="bounce1"></div><div class="bounce2">',m.setAttribute("class","spinner");var p=o("progress-container"),g=o("progress-bar"),w=o("progress-fill");w.style.width="0%";var v=o("progress-amount");v.innerText="0%";var y=o("progress-comment");y.innerText="Loading";var b=o("slideshow-images"),x=o("slideshow-nav"),S=o("game-container"),L=document.createElement("canvas");L.setAttribute("id","game"),s.appendChild(c),c.appendChild(l),c.appendChild(b),c.appendChild(x),l.appendChild(d),l.appendChild(h),h.appendChild(f),h.appendChild(m),h.appendChild(p),p.appendChild(g),p.appendChild(v),h.appendChild(y),g.appendChild(w),S.appendChild(L),document.body.appendChild(s),document.body.appendChild(S)},function(n,e,t){var o=t(5);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(7)(o,i),o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(6)(!1)).push([n.i,"* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody {\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    background: #002B50;\n    font-family: Torus, Arial, Helvetica, sans-serif;\n    color: #fff;\n}\n\n#game-container {\n    position: absolute !important;\n    left: 50%;\n    top: 50%;\n    display: none;\n}\n\n#game,\n#game canvas {\n    width: 100%;\n    height: 100%;\n}\n\n#loader {\n    width: 100%;\n    height: 100%;\n}\n\n/**\n   * Slideshow\n   */\n\n#slideshow {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    display: flex;\n    user-select: none;\n}\n\n@font-face {\n    font-family: Torus;\n    src:\n        url('patch/fonts/torus-bold-webfont.woff2') format('woff2'),\n        url('patch/fonts/torus-bold-webfont.woff') format('woff');\n    font-style: bold;\n    font-weight: 700;\n}\n\n/**\n   * Slideshow - Top section\n   */\n#progress-spinner{\n    margin-left: 0;\n    margin-top: 0;\n    left: 0px;\n    display:none;\n    transform: translate(100%, -50%);\n    width:10vh;\n}\n#progress-spinner >div{\n    width:2vh;\n    height:2vh;\n}\n#thumbnail {\n    box-shadow: 0 1vh 2vh rgba(0, 0, 0, 0.4);\n    /* box-shadow: 0 6px 12px rgba(0, 0, 0, 0.24); */\n    border-radius: 16.667%;\n}\n\n#slideshow-top {\n    display: flex;\n    margin: 2.5vh 0;\n}\n\n#slideshow-top-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n}\n\n#game-title, #progress-comment {\n    display: flex;\n    flex-grow: 1;\n    align-items: center;\n    font-size:2vh;\n}\n\n#progress-container {\n    display: flex;\n    align-items: center;\n    flex-grow: 1;\n    transition: 0.2s ease-out all;\n}\n\n#progress-container.done {\n    opacity: 0;\n}\n\n#progress-bar {\n    background: #fff;\n    width: 100%;\n    overflow: hidden;\n}\n\n#progress-fill {\n    background: #3CF7DC;\n    height: 100%;\n    transition: 0.2s ease-out all;\n    animation-name: fillColor;\n    animation-duration: 3.5s;\n    animation-iteration-count: infinite;\n    animation-fill-mode: both;\n}\n\n@keyframes fillColor {\n    0% {\n        background-color: #3CF7DC;\n    }\n\n    25% {\n        background-color: #FFA9BE;\n    }\n\n    50% {\n        background-color: #FFDC00;\n    }\n\n    75% {\n        background-color: #E0AEF5;\n    }\n\n    100% {\n        background-color: #3CF7DC;\n    }\n}\n\n@media (orientation: portrait) {\n    #thumbnail {\n        margin-right: 2.4vh;\n    }\n\n    #game-title h1 {\n        font-size: 2vh;\n    }\n\n    #slideshow-top {\n        width: 70vw;\n    }\n\n    #progress-bar {\n        height: 1vh;\n        border-radius: 0.5vh;\n    }\n\n    #progress-fill {\n        border-radius: 0.5vh;\n    }\n\n    #thumbnail {\n        width: 5vh;\n        height: 5vh;\n    }\n\n    #progress-amount {\n        font-size: 2vh;\n        margin-left: 1.5vh;\n        width: 3vh;\n    }\n}\n\n@media (orientation: landscape) {\n    #thumbnail {\n        margin-right: 3vh;\n    }\n\n    #game-title h1 {\n        font-size: 3vh;\n    }\n\n    #slideshow-top {\n        width: 50vw;\n    }\n\n    #progress-bar {\n        height: 1.2vh;\n        border-radius: 0.6vh;\n    }\n\n    #progress-fill {\n        border-radius: 0.6vh;\n    }\n\n    #thumbnail {\n        width: 7.5vh;\n        height: 7.5vh;\n    }\n\n    #progress-amount {\n        font-size: 2.5vh;\n        margin-left: 1.875vh;\n        width: 3.75vh;\n    }\n}\n\n/**\n   * Slideshow - Images section\n   */\n\n#slideshow-images {\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n}\n\n#slideshow-images .image {\n    position: absolute;\n    box-shadow: 0 2.4vh 3.6vh rgba(0, 0, 0, 0.4);\n    transition-property: transform;\n    transition-timing-function: ease-in-out;\n    perspective: 1000px;\n    left: 0;\n    overflow: hidden;\n    /* border: 1vh solid; */\n}\n\n#slideshow-images .image img {\n    width: 100%;\n    height: 100%;\n}\n\n#slideshow-images .image:nth-of-type(1n) {\n    border-color: #3BE8B0;\n}\n\n#slideshow-images .image:nth-of-type(2n) {\n    border-color: #FF6D92;\n}\n\n#slideshow-images .image:nth-of-type(3n) {\n    border-color: #A177FF;\n}\n\n#slideshow-images .image:nth-of-type(4n) {\n    border-color: #FFD200;\n}\n\n#slideshow-images .left {\n    z-index: 2;\n}\n#slideshow-images .right {\n    z-index: 1;\n}\n\n#slideshow-images .middle {\n    z-index: 3;\n}\n\n#slideshow-images .left img,\n#slideshow-images .right img {\n    transform: scale(1.05);\n}\n\n#slideshow-images .left img,\n#slideshow-images .right img,\n#slideshow-images .fromLeft img,\n#slideshow-images .fromRight img {\n    filter: blur(1vh);\n}\n\n#slideshow-images .inactive {\n    display: none;\n}\n\n#slideshow-images .inactive.fromLeft,\n#slideshow-images .inactive.fromRight {\n    display: block;\n}\n\n/**\n   * Slideshow - Navigation section\n   */\n\n#slideshow-nav {\n    display: flex;\n    justify-content: center;\n    margin: 2.5vh 0;\n}\n\n#slideshow-nav .bullet {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#slideshow-nav .bullet:after {\n    content: '';\n    background: #fff;\n    border-radius: 0.4vh;\n    width: 0.8vh;\n    height: 0.8vh;\n}\n\n#slideshow-nav .bullet.active:after {\n    background: #009CFF;\n}\n\n#slideshow-nav .bullet {\n    width: 2.5vh;\n    height: 2.5vh;\n}\n\n#slideshow-nav .bullet:after {\n    border-radius: 50%;\n    width: 50%;\n    height: 50%;\n}\n\n/**\n   * Pop-in animation\n   */\n\n#slideshow-nav,\n#slideshow-images {\n    opacity: 0;\n    transition: 0.4s all ease-out;\n    transform: translateY(2vh);\n    perspective: 1000px;\n    transition-delay: 400ms;\n}\n\n#slideshow-nav {\n    transition-delay: 600ms;\n}\n\n#slideshow.active #slideshow-images,\n#slideshow.active #slideshow-nav {\n    opacity: 1;\n    transform: translateY(0);\n}\n\n@keyframes bounceInDown {\n\n    from,\n    60%,\n    75%,\n    90%,\n    to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n\n    0% {\n        transform: translate3d(0, -100vh, 0);\n    }\n\n    40% {\n        transform: translate3d(0, 0.5vh, 0);\n    }\n\n    65% {\n        transform: translate3d(0, -0.2vh, 0);\n    }\n\n    80% {\n        transform: translate3d(0, 0.1vh, 0);\n    }\n\n    to {\n        transform: translate3d(0, 0, 0);\n    }\n}\n\n#slideshow-top {\n    transform: translate3d(0, -20vh, 0);\n    opacity: 0;\n}\n\n#slideshow-top.active {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n    animation-name: bounceInDown;\n    animation-duration: 0.5s;\n}\n\n/**\n   * Loading dots\n   */\n.spinner {\n    position: relative;\n    left: -9999px;\n    animation: dot-pulse 1.5s infinite linear;\n    animation-delay: .25s;\n    transform:translate(50vw, 50vh) translate(-130%, -130%);\n  }\n\n  .spinner:before, .spinner:after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n  }\n  .spinner, .spinner:before, .spinner:after{\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n  }\n\n  .spinner:before {\n    animation: dot-pulse 1.5s infinite linear;\n    animation-delay: 0s;\n    left:-20px;\n  }\n\n  .spinner:after {\n    animation: dot-pulse 1.5s infinite linear;\n    animation-delay: .5s;\n    left:20px;\n  }\n\n  @keyframes dot-pulse {\n    0% {\n      box-shadow: 9999px 0 0 -5px #FFF;\n    }\n    30% {\n      box-shadow: 9999px 0 0 2px #FFF;\n    }\n    60%,\n    100% {\n      box-shadow: 9999px 0 0 -5px #FFF;\n    }\n  }\n",""])},function(n,e,t){"use strict";function o(n,e){var t,o=n[1]||"",i=n[3];if(!i)return o;if(e&&"function"==typeof btoa){var r=(t=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */");return[o].concat(i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"})).concat([r]).join("\n")}return[o].join("\n")}n.exports=function(t){var a=[];return a.toString=function(){return this.map(function(n){var e=o(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},a.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(o=0;o<n.length;o++){var r=n[o];null!=r[0]&&t[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),a.push(r))}},a}},function(n,e,o){function c(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=p[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(s(o.parts[r],e))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(s(o.parts[r],e));p[o.id]={id:o.id,refs:1,parts:a}}}}function l(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function d(n,e){var t=a(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=v[v.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),v.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(n.insertAt.before,t);t.insertBefore(e,i)}}function u(n){var e;null!==n.parentNode&&(n.parentNode.removeChild(n),0<=(e=v.indexOf(n))&&v.splice(e,1))}function h(n){var e,t=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce&&(e=o.nc)&&(n.attrs.nonce=e),f(t,n.attrs),d(n,t),t}function f(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function s(e,n){var t,o,i,r,a,s,c;if(n.transform&&e.css){if(!(t="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=t}return a=n.singleton?(o=w++,i=g=g||h(n),r=m.bind(null,i,o,!1),m.bind(null,i,o,!0)):e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=n,c=document.createElement("link"),void 0===s.attrs.type&&(s.attrs.type="text/css"),s.attrs.rel="stylesheet",f(c,s.attrs),d(s,c),r=function(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=y(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,i=c,n),function(){u(i),i.href&&URL.revokeObjectURL(i.href)}):(i=h(n),r=function(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,i),function(){u(i)}),r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}function m(n,e,t,o){var i,r,a=t?"":o.css;n.styleSheet?n.styleSheet.cssText=x(e,a):(i=document.createTextNode(a),(r=n.childNodes)[e]&&n.removeChild(r[e]),r.length?n.insertBefore(i,r[e]):n.appendChild(i))}var i,t,p={},r=function(){return void 0===t&&(t=function(){return window&&document&&document.all&&!window.atob}.apply(this,arguments)),t},a=(i={},function(n,e){if("function"==typeof n)return n();if(void 0===i[n]){var t=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}i[n]=t}return i[n]}),g=null,w=0,v=[],y=o(8);n.exports=function(n,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=r()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var s=l(n,a);return c(s,a),function(n){for(var e=[],t=0;t<s.length;t++){var o=s[t];(i=p[o.id]).refs--,e.push(i)}n&&c(l(n,a),a);for(var i,t=0;t<e.length;t++){if(0===(i=e[t]).refs){for(var r=0;r<i.parts.length;r++)i.parts[r]();delete p[i.id]}}}};var b,x=(b=[],function(n,e){return b[n]=e,b.filter(Boolean).join("\n")})},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var i=e.protocol+"//"+e.host,r=i+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var t,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(t=0===o.indexOf("//")?o:0===o.indexOf("/")?i+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(t)+")")})}},function(n,e,t){"use strict";function o(){var n=window.innerWidth,e=window.innerHeight,t=n/e;c.style.width="".concat(n,"px"),c.style.height="".concat(e,"px"),t>g.a.maxRatio?c.style.width="".concat(e*g.a.maxRatio,"px"):t<g.a.minRatio&&(c.style.height="".concat(n/g.a.minRatio,"px"));var o=c.getBoundingClientRect();c.style.marginLeft="".concat(-.5*o.width,"px"),c.style.marginTop="".concat(-.5*o.height,"px")}function i(n){var e=100*n;u.style.width="".concat(e,"%"),h.innerHTML="".concat(e<<0,"%"),g.a.fileSize&&(h.innerHTML+=" of ".concat(g.a.fileSize,"MB"));var t={percentageDone:n};PokiSDK.gameLoadingProgress(t),1<=n&&"done"!==d.className&&(d.className="done",document.getElementById("progress-comment").innerHTML="Preparing game...",document.getElementById("progress-spinner").style.display="flex",m&&clearTimeout(m))}function r(){var n=g.a.loadingComments||["Loading..."];n?(f.innerHTML=n[v],n.length<=++v&&(v=0),m=setTimeout(r,g.a.commentChangeTime)):f.innerHTML=""}function a(){var n=document.createElement("script");n.src="".concat("Build","/").concat(g.a.metadata.loader_filename),g.a.dataUrl="".concat("Build","/").concat(g.a.metadata.data_filename),g.a.frameworkUrl="".concat("Build","/").concat(g.a.metadata.framework_filename),g.a.codeUrl="".concat("Build","/").concat(g.a.metadata.code_filename),g.a.streamingAssetsUrl="StreamingAssets",n.addEventListener("load",function(){var n=document.querySelector("#game");createUnityInstance(n,g.a,i).then(function(n){window.unityGame=n,c.style.display="block",l.style.display="none",o(),PokiSDK.gameLoadingFinished(),window.removeSlideshowEventListeners(),m&&clearTimeout(m)}).catch(function(n){console.error(n)})}),document.body.appendChild(n),PokiSDK.gameLoadingStart(),g.a.fileSize&&(h.innerHTML+=" of ".concat(g.a.fileSize,"MB"),h.style.width="12vh",h.style.whiteSpace="nowrap"),r()}function s(){window.setTimeout(function(){var n=document.getElementById("spinner");n&&n.parentNode&&n.parentNode.removeChild(n)},g.a.spinnerRemoveDelay)}var c,l,d,u,h,f,m,p,g=t(0),w=t(1),v=0;(p=document.createElement("div")).setAttribute("id","spinner"),p.className="spinner",document.body.appendChild(p),window.onload=function(){c=document.getElementById("game-container"),l=document.getElementById("loader"),d=document.getElementById("progress-container"),u=document.getElementById("progress-fill"),h=document.getElementById("progress-amount"),f=document.getElementById("progress-comment"),window.addEventListener("resize",o),window.addEventListener("focus",o),window.PokiSDK.init().then(function(){window.pokiBridge?window.unityGame.SendMessage(window.pokiBridge,"ready"):window.pokiReady=!0}).catch(function(){window.pokiBridge?window.unityGame.SendMessage(window.pokiBridge,"adblock"):window.pokiAdBlock=!0,console.info("AdBlocker active")}),window.PokiSDK.setDebug(g.a&&g.a.debug);try{Object(w.a)().then(function(){s()})}catch(n){console.info("Slideshow loading error",n),s()}a()}},function(n,e,t){var o=function(r){"use strict";function a(n,e,t,o){var r,a,s,c,i=e&&e.prototype instanceof h?e:h,l=Object.create(i.prototype),d=new f(o||[]);return l._invoke=(r=n,a=t,s=d,c=b,function(n,e){if(c===S)throw new Error("Generator is already running");if(c===L){if("throw"===n)throw e;return m()}for(s.method=n,s.arg=e;;){var t=s.delegate;if(t){var o=function n(e,t){var o=e.iterator[t.method];if(o===p){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=p,n(e,t),"throw"===t.method))return k;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return k}var i=u(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,k;var r=i.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=p),t.delegate=null,k):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,k)}(t,s);if(o){if(o===k)continue;return o}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(c===b)throw c=L,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);c=S;var i=u(r,a,s);if("normal"===i.type){if(c=s.done?L:x,i.arg===k)continue;return{value:i.arg,done:s.done}}"throw"===i.type&&(c=L,s.method="throw",s.arg=i.arg)}}),l}function u(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}function h(){}function t(){}function e(){}function n(n){["next","throw","return"].forEach(function(e){n[e]=function(n){return this._invoke(e,n)}})}function s(c){var e;this._invoke=function(t,o){function n(){return new Promise(function(n,e){!function e(n,t,o,i){var r=u(c[n],c,t);if("throw"!==r.type){var a=r.arg,s=a.value;return s&&"object"==typeof s&&d.call(s,"__await")?Promise.resolve(s.__await).then(function(n){e("next",n,o,i)},function(n){e("throw",n,o,i)}):Promise.resolve(s).then(function(n){a.value=n,o(a)},function(n){return e("throw",n,o,i)})}i(r.arg)}(t,o,n,e)})}return e=e?e.then(n,n):n()}}function o(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function c(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function f(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(o,this),this.reset(!0)}function i(e){if(e){var n=e[w];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,o=function n(){for(;++t<e.length;)if(d.call(e,t))return n.value=e[t],n.done=!1,n;return n.value=p,n.done=!0,n};return o.next=o}}return{next:m}}function m(){return{value:p,done:!0}}var p,l=Object.prototype,d=l.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},w=g.iterator||"@@iterator",v=g.asyncIterator||"@@asyncIterator",y=g.toStringTag||"@@toStringTag";r.wrap=a;var b="suspendedStart",x="suspendedYield",S="executing",L="completed",k={},E={};E[w]=function(){return this};var I=Object.getPrototypeOf,T=I&&I(I(i([])));T&&T!==l&&d.call(T,w)&&(E=T);var C=e.prototype=h.prototype=Object.create(E);return(t.prototype=C.constructor=e).constructor=t,e[y]=t.displayName="GeneratorFunction",r.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===t||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,e):(n.__proto__=e,y in n||(n[y]="GeneratorFunction")),n.prototype=Object.create(C),n},r.awrap=function(n){return{__await:n}},n(s.prototype),s.prototype[v]=function(){return this},r.AsyncIterator=s,r.async=function(n,e,t,o){var i=new s(a(n,e,t,o));return r.isGeneratorFunction(e)?i:i.next().then(function(n){return n.done?n.value:i.next()})},n(C),C[y]="Generator",C[w]=function(){return this},C.toString=function(){return"[object Generator]"},r.keys=function(t){var o=[];for(var n in t)o.push(n);return o.reverse(),function n(){for(;o.length;){var e=o.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},r.values=i,f.prototype={constructor:f,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=p,this.done=!1,this.delegate=null,this.method="next",this.arg=p,this.tryEntries.forEach(c),!n)for(var e in this)"t"===e.charAt(0)&&d.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=p)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function n(n,e){return r.type="throw",r.arg=t,o.next=n,e&&(o.method="next",o.arg=p),!!e}if(this.done)throw t;for(var o=this,e=this.tryEntries.length-1;0<=e;--e){var i=this.tryEntries[e],r=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=d.call(i,"catchLoc"),s=d.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&d.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var r=i?i.completion:{};return r.type=n,r.arg=e,i?(this.method="next",this.next=i.finallyLoc,k):this.complete(r)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),k},finish:function(n){for(var e=this.tryEntries.length-1;0<=e;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),c(t),k}},catch:function(n){for(var e=this.tryEntries.length-1;0<=e;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var o,i=t.completion;return"throw"===i.type&&(o=i.arg,c(t)),o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,t){return this.delegate={iterator:i(n),resultName:e,nextLoc:t},"next"===this.method&&(this.arg=p),k}},r}(n.exports);try{regeneratorRuntime=o}catch(n){Function("r","regeneratorRuntime = r")(o)}},function(n,e){window.initPokiBridge=function(e){window.unityGame?(window.pokiReady||window.pokiAdBlock?window.pokiReady?window.unityGame.SendMessage(e,"ready"):window.pokiAdBlock&&window.unityGame.SendMessage(e,"adblock"):window.pokiBridge=e,window.commercialBreak=function(){PokiSDK.commercialBreak().then(function(){window.unityGame.SendMessage(e,"commercialBreakCompleted")})},window.rewardedBreak=function(){PokiSDK.rewardedBreak().then(function(n){window.unityGame.SendMessage(e,"rewardedBreakCompleted",n.toString())})},window.shareableURL=function(n){PokiSDK.shareableURL(n).then(function(n){window.unityGame.SendMessage(e,"shareableURLResolved",n)}).catch(function(){window.unityGame.SendMessage(e,"shareableURLRejected")})}):setTimeout(function(){window.initPokiBridge(e)},100)}}])