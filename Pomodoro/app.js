const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2');

let checkInterval = false;
let tempsInitial = 1800;
let tempsDeRepos = 300;
let pause = false;
let nbCycles = 0;
cycles.innerText = `nombre de cycles ${nbCycles}`;


affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}: ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`; // Pour écrire 30 : 00
affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)}: ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`; // Pour écrire 5 : 00

btnGo.addEventListener('click', () => {

    if (checkInterval === false) {

        checkInterval = true;

        tempsInitial--;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

        let timer = setInterval(() => {

            if (pause === false && tempsInitial > 0) {
                tempsInitial--;
                affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            }
            else if (pause === false && tempsDeRepos === 0 && tempsInitial === 0) {
                tempsInitial = 1800;
                tempsDeRepos = 300;
                nbCycles++;
                cycles.innerText = `Nombre de cycles ${nbCycles}`;
                affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
                affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            }
            else if (pause === false && tempsInitial === 0) {
                tempsDeRepos--;
                affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

            }


        }, 1000)

        //Reset button
        btnReset.addEventListener('click', () => {
            clearInterval(timer);
            checkInterval = false;
            tempsInitial = 1800;
            tempsDeRepos = 300;
            affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}: ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)}: ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        })


    } else {
        return;
    }


    


})

btnPause.addEventListener('click', () => {
    if (pause === false) {
        btnPause.innerText = 'Play';
    } else if (pause === true) {
        btnPause.innerText = 'Pause'
    }
    pause = !pause
})

