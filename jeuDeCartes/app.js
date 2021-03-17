const cartes = document.querySelectorAll('.carte');

let carteRetournee = false;
let premiereCarte, secondCarte;
let verrouillage = false;

cartes.forEach(carte =>{
    carte.addEventListener('click',retourneCarte )
})

function retourneCarte(){
    if(verrouillage) return;

    this.childNodes[1].classList.toggle('active');

    if(!carteRetournee){
        carteRetournee = true;
        premiereCarte = this;
        return;
    }
    carteRetournee = false;
    secondCarte = this;
    //console.log(premiereCarte, secondCarte);
    correspondance()
}

function correspondance(){
    if(premiereCarte.getAttribute('data-attr')=== secondCarte.getAttribute('data-attr')){
        premiereCarte.removeEventListener('click', retourneCarte);
        secondCarte.removeEventListener('click', retourneCarte);
    }else{
        verrouillage = true;
        setTimeout(()=>{

            premiereCarte.childNodes[1].classList.remove('active');
            secondCarte.childNodes[1].classList.remove('active');

            verrouillage = false;
        }, 1500)
    }
}

function aleatoire(){
    cartes.forEach(card =>{
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;
    })
}
aleatoire();