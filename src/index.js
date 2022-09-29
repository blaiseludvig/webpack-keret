import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const input_url = document.querySelector("#url");
const input_image_width = document.querySelector("#image-width");
const input_border_width = document.querySelector("#border-width");
const input_border_color = document.querySelector("#border-color");
const image = document.querySelector("#image");

const url = () => input_url.value;
const image_width = () => `${input_image_width.value}px`;
const border_width = () => `${input_border_width.value}px`;
const border_color = () => `${input_border_color.value}`;


function add_event_listeners() {
  input_url.addEventListener("change", () => {
    image.src = url();
  });

  input_image_width.addEventListener("input", () => {
    image.style.width = image_width();
  });

  input_border_width.addEventListener("input", () => {
    image.style["border-width"] = border_width();
  });

  input_border_color.addEventListener("input", () => {
    image.style["border-color"] = border_color();
  });

}

function init() {
  add_event_listeners();
  image.src = url();
  image.style.width = image_width();
  image.style["border-width"] = border_width();
  image.style["border-color"] = border_color();

}


init();