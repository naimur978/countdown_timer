(this.webpackJsonpcountdown_timer=this.webpackJsonpcountdown_timer||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(4),s=n.n(i),o=n(2),u=(n(11),n.p+"static/media/theme.1216cdff.svg"),j=n(5);var l=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(0),l=Object(o.a)(s,2),b=l[0],d=l[1],h=Object(r.useState)(""),O=Object(o.a)(h,2),m=O[0],x=O[1],v=Object(r.useState)(""),f=Object(o.a)(v,2),p=f[0],g=f[1];return Object(r.useEffect)((function(){if(!(b<=0)&&a){var e=setInterval((function(){d(Number(b-1))}),1e3);return function(){return clearInterval(e)}}}),[b,a]),Object(c.jsx)("div",{className:"App",children:a?Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("img",{src:u,alt:"theme"}),Object(c.jsx)("h2",{children:m}),Object(c.jsx)("h3",{children:p}),Object(c.jsx)(j.CountdownCircleTimer,{time:b,isPlaying:!0,duration:b,colors:[["#004777",.33],["#F7B801",.33],["#A30000"]],onComplete:function(){return[!0,1e3]},children:function(e){var t=e.remainingTime;if(t>60){var n=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60;return"".concat(n,":").concat(r,":").concat(a)}return 0===t?Object(c.jsx)("div",{className:"timer",children:"Too lale..."}):Object(c.jsxs)("div",{className:"timer",children:[Object(c.jsx)("div",{className:"text",children:"Remaining"}),Object(c.jsx)("div",{className:"value",children:t}),Object(c.jsx)("div",{className:"text",children:"seconds"})]})}}),Object(c.jsx)("h4",{children:"Starting soon..."})]}):Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(60*b),i(!0)},children:[Object(c.jsx)("input",{type:"text",value:b,onChange:function(e){return d(Number(e.target.value))}}),Object(c.jsx)("input",{type:"text",placeholder:"Title",value:m,onChange:function(e){return x(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"Details",value:p,onChange:function(e){return g(e.target.value)}}),Object(c.jsx)("button",{children:"Start"})]})})};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7ea03cc2.chunk.js.map