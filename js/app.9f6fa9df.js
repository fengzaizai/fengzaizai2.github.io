(function(t){function e(e){for(var i,s,a=e[0],l=e[1],c=e[2],f=0,p=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0212":function(t,e,n){},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"0d8c":function(t,e,n){t.exports=n.p+"media/追忆冰袋辣条 - Story Of A Lonely Man.0534bd38.mp3"},"0eda":function(t,e,n){"use strict";var i=n("56c5"),r=n.n(i);r.a},"38ff":function(t,e,n){"use strict";var i=n("947c"),r=n.n(i);r.a},"4b13":function(t,e,n){"use strict";var i=n("7dfc"),r=n.n(i);r.a},5398:function(t,e,n){"use strict";var i=n("0212"),r=n.n(i);r.a},"56c5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("foucs",{attrs:{currentIndex:t.currentIndex},on:{itemClick:t.itemClick}}),n("div",{ref:"list",staticClass:"list"},[n("frist-page"),n("two-page"),n("three-page"),n("four-page")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"frist-page"}},[i("div",{staticClass:"myhead"},[i("img",{attrs:{src:n("76b7"),alt:""}})])])}],l={name:"FristPage"},c=l,u=(n("0eda"),n("2877")),f=Object(u["a"])(c,s,a,!1,null,"4c40d4bd",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"two-page"}})},h=[],y={name:"TwoPage"},m=y,v=(n("38ff"),Object(u["a"])(m,d,h,!1,null,"c2f79f3a",null)),g=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"three-page"}})},S=[],w={name:"ThreePage"},x=w,I=(n("e14e"),Object(u["a"])(x,b,S,!1,null,"78824c79",null)),P=I.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"four-page"}})},k=[],O={name:"FourPage"},j=O,E=(n("4b13"),Object(u["a"])(j,_,k,!1,null,"6a7fb14f",null)),C=E.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"foucs"},[i("ul",{staticClass:"foucs-list"},t._l(t.pageN,(function(e){return i("li",{key:e,class:{active:e===t.currentIndex},on:{click:function(n){return t.itemClick(e)}}},[i("span")])})),0),i("div",{ref:"mplay",staticClass:"mplay",on:{click:t.mplaySwitch}},[i("audio",{ref:"audio",attrs:{loop:"",autoplay:""},on:{load:t.audioLoad}},[i("source",{attrs:{src:n("0d8c"),type:"audio/mpeg"}})]),i("div",{ref:"icon",staticClass:"iconplay"},[t.isPlay?i("span",{staticClass:"iconfont play"},[t._v("")]):i("span",{staticClass:"iconfont"},[t._v("")])])])])},T=[],A=(n("a9e3"),{name:"Focus",data:function(){return{mplayStyle:{},Angle:0,timeId:{},isPlay:!0,audioEl:{},audioStyle:{},iconPlayStyle:{},pageN:4}},props:{currentIndex:{type:Number}},methods:{mplay:function(){var t=this;this.timeId=setInterval((function(){t.Angle++,t.Angle>=360&&(t.Angle=0),t.setTransform(t.Angle)}),30)},handleDom:function(){var t=this.$refs.mplay,e=this.$refs.icon;this.mplayStyle=t.style,this.audioEl=this.$refs.audio,this.audioStyle=this.audioEl.style,this.iconPlayStyle=e.style},setTransform:function(t){this.mplayStyle.transform="rotate(".concat(t,"deg)"),this.mplayStyle["-webkit-transform"]="rotate(".concat(t,"deg)"),this.mplayStyle["-ms-transform"]="rotate(".concat(t,"deg)"),this.iconPlayStyle.transform="rotate(".concat(-t,"deg)"),this.iconPlayStyle["-webkit-transform"]="rotate(".concat(-t,"deg)"),this.iconPlayStyle["-ms-transform"]="rotate(".concat(-t,"deg)")},mplaySwitch:function(){this.isPlay?(this.isPlay=!this.isPlay,clearInterval(this.timeId),this.audioEl.pause()):(this.isPlay=!this.isPlay,this.mplay(),this.audioEl.play())},audioLoad:function(){console.log("lll")},itemClick:function(t){this.$emit("itemClick",t)}},mounted:function(){this.mplay(),this.handleDom()}}),D=A,F=(n("5398"),Object(u["a"])(D,$,T,!1,null,"434e48b7",null)),H=F.exports,M={name:"App",data:function(){return{listEl:{},listStyle:{},currentIndex:1,windomH:0}},components:{FristPage:p,TwoPage:g,ThreePage:P,FourPage:C,Foucs:H},methods:{keyDom:function(t){var e=t||event;this.upDown(e.which)},upDown:function(t){40===t?4!==this.currentIndex&&(this.currentIndex++,this.downmove(this.currentIndex)):38===t&&1!==this.currentIndex&&(this.currentIndex--,this.upmove(this.currentIndex))},downmove:function(t){this.move(30,-(t-1)*this.windomH)},upmove:function(t){this.move(30,-(t-1)*this.windomH)},move:function(t,e){var n=this;parseInt(this.listStyle.top);if(parseInt(this.listStyle.top)>e)var i=setInterval((function(){n.setTop(parseInt(n.listStyle.top)-t),parseInt(n.listStyle.top)<=e&&(n.listStyle.top=e+"px",clearInterval(i))}),10);else if(parseInt(this.listStyle.top)<e)var r=setInterval((function(){n.setTop(parseInt(n.listStyle.top)+t),parseInt(n.listStyle.top)>=e&&(n.listStyle.top=e+"px",clearInterval(r))}),10)},setTop:function(t){this.listStyle.top="".concat(t,"px"),this.listStyle["-webkit-top"]="".concat(t,"px"),this.listStyle["-ms-top"]="(".concat(t,"px")},itemClick:function(t){this.currentIndex=t,this.move(30,-(t-1)*this.windomH)}},mounted:function(){this.listEl=this.$refs.list,this.listStyle=this.listEl.style,this.listStyle.top=0,document.onkeydown=this.keyDom,this.windomH=window.innerHeight}},L=M,N=(n("034f"),Object(u["a"])(L,r,o,!1,null,null,null)),J=N.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(J)}}).$mount("#app")},"76b7":function(t,e,n){t.exports=n.p+"img/userphoto.7d5bac2a.png"},"7dfc":function(t,e,n){},"85ec":function(t,e,n){},"947c":function(t,e,n){},df72:function(t,e,n){},e14e:function(t,e,n){"use strict";var i=n("df72"),r=n.n(i);r.a}});
//# sourceMappingURL=app.9f6fa9df.js.map