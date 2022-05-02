// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar, sidebar } from "../components/navbar.js";

let a = document.querySelector("#navbar");
a.innerHTML = navbar();
let b = (document.querySelector("#sidebar").innerHTML = sidebar());
