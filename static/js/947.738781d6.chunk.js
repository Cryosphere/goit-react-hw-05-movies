"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{947:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(439),i=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="?api_key=005a1a4b58d0452d1baa0b4ebe777e33",o=function(){var e=(0,i.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return{id:e.id,title:e.title}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=n(791),f=n(689),l=n(87),v=n(184),p=function(e){var t=e.movies,n=(0,f.TH)();return(0,v.jsx)("div",{children:(0,v.jsx)("ul",{children:t.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(l.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})})},h=function(){var e=function(){var e=(0,d.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,d.useEffect)((function(){o().then((function(e){return i(e)}))}),[]),{trendingMovies:n}}(),t=e.trendingMovies;return(0,v.jsx)("div",{children:(0,v.jsx)(p,{movies:t})})}}}]);
//# sourceMappingURL=947.738781d6.chunk.js.map