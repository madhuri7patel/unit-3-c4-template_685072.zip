// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar, sidebar } from "../components/navbar.js";

let a = document.querySelector("#navbar");
a.innerHTML = navbar();
let b = (document.querySelector("#sidebar").innerHTML = sidebar());
import { Snews, append } from "./fetch.js";

const search = async (e) => {
  if (e.key === "Enter") {
    let value = document.getElementById("search_input").value;
    const url = `https://masai-mock-api.herokuapp.com/news?q=${value}`;
    const container = document.querySelector("#results");

    const data = await Snews(url);

    append(data.articles, container);
    console.log(data);
  }
};

document.querySelector("#search_input").addEventListener("keydown", search);

let url1 = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countrycode} `;
