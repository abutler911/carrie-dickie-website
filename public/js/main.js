console.log("linked to main.js");

const svg = `<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="100%" fill="#ffffff"></rect><path d="M360 0L369.5 9C379 18 398 36 397.5 54C397 72 377 90 370.3 108C363.7 126 370.3 144 380 162C389.7 180 402.3 198 404.2 216C406 234 397 252 388.8 270C380.7 288 373.3 306 368.5 324C363.7 342 361.3 360 368.3 378C375.3 396 391.7 414 400.5 432C409.3 450 410.7 468 410.7 486C410.7 504 409.3 522 408.7 531L408 540L0 540L0 531C0 522 0 504 0 486C0 468 0 450 0 432C0 414 0 396 0 378C0 360 0 342 0 324C0 306 0 288 0 270C0 252 0 234 0 216C0 198 0 180 0 162C0 144 0 126 0 108C0 90 0 72 0 54C0 36 0 18 0 9L0 0Z" fill="#D65C90" stroke-linecap="round" stroke-linejoin="miter"></path></svg>`;

const mainElement = document.querySelector(".main");
mainElement.style.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(
  svg
)}')`;
mainElement.style.backgroundSize = "cover";
mainElement.style.backgroundRepeat = "no-repeat";
