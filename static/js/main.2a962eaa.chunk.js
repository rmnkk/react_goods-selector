(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=n(3),i=n(4),d=n(7),s=n(6),u=(n(13),n(14),n(5)),h=n.n(u),m=function(e){var t=e.handler,n=e.good,a=e.heading;return r.a.createElement("button",{onClick:function(){t(n)},type:"button",className:h()("button",{button_active:n===a})},n)},g=function(e){var t=e.good,n=e.handler,a=e.heading;return r.a.createElement("h3",null,r.a.createElement(m,{good:t,handler:n,heading:a}))},p=function(e){var t=e.goods,n=e.handler,a=e.heading;return r.a.createElement("div",{className:"goods"},t.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement(g,{handler:n,good:e,heading:a}))})))},v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={heading:"-"},e.handler=function(t){e.setState({heading:t})},e.remove=function(){e.setState({heading:"-"})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.heading;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__header"},r.a.createElement("h1",null,"Selected good: ".concat(e)),r.a.createElement("button",{type:"button",onClick:this.remove,className:"App__button"},"X")),r.a.createElement(p,{handler:this.handler,goods:v,heading:e}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2a962eaa.chunk.js.map