(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),s=n(11),i=n.n(s),r=(n(28),n(15)),a=n(17),u=(n(29),n(5)),d=function(e){var t=e.children;return Object(u.jsxs)("div",{className:"TodoTemplate",children:[Object(u.jsx)("div",{className:"app-title",children:"\uc77c\uc815 \uad00\ub9ac"}),Object(u.jsx)("div",{className:"content",children:t})]})},l=n(13),j=(n(31),function(e){var t=e.onInsert,n=Object(c.useState)(""),o=Object(r.a)(n,2),s=o[0],i=o[1],a=Object(c.useCallback)((function(e){i(e.target.value)}),[]),d=Object(c.useCallback)((function(e){t(s),i(""),e.preventDefault()}),[t,s]);return Object(u.jsxs)("form",{className:"TodoInsert",onSubmit:d,children:[Object(u.jsx)("input",{value:s,onChange:a,placeholder:"\ud560 \uc77c \uc785\ub825"}),Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)(l.a,{})})]})}),b=n(23),O=n(22),h=n.n(O),f=(n(44),function(e){var t=e.todo,n=e.onRemove,c=e.onToggle,o=e.style,s=t.id,i=t.text,r=t.checked;return Object(u.jsx)("div",{className:"TodoListItem-virtualized",style:o,children:Object(u.jsxs)("div",{className:"TodoListItem",children:[Object(u.jsxs)("div",{className:h()("checkbox",{checked:r}),onClick:function(){return c(s)},children:[r?Object(u.jsx)(l.b,{}):Object(u.jsx)(l.c,{}),Object(u.jsx)("div",{className:"text",children:i})]}),Object(u.jsx)("div",{className:"remove",onClick:function(){return n(s)},children:Object(u.jsx)(l.d,{})})]})})}),m=o.a.memo(f),v=(n(45),function(e){var t=e.todos,n=e.onRemove,o=e.onToggle,s=Object(c.useCallback)((function(e){var c=e.index,s=e.key,i=e.style,r=t[c];return Object(u.jsx)(m,{todo:r,onRemove:n,onToggle:o,style:i},s)}),[n,o,t]);return Object(u.jsx)(b.a,{className:"TodoList",width:512,height:513,rowCount:t.length,rowHeight:57,rowRenderer:s,list:t,style:{outline:"none"}})}),x=o.a.memo(v);function p(){for(var e=[],t=1;t<=2500;t++)e.push({id:t,text:"\ud560 \uc77c ".concat(t),checked:!1});return e}function g(e,t){switch(t.type){case"INSERT":return e.concat(t.todo);case"REMOVE":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(a.a)(Object(a.a)({},e),{},{checked:!e.checked}):e}));default:return e}}var k=function(){var e=Object(c.useReducer)(g,void 0,p),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(c.useRef)(2501),i=Object(c.useCallback)((function(e){o({type:"INSERT",todo:{id:s,text:e,checked:!1}}),s.current=s.current+1}),[]),a=Object(c.useCallback)((function(e){o({type:"REMOVE",id:e})}),[]),l=Object(c.useCallback)((function(e){o({type:"TOGGLE",id:e})}),[]);return Object(u.jsxs)(d,{children:[Object(u.jsx)(j,{onInsert:i}),Object(u.jsx)(x,{todos:n,onRemove:a,onToggle:l})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),T()}},[[46,1,2]]]);
//# sourceMappingURL=main.ce9140ad.chunk.js.map