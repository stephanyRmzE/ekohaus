(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{3394:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/success",function(){return n(5536)}])},5536:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(8598),r=n(2684),o=n(2691),i=n(262),s=n(3233),c={};!function e(t,n,a,r){var o=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function i(){}function s(e){var a=n.exports.Promise,r=void 0!==a?a:t.Promise;return"function"===typeof r?new r(e):(e(i,i),null)}var c,l=function(){var e,t,n=Math.floor(1e3/60),a={},r=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(e=function(e){var t=Math.random();return a[t]=requestAnimationFrame((function o(i){r===i||r+n-1<i?(r=i,delete a[t],e()):a[t]=requestAnimationFrame(o)})),t},t=function(e){a[e]&&cancelAnimationFrame(a[e])}):(e=function(e){return setTimeout(e,n)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),u=function(){var t,n,r={};return function(){if(t)return t;if(!a&&o){var i=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{t=new Worker(URL.createObjectURL(new Blob([i])))}catch(c){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",c),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(a,o,i){if(n)return t(a,null),n;var c=Math.random().toString(36).slice(2);return n=s((function(o){function s(t){t.data.callback===c&&(delete r[c],e.removeEventListener("message",s),n=null,i(),o())}e.addEventListener("message",s),t(a,c),r[c]=s.bind(null,{data:{callback:c}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),r)r[t](),delete r[t]}}(t)}return t}}(),d={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function f(e,t,n){return function(e,t){return t?t(e):e}(e&&(null!==(a=e[t])&&void 0!==a)?e[t]:d[t],n);var a}function h(e){return e<0?0:Math.floor(e)}function m(e){return parseInt(e,16)}function g(e){return e.map(p)}function p(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:m(t.substring(0,2)),g:m(t.substring(2,4)),b:m(t.substring(4,6))}}function b(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function v(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function y(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar}}function M(e,t,n,o,i){var c,u,d=t.slice(),f=e.getContext("2d"),h=s((function(t){function s(){c=u=null,f.clearRect(0,0,o.width,o.height),i(),t()}c=l.frame((function t(){!a||o.width===r.width&&o.height===r.height||(o.width=e.width=r.width,o.height=e.height=r.height),o.width||o.height||(n(e),o.width=e.width,o.height=e.height),f.clearRect(0,0,o.width,o.height),d=d.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,a=t.x+t.random*t.tiltCos,r=t.y+t.random*t.tiltSin,o=t.wobbleX+t.random*t.tiltCos,i=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(o-a)*t.ovalScalar,Math.abs(i-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,a,r,o,i,s,c){e.save(),e.translate(t,n),e.rotate(o),e.scale(a,r),e.arc(0,0,1,i,s,c),e.restore()}(e,t.x,t.y,Math.abs(o-a)*t.ovalScalar,Math.abs(i-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var s=Math.PI/2*3,c=4*t.scalar,l=8*t.scalar,u=t.x,d=t.y,f=5,h=Math.PI/f;f--;)u=t.x+Math.cos(s)*l,d=t.y+Math.sin(s)*l,e.lineTo(u,d),s+=h,u=t.x+Math.cos(s)*c,d=t.y+Math.sin(s)*c,e.lineTo(u,d),s+=h;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(r)),e.lineTo(Math.floor(o),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}(f,e)})),d.length?c=l.frame(t):s()})),u=s}));return{addFettis:function(e){return d=d.concat(e),h},canvas:e,promise:h,reset:function(){c&&l.cancel(c),u&&u()}}}function w(e,n){var a,r=!e,i=!!f(n||{},"resize"),c=f(n,"disableForReducedMotion",Boolean),l=o&&!!f(n||{},"useWorker")?u():null,d=r?b:v,m=!(!e||!l)&&!!e.__confetti_initialized,p="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function w(t,n,r){for(var o,i,s=f(t,"particleCount",h),c=f(t,"angle",Number),l=f(t,"spread",Number),u=f(t,"startVelocity",Number),m=f(t,"decay",Number),p=f(t,"gravity",Number),b=f(t,"drift",Number),v=f(t,"colors",g),w=f(t,"ticks",Number),x=f(t,"shapes"),C=f(t,"scalar"),T=function(e){var t=f(e,"origin",Object);return t.x=f(t,"x",Number),t.y=f(t,"y",Number),t}(t),E=s,N=[],k=e.width*T.x,I=e.height*T.y;E--;)N.push(y({x:k,y:I,angle:c,spread:l,startVelocity:u,color:v[E%v.length],shape:x[(o=0,i=x.length,Math.floor(Math.random()*(i-o))+o)],ticks:w,decay:m,gravity:p,drift:b,scalar:C}));return a?a.addFettis(N):(a=M(e,N,d,n,r)).promise}function x(n){var o=c||f(n,"disableForReducedMotion",Boolean),u=f(n,"zIndex",Number);if(o&&p)return s((function(e){e()}));r&&a?e=a.canvas:r&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(u),document.body.appendChild(e)),i&&!m&&d(e);var h={width:e.width,height:e.height};function g(){if(l){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};return d(t),void l.postMessage({resize:{width:t.width,height:t.height}})}h.width=h.height=null}function b(){a=null,i&&t.removeEventListener("resize",g),r&&e&&(document.body.removeChild(e),e=null,m=!1)}return l&&!m&&l.init(e),m=!0,l&&(e.__confetti_initialized=!0),i&&t.addEventListener("resize",g,!1),l?l.fire(n,h,b):w(n,h,b)}return x.reset=function(){l&&l.reset(),a&&a.reset()},x}function x(){return c||(c=w(null,{useWorker:!0,resize:!0})),c}n.exports=function(){return x().apply(this,arguments)},n.exports.reset=function(){x().reset()},n.exports.create=w}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),c,!1);var l=c.exports,u=(c.exports.create,n(4376)),d=function(){var e=(0,s.F)(),t=e.setCartItems,n=e.setTotalPrice,c=e.setTotalQuantities,d=(0,r.useState)([]),f=(d[0],d[1]),h=(0,u.useRouter)().query.session_id;return(0,r.useEffect)((function(){fetch("/api/checkout_sessions/".concat(h)).then((function(e){return e.json()})).then((function(e){return f(e)})),localStorage.clear(),t([]),n(0),c(0),function(){var e=function(e,a){l(Object.assign({},n,a,{particleCount:Math.floor(t*e)}))},t=200,n={origin:{y:.7}};e(.25,{spread:26,startVelocity:55}),e(.2,{spread:60}),e(.35,{spread:100,decay:.91,scalar:.8}),e(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),e(.1,{spread:120,startVelocity:45})}()}),[h,t,n,c]),(0,a.jsx)("div",{className:"success-wrapper",children:(0,a.jsxs)("div",{className:"success",children:[(0,a.jsx)("p",{className:"icon",children:(0,a.jsx)(i.Vno,{})}),(0,a.jsx)("h2",{children:"Gracias por tu orden!"}),(0,a.jsx)("p",{className:"email-msg",children:"El recibo a sido enviado a su correo electronico"}),(0,a.jsxs)("p",{className:"description",children:["Si tiene alguna duda, por favor mande un correo a",(0,a.jsx)("a",{href:"mailto:order@example.com",className:"email",children:"order@example.com"})]}),(0,a.jsx)(o.default,{href:"/",children:(0,a.jsx)("button",{type:"button",width:"300px",className:"btn",children:"Continua comprando"})})]})})}}},function(e){e.O(0,[13,774,888,179],(function(){return t=3394,e(e.s=t);var t}));var t=e.O();_N_E=t}]);