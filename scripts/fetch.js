const Snews = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const append = (data, container) => {
  container.innerHTML = null;
  data.forEach((el) => {
    let mDiv = document.createElement("div");
    mDiv.addEventListener("click", function () {
      myfunc(el);
    });

    let iDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.urlToImage;
    iDiv.append(image);

    let ti = document.createElement("div");
    let title = document.createElement("h3");
    title.innerText = el.author;
    let cont = document.createElement("p");
    cont.innerText = el.description;
    ti.append(title, cont);

    mDiv.append(iDiv, ti);
    container.append(mDiv);
  });
};
function myfunc(el) {
  localStorage.setItem("news", JSON.stringify(el));
  window.location.href = "news.html";
}

export { Snews, append };
