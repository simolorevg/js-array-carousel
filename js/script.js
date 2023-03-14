const imgArray = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
for(let i = 0; i < imgArray.length; i++){
    let currentImg = imgArray[i];
    let imgContainer = `<div class="img-container">
    <img src="${imgArray[i]}" alt="">
    </div>`
}