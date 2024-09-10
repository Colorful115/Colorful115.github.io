// var player = new Aliplayer(
//   {
//     id: "J_prismPlayer",
//     source: "https://www.cunshao.com/666666/api/web.php",
//     autoplay: false,
//     playsinline: true,
//     preload: "auto",
//     controlBarVisibility: "hover",
//     useH5Prism: true,
//     clickPause: true,
//     disablePip: false,
//   },
//   function (player) {
//     // 监听播放结束事件
//   }
// );

// // 获取视频URL
// function getNextVideoUrl() {
//  var urlNum = " https://www.cunshao.com/666666/api/web.php?_t="+ generateRandom13DigitString()
// //  var urlNum = "https://www.cunshao.com/666666/api/web.php"
//  console.log(urlNum)
//     return urlNum;
// }

// function generateRandom13DigitString() {  
//   let randomString = '';  
//   // 首先添加1，以确保它是13位数（如果需要的话）  
//   randomString += '1';  
//   for (let i = 0; i < 12; i++) {  
//     // 生成0到9之间的随机数并转换为字符串，然后拼接到结果字符串上  
//     randomString += Math.floor(Math.random() * 10).toString();  
//   }  
//   return randomString;  
// } 

// function changeVideo() {
//   var nextVideoUrl = getNextVideoUrl();
//   if (nextVideoUrl) {
//     player.loadByUrl(nextVideoUrl); // 使用新URL重新加载并播放
//     player.play(); // 播放视频
//   }
// }

// var playPauseBtn = document.getElementById("playBtn");
// var autoPlay = false;
// playPauseBtn.addEventListener("click", function () {
//   if (autoPlay) {
//     player.pause();
//   } else {
//     player.play();
//   }
//   autoPlay = !autoPlay;
// });
// document.getElementById("nextBtn").addEventListener("click", changeVideo);
// player.on("ended", changeVideo);
// player.on("play", function () {
//   playPauseBtn.innerHTML = "暂停";
// });
// // 监听暂停事件
// player.on("pause", function () {
//   playPauseBtn.innerHTML = "播放";
// });




//````````````

var player = new Aliplayer(
  {
    id: "J_prismPlayer",
    source: "https://sp.4n2.cn/?api=tm",
    autoplay: false,
    playsinline: true,
    preload: "auto",
    controlBarVisibility: "hover",
    useH5Prism: true,
    clickPause: true,
    disablePip: false,
  },
  function (player) {
    // 监听播放结束事件
  }
);

// 获取视频URL
function getNextVideoUrl() {
//  var urlNum = " https://www.cunshao.com/666666/api/web.php?_t="+ generateRandom13DigitString()
 var urlNum = "https://sp.4n2.cn/?api=tm"
//  console.log(urlNum)
    return urlNum;
}

// function generateRandom13DigitString() {  
//   let randomString = '';  
//   // 首先添加1，以确保它是13位数（如果需要的话）  
//   randomString += '1';  
//   for (let i = 0; i < 12; i++) {  
//     // 生成0到9之间的随机数并转换为字符串，然后拼接到结果字符串上  
//     randomString += Math.floor(Math.random() * 10).toString();  
//   }  
//   return randomString;  
// } 

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

