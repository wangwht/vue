<template>
  <div class="apps">
 
  <div class="toFiexName">fsdfdsf</div>
  <div class="topFiex" :class="flag == true ? 'addAnimation' : ''"></div>
  
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="http://file.dafy.com.cn/OSS/20180726/a97bb227deb248218847d6be4ee341a5.jpg"/>
        </div>
        <div class="swiper-slide">
          <img src="http://file.dafy.com.cn/OSS/20180718/c15225242d1441e5a9cdfc32cc20fc8d.jpg"/>
        </div>
        <div class="swiper-slide">
          <img src="http://file.dafy.com.cn/OSS/20180726/a97bb227deb248218847d6be4ee341a5.jpg"/>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

    <div class="blastListImg clearfix">
      <ul id="specialPage">
        <li @click="gotoList(icon.url)" v-for="icon in icons" v-bind:url="icon.url">
        <span class="iconImg">
        <img class="icon_bg"  v-bind:src="icon.img" >
        </span>
        <div class="specialTitle">{{icon.name}}</div>
      </li>

      </ul>
    </div>
    <div class="mallgoodsList">
      <ul>
          <li  v-bind:class="[index == num ? 'activeClass' : '']" v-for="(item,index) in items" @click="goodsDetail(index)">{{item.msg}}</li>
      </ul>


        <div class="tabCon">
            <div 
            v-for='(itemCon,index) in tabContents' 
            v-show=" index == num">{{itemCon}}</div>
        </div>
    </div>
<!--
<div>{{$store.state.count}}</div>
-->
  <transition name="component-fade" mode="out-in">
    <component v-bind:is="view"></component>
  </transition>
  </div>



</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import '../assets/public.css';
  import Swiper from 'swiper';
  import {appsion} from '../assets/rem.js' //注意路径
  import store from '../vuex/store';
