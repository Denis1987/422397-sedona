"use strict";
var link = document.querySelector(".search_hotel");
var popup = document.querySelector(".modal_content");

popup.classList.add("modal_content_hide");
link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal_content_hide");
});