// const fetchData = async () => {
//   const response = await axios.get(
//     "https://v2.alapi.cn/api/zaobao?token=iuP2hV0taYXVP4hn&format=json"
//   );

//   const externalData = response.data.data;
//   console.log(externalData);
//   console.log(externalData.date);
//   console.log(externalData.head_image);
  

//   const div = document.createElement("div");

//   div.innerHTML = `<h3>${externalData.weiyu}</h3>`;
//   externalData.news.forEach((item, index, arr) => {
//     div.innerHTML += `<p>${item}</p>`;
//   });

//   const targetElement = document.getElementById("external-data-container");
//   targetElement.appendChild(div);
// };

// fetchData();


const fetchData = async () => {
  const response = await axios.get(
    "https://v2.alapi.cn/api/zaobao?token=iuP2hV0taYXVP4hn&format=json"
  );

  const externalData = response.data.data;
  // console.log(externalData); 
  // console.log(externalData.date);
  // console.log(externalData.head_image);
  
  externalData.date = formatDate(externalData.date)
  const div = document.createElement("div");

  div.innerHTML = `<h2>更新日期:${externalData.date}<h2><img src="${externalData.head_image}"/><h3>${externalData.weiyu}</h3>`;
  externalData.news.forEach((item, index, arr) => {
    div.innerHTML += `<p class="news_p">${item}</p>`;
  });

  const targetElement = document.getElementById("external-data-container");
  targetElement.appendChild(div);
};

fetchData();


//日期转换
function formatDate(dateStr) {  
  // 验证输入格式  
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {  
    return '无效的日期格式';  
  }  
  
  // 使用split方法按"-"分割字符串  
  let [year, month, day] = dateStr.split('-');  
  
  // 将月份和日期转换为带前导零的格式  
  month = month.padStart(2, '0');  
  day = day.padStart(2, '0');  
  
  // 拼接成新的日期格式  
  return `${year}年${month}月${day}日`;  
} 

// 测试  
// let dateStr = externalData.date;  
// let formattedDate = formatDate(dateStr);  
// console.log(formattedDate); // 输出: 2024年09月04日
