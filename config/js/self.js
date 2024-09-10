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

// // 获取视频URL
// function getNextVideoUrl(url) {
//   console.log("getNext"+url)
//   var urlNum = "https://sp.4n2.cn/?api="
//   var urlStr = (typeof url === 'undefined' || url === null) ? "tm" : url;
//   if(url == "pc"){
//     urlNum = "https://www.cunshao.com/666666/api/web.php"
//   }else{
//     urlNum = urlNum + urlStr
//   }
//  console.log(urlNum)
//     return urlNum;
// }
 
var urlCon = "https://sp.4n2.cn/?api=tm"
  
document.getElementById('triggerButton').addEventListener('click', function() {  
  var list = document.getElementById('optionList');  
  list.classList.toggle('active'); // 切换列表的显示状态  
});  
var list = document.getElementById('optionList')
function triggerFunction(option) {  
    // list.classList.remove('hover-style')
  // 在这里可以添加更多逻辑，比如根据option的值进行不同的操作  
  var urlNum = "https://sp.4n2.cn/?api="
  var urlStr = (typeof option === 'undefined' || option === null) ? "tm" : option;
  if(option == "pc"){
    urlCon = "https://www.cunshao.com/666666/api/web.php"
  }else{
    urlCon = urlNum + urlStr
  };
  changeVideo();

} 

function changeVideo() {
  var nextVideoUrl = urlCon;
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

