
document.addEventListener('DOMContentLoaded', function() {  
  var element = document.getElementById('swiper');  
  if (element) {  
      // element.insertAdjacentHTML('beforeend', '<p>新内容</p>');  
      (function (window, document) {
        if (top != self) {
          window.top.location.replace(self.location.href);
        }
      
        var get = function (id) {
          return document.getElementById(id);
        };
      
        var bind = function (element, event, callback) {
          return element.addEventListener(event, callback);
        };
      
        var auto = false;
      
        var player = get("player");
      
        var randomm = function () {
        //   player.src = "http://v.nrzj.vip/video.php?_t=" + Math.random();
          player.src ="https://www.cunshao.com/666666/api/web.php"
          player.play();
        };
      // 换一个
        // bind(get("next1"), "click", randomm);
        bind(get("next1"), "click", function(){
          auto = true;
          randomm();
          get("switch").innerHTML = "暂停";
        });
        bind(player, "error", function () {
          randomm();
        });
      // 播放开关
        bind(get("switch"), "click", function () {
          auto = !auto;
          if(auto){ player.play()}else{
            player.pause()
          }
          this.innerText = (auto ? "暂停" : "播放");
        });
      
        bind(player, "ended", function () {
            
          if (auto)randomm()
        });
      
      })(window, document);
    //   https://www.cunshao.com/666666/api/web.php
  } else {  
      // console.log('元素未找到');  
  }  
});