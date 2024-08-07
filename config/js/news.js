const fetchData = async () => {
  const response = await axios.get(
    "https://v2.alapi.cn/api/zaobao?token=iuP2hV0taYXVP4hn&format=json"
  );

  const externalData = response.data.data;
//   console.log(response);

  const div = document.createElement("div");

  div.innerHTML = `<h3>${externalData.weiyu}</h3>`;
  externalData.news.forEach((item, index, arr) => {
    div.innerHTML += `<p>${item}</p>`;
  });

  const targetElement = document.getElementById("external-data-container");
  targetElement.appendChild(div);
};

fetchData();
