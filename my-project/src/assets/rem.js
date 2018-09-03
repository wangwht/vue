/*REM单位换算方法 iphone6适配*/

function resizeRoot(){
  var Dpr = 1, uAgent = window.navigator.userAgent;
  var isIOS = uAgent.match(/iphone/i);
  var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth, wDpr, wFsize;
  if (window.devicePixelRatio) {
    wDpr = window.devicePixelRatio;
  } else {
    wDpr = isIOS ? wWidth > 818 ? 3 : wWidth > 480 ? 2 : 1 : 1;
  }
  if(isIOS) wWidth = screen.width;
  wFsize = wWidth > 1080 ? 100 : wWidth / 7.5;
  window.screenWidth_ = wWidth;
  document.getElementsByTagName('html')[0].dataset.dpr = wDpr;
  document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
}
//判断安卓手机浏览器低版本的用ready方法执行
function appsion(){
  var uAgent = window.navigator.userAgent;
  var isIOS = uAgent.match(/iphone/i);
  if(navigator.appVersion.substring(navigator.appVersion.length-6)<537 && !isIOS){
    document.ready=function(){
      resizeRoot();
    }
  }else{
    resizeRoot();
  }
}

export { //很关键
  appsion
}


