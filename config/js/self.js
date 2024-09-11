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
    source: "https://txmov2.a.yximgs.com/upic/2023/07/17/19/BMjAyMzA3MTcxOTU2MzRfMjk1MTM4ODg1MV8xMDgyMDUyMDU3NDlfMF8z_b_B8e273726059bf96d2da15dec04ea7c35.mp4",
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
 
var urlCon = "https://txmov2.a.yximgs.com/upic/2023/07/17/19/BMjAyMzA3MTcxOTU2MzRfMjk1MTM4ODg1MV8xMDgyMDUyMDU3NDlfMF8z_b_B8e273726059bf96d2da15dec04ea7c35.mp4"


var list = document.getElementById('optionList')

document.getElementById('triggerButton').addEventListener('click', function() {  
  // var list = document.getElementById('optionList');  
  list.classList.toggle('hidden') 
});  
// 鼠标进入
document.getElementById('triggerButton').addEventListener('mouseenter', function() {  
  if (list.classList.contains('hidden')) ;
    list.classList.remove('hidden');  
});  
// 鼠标离开
document.getElementById('optionList').addEventListener('mouseleave', function() {  
      list.classList.add('hidden');  
  
});

  // 为每个li元素添加点击事件监听器  
  const listItems = document.querySelectorAll('#optionList li');  
  listItems.forEach(function(item) {  
      item.addEventListener('click', function(e) {  
          // 这里不需要阻止事件冒泡，直接隐藏列表  
          list.classList.add('hidden'); // 点击li时隐藏列表  

          // // 这里添加其他点击li时的逻辑  
          // console.log('Clicked:', this.textContent); // 示例：在控制台打印被点击的li的文本内容 
          // console.log(e) 
      });  
  });  



function triggerFunction(option) {  
  // 获取地址  
  var urlNum = "https://sp.4n2.cn/?api="
  var urlStr = (typeof option === 'undefined' || option === null) ? "tm" : option;
  if(option == "pc"){
    urlCon = "https://www.cunshao.com/666666/api/web.php"
  }else if(option == "ikun"){urlCon ="https://txmov2.a.yximgs.com/upic/2023/07/17/19/BMjAyMzA3MTcxOTU2MzRfMjk1MTM4ODg1MV8xMDgyMDUyMDU3NDlfMF8z_b_B8e273726059bf96d2da15dec04ea7c35.mp4" }
  else{   
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

