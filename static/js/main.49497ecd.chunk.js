(window.webpackJsonptetristsx=window.webpackJsonptetristsx||[]).push([[0],{14:function(t,n,e){t.exports=e(25)},19:function(t,n,e){},25:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),a=e(8),c=e.n(a),i=(e(19),e(1)),u=e(2),l=e(3);function f(){var t=Object(u.a)(["\n\twidth: auto;\n\tbackground: rgba(",",0.8);\n\tborder:",";\n\tborder-bottom-color: rgba(",",0.1);\n\tborder-top-color: rgba(",",1);\n\tborder-right-color: rgba(",",1);\n\tborder-left-color: rgba(",",0.3);\n"]);return f=function(){return t},t}var s=l.a.div(f(),function(t){return t.color},function(t){return 0===t.type?"0px solid":"4px solid"},function(t){return t.color},function(t){return t.color},function(t){return t.color},function(t){return t.color}),d={0:{shape:[[0]],color:"0,0,0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80,227,230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36,95,223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223,173,36"},O:{shape:[["O","O"],["O","O"]],color:"223,217,36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48,211,56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132,61,198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227,78,78"}},p=function(){var t="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return d[t]},b=o.a.memo(function(t){var n=t.type;return o.a.createElement(s,{type:n,color:d[n].color})});function m(){var t=Object(u.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: repeat(\n\t",",\n\tcalc(25vw/",")\n\t);\n\tgrid-template-columns: repeat(\n\t",", 1fr\n\t);\n\tgrid-gap: 1px;\n\tborder: 2px solid #333;\n\twidth: 100%;\n\tmax-width: 25vw;\n\tbackground: #111;\n"]);return m=function(){return t},t}var v=l.a.div(m(),function(t){return t.height},function(t){return t.width},function(t){return t.width}),h=function(t){var n=t.stage;return o.a.createElement(v,{width:n[0].length,height:n.length},n.map(function(t){return t.map(function(t,n){return o.a.createElement(b,{type:t[0],key:n})})}))};function O(){var t=Object(u.a)(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 0 20px 0;\n\tpadding: 20px;\n\tborder: 4px solid #333;\n\tmin-height: 30px;\n\twidth:100%;\n\tborder-radius: 20px;\n\tcolor: ",';\n\tbackground: #000;\n\tfont-family: Pixel,Arial,"Helvetica Neue",sans-serif;\n\tfont-size: 0.8 rem;\n']);return O=function(){return t},t}var x=l.a.div(O(),function(t){return t.gameover?"red":"#999"}),g=function(t){t.gameover;var n=t.text;return o.a.createElement(x,null,n)};function y(){var t=Object(u.a)(["\n\tbox-sizing: border-box;\n\tmax-width: 0 0 20px 0;\n\tpadding: 30px;\n\twidth: 100%;\n\tborder-radius: 20px;\n\tborder: none;\n\tcolor: white;\n\tbackground: #333;\n\tfont-family: Pixel,Arial;\n\tfont-size: 1rem;\n\toutline:none;\n\tcursor: pointer;\n"]);return y=function(){return t},t}var j=l.a.button(y()),w=function(t){var n=t.callback;return o.a.createElement(j,{onClick:n},"Start Game")};function E(){var t=Object(u.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: available;\n  aside {\n    width: 100%;\n    max-width: 150px;\n    display: block;\n    padding: 0 20px;\n  }\n"]);return E=function(){return t},t}function S(){var t=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n"]);return S=function(){return t},t}var k=l.a.div(S()),I=l.a.div(E()),J=e(11),P=function(){return Array.from(Array(20),function(){return new Array(12).fill([0,"clear"])})},L=function(t,n,e){for(var r=e.x,o=e.y,a=0;a<t.tetromino.length;a++)for(var c=0;c<t.tetromino[a].length;c++)if(0!==t.tetromino[a][c]&&(!n[a+t.pos.y+o]||!n[a+t.pos.y+o][c+t.pos.x+r]||"clear"!==n[a+t.pos.y+o][c+t.pos.x+r][1]))return!0};function A(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}var T=function(){var t=Object(r.useState)({pos:{x:0,y:0},tetromino:d[0].shape,collided:!1}),n=Object(i.a)(t,2),e=n[0],o=n[1],a=function(t,n){var e=t.map(function(n,e){return t.map(function(t){return t[e]})});return n>0?e.map(function(t){return t.reverse()}):e.reverse()},c=Object(r.useCallback)(function(){o({pos:{x:4,y:0},tetromino:p().shape,collided:!1})},[]);return[e,function(t){var n=t.x,e=t.y,r=t.collided;o(function(t){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?A(e,!0).forEach(function(n){Object(J.a)(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):A(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}({},t,{pos:{x:t.pos.x+=n,y:t.pos.y+=e},collided:r})})},c,function(t,n){var r=JSON.parse(JSON.stringify(e));r.tetromino=a(r.tetromino,n);for(var c=r.pos.x,i=1;L(r,t,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return a(r.tetromino,-n),void(r.pos.x=c);o(r)}]},Z=function(t,n){var e=Object(r.useState)(P()),o=Object(i.a)(e,2),a=o[0],c=o[1],u=Object(r.useState)(0),l=Object(i.a)(u,2),f=l[0],s=l[1];return Object(r.useEffect)(function(){s(0);var e=function(e){var r=e.map(function(t){return t.map(function(t){return"clear"===t[1]?[0,"clear"]:t})});return t.tetromino.forEach(function(n,e){n.forEach(function(n,o){0!==n&&(r[e+t.pos.y][o+t.pos.x]=[n,"".concat(t.collided?"merged":"clear")])})}),t.collided?(n(),function(t){return t.reduce(function(n,e){return-1===e.findIndex(function(t){return 0===t[0]})?(s(function(t){return t+1}),n.unshift(new Array(t[0].length).fill([0,"clear"])),n):(n.push(e),n)},[])}(r)):r};c(function(t){return e(t)})},[t,n]),[a,c,f]},C=o.a.memo(function(){var t=Object(r.useState)(null),n=Object(i.a)(t,2),e=n[0],a=n[1],c=Object(r.useState)(!1),u=Object(i.a)(c,2),l=u[0],f=u[1],s=T(),d=Object(i.a)(s,4),p=d[0],b=d[1],m=d[2],v=d[3],O=Z(p,m),x=Object(i.a)(O,3),y=x[0],j=x[1],E=function(t){var n=Object(r.useState)(0),e=Object(i.a)(n,2),o=e[0],a=e[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],s=Object(r.useState)(0),d=Object(i.a)(s,2),p=d[0],b=d[1],m=[40,100,300,1200],v=Object(r.useCallback)(function(){t>0&&(a(function(n){return n+m[t-1]*(p+1)}),f(function(n){return n+t}))},[p,m,t]);return Object(r.useEffect)(function(){v()},[v,t,o]),[o,a,l,f,p,b]}(x[2]),S=Object(i.a)(E,6),J=S[0],A=S[1],C=S[2],D=S[3],z=S[4],N=S[5],G=function(t){L(p,y,{x:t,y:0})||b({x:t,y:0})},B=function(){C>10*(z+1)&&(N(function(t){return t+1}),a(1e3/(z+1)+200)),L(p,y,{x:0,y:1})?(p.pos.y<1&&(console.log("Game Over"),f(!0),a(null)),b({x:0,y:0,collided:!0})):b({x:0,y:1,collided:!1})},K=function(t){var n=t.keyCode;l||(37===n?G(-1):39===n?G(1):40===n?(a(null),B()):38===n&&v(y,1))};return function(t,n){var e=Object(r.useRef)();Object(r.useEffect)(function(){e.current=t},[t]),Object(r.useEffect)(function(){if(null!==n){var t=setInterval(function(){e.current()},n);return function(){clearInterval(t)}}},[n])}(function(){B()},e),o.a.createElement(k,{role:"button",tableIndex:"0",onKeyDown:function(t){return K(t)},onKeyUp:function(t){var n=t.keyCode;l||40===n&&a(1e3/(z+1)+200)}},o.a.createElement(I,null,o.a.createElement(h,{stage:y}),o.a.createElement("aside",null,l?o.a.createElement(g,{gameover:l,text:"Game Over"}):o.a.createElement("div",null,o.a.createElement(g,{text:"Score: ".concat(J)}),o.a.createElement(g,{text:"Rows: ".concat(C)}),o.a.createElement(g,{text:"Level: ".concat(z)})),o.a.createElement(w,{callback:function(){j(P()),a(1e3),m(),f(!1),A(0),D(0),N(0)}}))))}),D=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.49497ecd.chunk.js.map