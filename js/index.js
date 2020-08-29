window.onload = function(){
  //查看按键的按键码
    /* function keyDown(e) {
      var keycode = e.which;
      var realkey = String.fromCharCode(e.which);
      alert("按键码" + keycode + "字符" + realkey);
    }
    document.onkeydown = keyDown */

    //1.按下键
    (function(window){
      $(".myName").animate({top:'50%'},2000)

      var Width = 0
      function keyDown(e){
        var evt = e || event;
        upDown(evt.which)
      }
      //上下滚动
      function upDown(a){
        if(a == 40){
          if(Width > -innerHeight*3){
            Width = Width - innerHeight;
          }
        }else if(a == 38){
          if(Width < 0){
            Width = Width + innerHeight;
          }
        }
        $(".all").stop().animate({top:Width+'px'});
        
      }
      document.onkeydown = keyDown;
      $(".myName_3").click(function(){
        upDown(40);
      });
      

      //鼠标滚轮事件
      var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
      //Firefox事件：DOMMouseScroll、IE/Opera/Chrome事件：mousewheel
      var mousewheel = isFirefox ? "DOMMouseScroll" : "mousewheel";
      
    }(window))
  
}