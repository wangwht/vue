webpackJsonp([1],{Ab7F:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"slide-fade"}},[i("router-view")],1)],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},n,!1,function(t){e("Ab7F")},null,null).exports,o=e("/ocq"),c=(e("v2ns"),e("T9kX"),e("gsqX")),r=e.n(c);function d(){var t,i,e=window.navigator.userAgent.match(/iphone/i),s=screen.width>0&&(window.innerWidth>=screen.width||0==window.innerWidth)?screen.width:window.innerWidth;t=window.devicePixelRatio?window.devicePixelRatio:e?s>818?3:s>480?2:1:1,e&&(s=screen.width),i=s>1080?100:s/7.5,window.screenWidth_=s,document.getElementsByTagName("html")[0].dataset.dpr=t,document.getElementsByTagName("html")[0].style.fontSize=i+"px"}var l={name:"HelloWorld",data:function(){return{items:[{msg:"aaaa"},{msg:"bbbb"}],icons:[{name:"精品手机",img:"http://file.dafy.com.cn/OSS/20180619/ac7784feeed64d2e8c9f2d36c7e23e9a.png",url:"/GoodsList/123"},{name:"家用电器",img:"http://file.dafy.com.cn/OSS/20180619/9640182909c04f72a840d83217d1f7f9.png",url:"/GoodsList/123"},{name:"电脑平板",img:"http://file.dafy.com.cn/OSS/20180619/a7678b590cd94826bcdee442a6e96b37.png",url:"/GoodsList/123"},{name:"运动户外",img:"http://file.dafy.com.cn/OSS/20180619/f39b94324f614721a80582041a98150a.png",url:"/GoodsList/123"}]}},mounted:function(){var t;new r.a(".swiper-container",{loop:!0,autoplay:5e3});t=window.navigator.userAgent.match(/iphone/i),navigator.appVersion.substring(navigator.appVersion.length-6)<537&&!t?document.ready=function(){d()}:d()},methods:{goodsDetail:function(){console.log(event.target),this.$router.push({path:"/GoodsList"})},gotoList:function(t){console.log(t),this.$router.push({path:t})}}},h={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"apps"},[t._m(0),t._v(" "),e("div",{staticClass:"blastListImg clearfix"},[e("ul",{attrs:{id:"specialPage"}},t._l(t.icons,function(i){return e("li",{attrs:{url:i.url},on:{click:function(e){t.gotoList(i.url)}}},[e("span",{staticClass:"iconImg"},[e("img",{staticClass:"icon_bg",attrs:{src:i.img}})]),t._v(" "),e("div",{staticClass:"specialTitle"},[t._v(t._s(i.name))])])}))]),t._v(" "),e("div",{staticClass:"mallgoodsList"},[e("ul",t._l(t.items,function(i){return e("li",{on:{click:function(i){t.goodsDetail(this)}}},[t._v(t._s(i.msg))])}))])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},[i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"http://file.dafy.com.cn/OSS/20180726/a97bb227deb248218847d6be4ee341a5.jpg"}})]),this._v(" "),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"http://file.dafy.com.cn/OSS/20180718/c15225242d1441e5a9cdfc32cc20fc8d.jpg"}})]),this._v(" "),i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:"http://file.dafy.com.cn/OSS/20180726/a97bb227deb248218847d6be4ee341a5.jpg"}})])]),this._v(" "),i("div",{staticClass:"swiper-pagination"}),this._v(" "),i("div",{staticClass:"swiper-button-prev"}),this._v(" "),i("div",{staticClass:"swiper-button-next"})])}]};var u=e("VU/8")(l,h,!1,function(t){e("kh9h")},"data-v-543094e4",null).exports,p={data:function(){return{which_to_show:"first"}},mounted:function(){console.log(this.$route.params)},methods:{toShow:function(){var t=["first","second","third"],i=t.indexOf(this.which_to_show);this.which_to_show=i<2?t[i+1]:t[0],console.log(this.which_to_show)}}},f={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"goodslist"}},[i("h1",[this._v("路由页面")]),this._v(" "),i("button",{on:{click:this.toShow}},[this._v("路由切换")])])},staticRenderFns:[]},m=e("VU/8")(p,f,!1,null,null,null).exports;s.a.use(o.a);var v=new o.a({routes:[{path:"/GoodsList/:id",name:"GoodsList",component:m},{path:"/",name:"HelloWorld",component:u}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:v,components:{App:a},template:"<App/>"})},T9kX:function(t,i){},kh9h:function(t,i){},v2ns:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.e22c224384a3264a38eb.js.map