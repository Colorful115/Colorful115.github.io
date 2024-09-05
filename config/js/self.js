
// document.addEventListener('DOMContentLoaded', function() {  
//   var element = document.getElementById('swiper');  
//   if (element) {  
//       // element.insertAdjacentHTML('beforeend', '<p>新内容</p>');  
//       (function (window, document) {
//         if (top != self) {
//           window.top.location.replace(self.location.href);
//         }
      
//         var get = function (id) {
//           return document.getElementById(id);
//         };
      
//         var bind = function (element, event, callback) {
//           return element.addEventListener(event, callback);
//         };
      
//         var auto = false;
      
//         var player = get("player");
      
//         var randomm = function () {
//         //   player.src = "http://v.nrzj.vip/video.php?_t=" + Math.random();
//           player.src ="https://www.cunshao.com/666666/api/web.php"
//           player.play();
//         };
//       // 换一个
//         // bind(get("next1"), "click", randomm);
//         bind(get("next1"), "click", function(){
//           auto = true;
//           randomm();
//           get("switch").innerHTML = "暂停";
//         });
//         bind(player, "error", function () {
//           randomm();
//         });
//       // 播放开关
//         bind(get("switch"), "click", function () {
//           auto = !auto;
//           if(auto){ player.play()}else{
//             player.pause()
//           }
//           this.innerText = (auto ? "暂停" : "连续播放");
//         });
      
//         bind(player, "ended", function () {
            
//           if (auto)randomm()
//         });
      
//       })(window, document);
//     //   https://www.cunshao.com/666666/api/web.php
//   } else {  
//       // console.log('元素未找到');  
//   }  
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var player = videojs("my_video_1");
//   var autoPlay = false;
//   function changeVideo() {
//     var url = "https://www.cunshao.com/666666/api/web.php";
//     player.src({ type: "video/mp4", src: url });
//     player.load();
//     player.play();
//   }

//   // 初始加载视频
//   changeVideo();

//   // 监听视频播放结束事件
//   player.on("ended", function () {
//     changeVideo(); // 视频播放完毕后自动更换视频
//   });

//   // 添加一个按钮来手动停止循环
//   document.getElementById("playPauseAutoChange").addEventListener("click", function () {
//       if (player.paused()) {
//         player.play();
//         this.innerHTML="暂停"
//       } else {
//         player.pause(); // 暂停视频
//         this.innerHTML="播放"
//       }

//       // 可以在这里添加更多逻辑来完全停止循环，比如重置currentIndex或禁用事件监听器等
//     });
//     document.getElementById('changeVideo').addEventListener('click', changeVideo);
// });


// ##############

// document.addEventListener("DOMContentLoaded", function () {  
//   var myPlayer = videojs("my_video_1");  
//   // var autoMyPlay = false;  
//   var myUrl = "https://www.cunshao.com/666666/api/web.php"; // 假设这是你的视频API或视频URL  

//   // 设置初始视频源  
//   myPlayer.src({ type: "video/mp4", src: myUrl });  

//   // 定义一个函数来更换视频  
//   function changeVideo() {  
//     myPlayer.src({ type: "video/mp4", src: myUrl }); // 注意：这里url是固定的，你可能需要动态获取  
//     // myPlayer.load();  
//     myPlayer.play()
     
//   }  

//   // 监听视频播放结束事件，自动更换视频  
//   myPlayer.on("ended", changeVideo);  

//   // 添加一个按钮来控制播放/暂停和自动更换视频  
//   var playPauseBtn = document.getElementById("switch");  
//   playPauseBtn.innerHTML = "播放"; // 初始化为播放状态  

//   playPauseBtn.addEventListener("click", function () {  
//       if (myPlayer.paused()) {  
//         myPlayer.play();  
//           playPauseBtn.innerHTML = "暂停";  
//           // 当视频再次结束时，恢复自动更换视频  
//           myPlayer.one('ended', changeVideo);  
//       } else {  
//         myPlayer.pause();  
//           playPauseBtn.innerHTML = "播放";  
//           // 暂停时，移除结束时的自动更换视频事件监听（如果需要的话）  
//           // 但在这个场景中，因为player.one()只监听一次，所以不是必需的  
//       }  
//   });  

//   // 添加一个按钮来手动更换视频  
// console.log( myPlayer)
//   document.getElementById('next1').addEventListener('click', changeVideo);  
     
//     // 监听播放事件  
//     myPlayer.on("play", function () {  
//       playPauseBtn.innerHTML = "暂停";  
//   });  
//      // 监听暂停事件  
//      myPlayer.on("pause", function () {  
//       playPauseBtn.innerHTML = "播放";  
//   });  
// });


document.addEventListener("DOMContentLoaded", function () {  
  var player = videojs("my_video_1");  
  // var autoPlay = false;  
  var url = "https://www.cunshao.com/666666/api/web.php"; // 假设这是你的视频API或视频URL    
  // 设置初始视频源  
  player.src({ type: "video/mp4", src: url });    
  // 定义一个函数来更换视频  
  function changeVideo() {  
      player.src({ type: "video/mp4", src: url }); // 注意：这里url是固定的，你可能需要动态获取  
      player.load();  
      try{ player.play() } catch(error){
        setTimeout(() => {  
          changeVideo(); // 延迟一段时间后重试  
      }, 1000); // 等待一秒
      }
     
      // 当视频再次结束时，恢复自动更换视频  
      player.one('ended', changeVideo);  
      
  }    
  // // 监听视频播放结束事件，自动更换视频  
  player.on("ended", changeVideo);    
  // 添加一个按钮来控制播放/暂停和自动更换视频  
  var playPauseBtn = document.getElementById("playPauseAutoChange");  
  playPauseBtn.innerHTML = "播放"; // 初始化为播放状态  

  playPauseBtn.addEventListener("click", function () { 
      if (player.paused()) {   player.play();  this.innerHTML = "暂停";  } else {   player.pause();  this.innerHTML = "播放"; } });    
  // 添加一个按钮来手动更换视频  
  document.getElementById('changeVideo').addEventListener('click', changeVideo);    
    // 监听播放事件  
    player.on("play", function () { playPauseBtn.innerHTML = "暂停" });  
     // 监听暂停事件  
     player.on("pause", function () { playPauseBtn.innerHTML = "播放";});  
});