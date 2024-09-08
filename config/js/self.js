document.addEventListener("DOMContentLoaded", function () {
  var player = videojs("my_video_1");
  var autoPlay = false;
  var url = "https://www.cunshao.com/666666/api/web.php"; // 视频API
  // 设置初始视频源
  player.src({ type: "video/mp4", src: url });
  // 定义一个函数来更换视频
  function changeVideo() {
    player.src({ type: "video/mp4", src: url });
    player.load();
    try {
      player.play();
    } catch (error) {
      setTimeout(() => {
        changeVideo(); // 错误后重试
      }, 1000);
    }
  }

  // 添加一个按钮来控制播放/暂停视频
  var playPauseBtn = document.getElementById("playPauseAutoChange");

  playPauseBtn.addEventListener("click", function () {
    if (autoPlay) {
      player.pause();
    } else {
      player.play();
    }
    autoPlay = !autoPlay;
  });

  // 添加一个按钮来手动更换视频
  document.getElementById("changeVideoBtn").addEventListener("click", changeVideo);
  // 监听视频播放结束事件，更换视频
  player.on("ended", changeVideo);
  // 监听播放事件
  player.on("play", function () {
    playPauseBtn.innerHTML = "暂停";
  });
  // 监听暂停事件
  player.on("pause", function () {
    playPauseBtn.innerHTML = "播放";
  });
});
