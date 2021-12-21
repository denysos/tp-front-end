// TODO : créer une page qui permet de chercher des informations sur un film
// Lien de l'API : http://www.omdbapi.com/
// Clé pour pouvoir l'utiliser : Here is your key: f6e256e1
// Exemple de code avec l'utilisation de fetch et JSON : https://developer.mozilla.org/en-US/docs/Web/API/Response/json


// variable globale pour récupérer les info de getDetails()
// var DATA="";


function rqcine() {

    let url = 'http://www.omdbapi.com/?apikey=f6e256e1&';
    let rq = 's=';

    let texteRq = document.querySelector("#recherche").value;
    console.log("texte recherche : " + texteRq);

    fetch(url + rq + texteRq).then(res => res.json())
        .then(data => alimPage(data))
        .catch(error => console.log(error));
}

function storeDetailsOnSession(titre) {
    let url = 'http://www.omdbapi.com/?apikey=f6e256e1&';
    let rqTitre = 't=';

    // let texteRq = document.querySelector("#recherche").value;
    console.log("texte recherche : " + titre);

    // fetch(url + rqTitre + titre).then(res => JSON.parse(res))
    fetch(url + rqTitre + titre).then(res => res.json())
        .then(data => {
            console.log("datafetch : " + data)
            sessionStorage.setItem('film', data)
        })
        .catch(error => console.log(error));

}

function alimPage(dataTotale) {
    console.log(dataTotale)
    let dataT = dataTotale.Search;
    let titre0 = dataT[0].Title;

    storeDetailsOnSession(titre0);
    let DATA = sessionStorage.getItem('film');

    console.log("alimPage() : " + DATA);

    let titre = document.querySelector("#titre");
    titre.value = DATA.Title;
    let annee = document.querySelector("#annee");
    annee.value = DATA.Year;
    let genre = document.querySelector("#genre");
    genre.value = DATA.Genre;
    let realisateur = document.querySelector("#realisateur");
    realisateur.value = DATA.Director;
    let acteurs = document.querySelector("#acteurs");
    acteurs.value = DATA.Actors;
}


//programme :
// let donneesBrutesFilms = rqcine();
// alimPage(donneesBrutesFilms);

storeDetailsOnSession("rock");
console.log("par ici les DATA : " + sessionStorage.getItem('film'));