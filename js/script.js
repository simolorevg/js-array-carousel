//creo array di immagini
const imgArray = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
const imgSection = document.querySelector('.img-section'); //creo variabile per individuare la sezione delle immagini
console.log(imgSection);
for(let i = 0; i < imgArray.length; i++){
    let currentImg = imgArray[i];// creo variabile per effettuare assegnaione di immagine all'interno di img-section
    imgSection.innerHTML += `<div class="img-container">
    <img src="${currentImg}" alt="">
    </div>`;
    console.log(imgSection);
};
//creo la sequenza
imgContainerArray=document.getElementsByClassName('img-container');//genero l'array di div contenenti le immagini
console.log(imgContainerArray);
let containerIndex = 0;//imposto l'indice a zero
imgContainerArray[0].classList.add("active");//parte dalla prima immagine
const upBtn = document.querySelector('.up');
upBtn.addEventListener("click", function() {
    imgContainerArray[containerIndex].classList.remove("active");
    containerIndex++;
    imgContainerArray[containerIndex].classList.add('active');
    if(containerIndex === imgContainerArray.length - 1){ //se arrivo in fondo al carosello mi nasconde il bottone
        upBtn.classList.add("hidden");
    }
})