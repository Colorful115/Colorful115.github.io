document.addEventListener("DOMContentLoaded", function () {  
  var player = videojs("my_video_1");  
  // var autoPlay = false;  
  var url = "https://www.cunshao.com/666666/api/web.php"; // 视频API   
  // 设置初始视频源  
  player.src({ type: "video/mp4", src: url });    
  // 定义一个函数来更换视频  
  function changeVideo() {  
      player.src({ type: "video/mp4", src: url }); 
      try{ player.load()  } catch(error){
        setTimeout(() => {  
          changeVideo(); // 延迟一段时间后重试  
      }, 1000); // 等待一秒
      }
      player.play()
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