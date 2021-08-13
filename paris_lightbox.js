const bigImg = document.querySelector("#lightbox img");
const lightbox = document.querySelector("#lightbox");
const boxMax = document.querySelectorAll("#lightbox_mask");
const photoList = document.querySelectorAll(".fbox img");

for (let i = 0; i < photoList.length; i++ ) {
    photoList[i].addEventListener("click", show); 
}
bigImg.addEventListener("click", hide);

function show() {
    const thisSrc = this.getAttribute("src");
    let bigImgSrc = thisSrc.replace("small", "large");

    let thisAlt = this.getAttribute("alt");
   // let bigImgSrc = thisSrc.replace("small", "large");

    bigImg.setAttribute("src", bigImgSrc);
    //lightbox.setAttribute("alt", thisAlt);
    lightbox.style.display = "block";
boxMax.style.display = "block";
        
}
function hide() {
    lightbox.style.display = "none";
    boxMax.style.display = "none";
        
    }