export default {

  name: 'HelloWorld',
    props: {
        message: "传参数"  //定义传值的类型<br>   
    },
  data () {
    return {
      items:[{msg:'aaaa'},{msg:'bbbb'}],
      tabContents: ["内容一", "内容二"],
      icons:[
        {name:'精品手机',img:'http://file.dafy.com.cn/OSS/20180619/ac7784feeed64d2e8c9f2d36c7e23e9a.png',url:'/GoodsList/123'},
        {name:'家用电器',img:'http://file.dafy.com.cn/OSS/20180619/9640182909c04f72a840d83217d1f7f9.png',url:'/GoodsList/123'},
        {name:'电脑平板',img:'http://file.dafy.com.cn/OSS/20180619/a7678b590cd94826bcdee442a6e96b37.png',url:'/GoodsList/123'},
        {name:'运动户外',img:'http://file.dafy.com.cn/OSS/20180619/f39b94324f614721a80582041a98150a.png',url:'/GoodsList/123'},
        {name:'精品手机',img:'http://file.dafy.com.cn/OSS/20180619/ac7784feeed64d2e8c9f2d36c7e23e9a.png',url:'/GoodsList/123'},
        {name:'家用电器',img:'http://file.dafy.com.cn/OSS/20180619/9640182909c04f72a840d83217d1f7f9.png',url:'/GoodsList/123'},
        {name:'电脑平板',img:'http://file.dafy.com.cn/OSS/20180619/a7678b590cd94826bcdee442a6e96b37.png',url:'/GoodsList/123'},
        {name:'运动户外',img:'http://file.dafy.com.cn/OSS/20180619/f39b94324f614721a80582041a98150a.png',url:'/GoodsList/123'},
        {name:'精品手机',img:'http://file.dafy.com.cn/OSS/20180619/ac7784feeed64d2e8c9f2d36c7e23e9a.png',url:'/GoodsList/123'},
        {name:'家用电器',img:'http://file.dafy.com.cn/OSS/20180619/9640182909c04f72a840d83217d1f7f9.png',url:'/GoodsList/123'},
        {name:'电脑平板',img:'http://file.dafy.com.cn/OSS/20180619/a7678b590cd94826bcdee442a6e96b37.png',url:'/GoodsList/123'},
        {name:'运动户外',img:'http://file.dafy.com.cn/OSS/20180619/f39b94324f614721a80582041a98150a.png',url:'/GoodsList/123'},
        {name:'精品手机',img:'http://file.dafy.com.cn/OSS/20180619/ac7784feeed64d2e8c9f2d36c7e23e9a.png',url:'/GoodsList/123'},
        {name:'家用电器',img:'http://file.dafy.com.cn/OSS/20180619/9640182909c04f72a840d83217d1f7f9.png',url:'/GoodsList/123'},
        {name:'电脑平板',img:'http://file.dafy.com.cn/OSS/20180619/a7678b590cd94826bcdee442a6e96b37.png',url:'/GoodsList/123'},
        {name:'运动户外',img:'http://file.dafy.com.cn/OSS/20180619/f39b94324f614721a80582041a98150a.png',url:'/GoodsList/123'},
        {name:'精品手机',img:'http://file.dafy.com.cn/OSS/20180619/ac7784feeed64d2e8c9f2d36c7e23e9a.png',url:'/GoodsList/123'},
        {name:'家用电器',img:'http://file.dafy.com.cn/OSS/20180619/9640182909c04f72a840d83217d1f7f9.png',url:'/GoodsList/123'},
        {name:'电脑平板',img:'http://file.dafy.com.cn/OSS/20180619/a7678b590cd94826bcdee442a6e96b37.png',url:'/GoodsList/123'},
        {name:'运动户外',img:'http://file.dafy.com.cn/OSS/20180619/f39b94324f614721a80582041a98150a.png',url:'/GoodsList/123'},
        {name:'精品手机',img:'http://file.dafy.com.cn/OSS/20180619/ac7784feeed64d2e8c9f2d36c7e23e9a.png',url:'/GoodsList/123'},
        {name:'家用电器',img:'http://file.dafy.com.cn/OSS/20180619/9640182909c04f72a840d83217d1f7f9.png',url:'/GoodsList/123'},
        {name:'电脑平板',img:'http://file.dafy.com.cn/OSS/20180619/a7678b590cd94826bcdee442a6e96b37.png',url:'/GoodsList/123'},
        {name:'运动户外',img:'http://file.dafy.com.cn/OSS/20180619/f39b94324f614721a80582041a98150a.png',url:'/GoodsList/123'},
        {name:'精品手机',img:'http://file.dafy.com.cn/OSS/20180619/ac7784feeed64d2e8c9f2d36c7e23e9a.png',url:'/GoodsList/123'},
        {name:'家用电器',img:'http://file.dafy.com.cn/OSS/20180619/9640182909c04f72a840d83217d1f7f9.png',url:'/GoodsList/123'},
        {name:'电脑平板',img:'http://file.dafy.com.cn/OSS/20180619/a7678b590cd94826bcdee442a6e96b37.png',url:'/GoodsList/123'},
        {name:'运动户外',img:'http://file.dafy.com.cn/OSS/20180619/f39b94324f614721a80582041a98150a.png',url:'/GoodsList/123'},
        {name:'精品手机',img:'http://file.dafy.com.cn/OSS/20180619/ac7784feeed64d2e8c9f2d36c7e23e9a.png',url:'/GoodsList/123'},
        {name:'家用电器',img:'http://file.dafy.com.cn/OSS/20180619/9640182909c04f72a840d83217d1f7f9.png',url:'/GoodsList/123'},
        {name:'电脑平板',img:'http://file.dafy.com.cn/OSS/20180619/a7678b590cd94826bcdee442a6e96b37.png',url:'/GoodsList/123'},
        {name:'运动户外',img:'http://file.dafy.com.cn/OSS/20180619/f39b94324f614721a80582041a98150a.png',url:'/GoodsList/123'},
      ],
      num:0,
      flag:false,
      view: 'v-b'
    }
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  },

  mounted(){
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      // 如果需要前进后退按钮
      autoplay : 5000,//可选选项，自动滑动
    });
    appsion();
    //store.dispatch('increment',5);
    store.dispatch('increment',10);
   // store.commit('increment',10);
    //store.commit('increment',10);
    window.addEventListener('scroll',this.handleScroll);
  },
  methods:{
    goodsDetail(index){
    this.num = index;
    //  console.log(event.target);
     // this.$router.push({path:'/GoodsList'})
    },
    gotoList(url){
      console.log(url);
      this.$router.push({path:url})
    },
    handleScroll(e){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>100){

          this.flag = true;
      }else{
          this.flag = false;

      }
    }
  },





}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topFiex{

    position: fixed;
  top: 0;
  z-index: 1000;
  background: #FFFFFF;
  width: 7.5rem;
  opacity: 0;
  height: 0.8rem;
  line-height: 0.8rem;
}
.addAnimation{
  position: fixed;
  top: 0;
  z-index: 1000;
  background: #FFFFFF;
  width: 7.5rem;
  opacity: 0;
  height: 0.8rem;
  line-height: 0.8rem;
animation:mymove 1s infinite;
  animation-iteration-count:1;
    animation-fill-mode:forwards;
-webkit-animation:mymove 1s infinite; /*Safari and Chrome*/
    -webkit-animation-iteration-count:1;
    -webkit-animation-fill-mode:forwards;
}
@keyframes mymove
{
  from {opacity:0;}
  to {opacity:10;}
}

@-webkit-keyframes mymove /*Safari and Chrome*/
{
  from {opacity:0;}
  to {opacity:10;}
}
.toFiexName{
    position: fixed;
  top: 0;
  z-index: 1001;
  width: 7.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
}

  .mallgoodsList {
    width: 100%;
    overflow: hidden;
    margin-top: 10%;
  }
  .mallgoodsList li {
    line-height: 50px;
    width: 49%;
    height: 50px;
    float: left;
  }

.blastListImg {
  background: #FFFFFF;
  font-size: 0.24rem;
  color: #7e7f85;
  overflow: hidden;
  padding-top: 0.25rem;
}
.blastListImg ul {
  position: relative;
  z-index: 79;
  display: inline;
  white-space: nowrap;
  float: left;
  margin-left: 0.27rem;
  padding: 0.02rem 0 0.1rem 0;
 
}
.blastListImg li {
  float: left;
  width: 1.74rem;
  position: relative;
  text-align: center;
}
.blastListImg li img {
  width: 1.12rem;
}
.activeClass {
  color: red;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
