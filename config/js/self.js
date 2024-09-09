var player = new Aliplayer(
  {
    id: "J_prismPlayer",
    source: "https://www.cunshao.com/666666/api/web.php",
    autoplay: false,
    playsinline: true,
    preload: "auto",
    controlBarVisibility: "hover",
    useH5Prism: true,
    autoplayPolicy: {
      fallbackToMute: true, // 有声自动播放失败后，是否降级为静音自动播放，默认为false
      showUnmuteBtn: true, // 静音自动播放时，是否居中显示静音大按钮，默认为true
    },
    clickPause: true,
    disablePip: false,
  },
  function (player) {
    // 监听播放结束事件
  }
);

// 获取视频URL
function getNextVideoUrl() {
  return "https://www.cunshao.com/666666/api/web.php";
}

function changeVideo() {
  var nextVideoUrl = getNextVideoUrl();
  if (nextVideoUrl) {
    player.loadByUrl(nextVideoUrl); // 使用新URL重新加载并播放
    player.play(); // 播放视频
  }
}

var playPauseBtn = document.getElementById("playBtn");
var autoPlay = false;
playPauseBtn.addEventListener("click", function () {
  if (autoPlay) {
    player.pause();
  } else {
    player.play();
  }
  autoPlay = !autoPlay;
});
document.getElementById("nextBtn").addEventListener("click", changeVideo);
player.on("ended", changeVideo);
player.on("play", function () {
  playPauseBtn.innerHTML = "暂停";
});
// 监听暂停事件
player.on("pause", function () {
  playPauseBtn.innerHTML = "播放";
});