(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(9),n(1)),i=(n(10),n(11),function(e){var t=e.searchRobot;return o.a.createElement("nav",null,o.a.createElement("form",{className:"searchBox"},o.a.createElement("input",{type:"search",placeholder:"Search robot by name...",onChange:t})))}),s=(n(12),function(e){var t=e.robot;return o.a.createElement("div",{className:"robot"},o.a.createElement("img",{src:"https://robohash.org/".concat(t.id,"?size=200x200"),alt:"robot"}),o.a.createElement("h3",null,t.name),o.a.createElement("p",null,t.email))}),u=(n(13),function(e){var t=e.newRobotList;return t.length?o.a.createElement("main",{className:"robotList"},t.map((function(e){return o.a.createElement(s,{robot:e,key:e.id})}))):o.a.createElement("h3",null,"Loading...")}),m=(n(14),function(e){var t=e.children;return o.a.createElement("div",{className:"scroll"},t)});var h=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(l.a)(c,2),h=s[0],f=s[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){r(e),f(e)}))}),[]),o.a.createElement(a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h1",null,"RoboFriends")),o.a.createElement(i,{searchRobot:function(e){f(n.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})))}}),o.a.createElement(m,null,o.a.createElement(u,{newRobotList:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.1e73ed4e.chunk.js.map