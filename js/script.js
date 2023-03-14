const imgArray = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];//creo array di immagini
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
const downBtn = document.querySelector('.down');//creo le variabili per poter utilizzare i pulsanti up e down
downBtn.classList.add('hidden');//nascondo inizialmente il bottone down
upBtn.addEventListener("click", function() {
    downBtn.classList.remove('hidden');//faccio riapparire il pulsante down
    imgContainerArray[containerIndex].classList.remove("active");//nascondo l'immagine corrente
    containerIndex++;//incremento di uno l'indice
    imgContainerArray[containerIndex].classList.add('active');//faccio apparire l'immagine successiva
    if(containerIndex === imgContainerArray.length - 1){ //se arrivo in fondo al carosello mi nasconde il bottone
        upBtn.classList.add("hidden");
    }
});
downBtn.addEventListener("click", function(){
    upBtn.classList.remove('hidden');// faccio riapparire i pulsante up
    imgContainerArray[containerIndex].classList.remove("active");//nascondo l'immagine corrente
    containerIndex--;//decremento di uno l'indice
    imgContainerArray[containerIndex].classList.add('active');//faccio apparire l'immagine successiva
    if(containerIndex === 0){ //se arrivo in fondo al carosello mi nasconde il bottone
        downBtn.classList.add("hidden");
    }
})
