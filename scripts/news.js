// Ude Import export (MANDATORY)
import { navbar, sidebar } from "../components/navbar.js";

let a = document.querySelector("#navbar");
a.innerHTML = navbar();
let b = (document.querySelector("#sidebar").innerHTML = sidebar());

let x = JSON.parse(localStorage.getItem("news"));
let container = document.getElementById("results");

let mDiv = document.createElement("div");

let iDiv = document.createElement("div");
let image = document.createElement("img");
image.src = x.urlToImage;
iDiv.append(image);

let ti = document.createElement("div");
let title = document.createElement("h3");
title.innerText = x.author;
let cont = document.createElement("p");
cont.innerText = x.description;
ti.append(title, cont);

mDiv.append(iDiv, ti);
results.append(mDiv);
