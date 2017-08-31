/*
相对于浏览器，鼠标到哪里，tuo到哪里
*/
window.onload=function(){
  var tuo=$(".tuo")[0];
  var top=tuo.offsetTop;
  var left=tuo.offsetLeft;
  tuo.onmousedown=function(e){
    var ev=e||window.event;
    var ox=ev.offsetX;
    var oy=ev.offsetY;
    document.onmousemove=function(e){
      var ev=e||event;
      var cx=ev.clientX;
      var cy=ev.clientY;
      tuo.style.left=cx-ox-(offset(tuo).left-tuo.offsetLeft)+"px";
      tuo.style.top=cy-oy-(offset(tuo).top-tuo.offsetTop)+"px";
    }
    tuo.onmouseup=function(){
      document.onmousemove=null;
      tuo.onmouseup=null;
    }
  }
}
