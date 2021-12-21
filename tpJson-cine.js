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

    // pb avec 2 eme appel vers la base pour récupérer les détails :
    // storeDetailsOnSession(titre0);
    // let DATA = sessionStorage.getItem('film');
    // console.log("alimPage() : " + DATA);

    affichagePremierFilm();
    affichageListeFilm();


    // affichage du premier film en entête :
    function affichagePremierFilm() {
        let afficheFilm = document.querySelector("#affiche0");
        let imgFilm = document.createElement("img");
        imgFilm.src = dataT[0].Poster;
        imgFilm.alt = dataT[0].Title;
        afficheFilm.appendChild(imgFilm);
        let titre = document.querySelector("#titre");
        titre.value = dataT[0].Title;
        let annee = document.querySelector("#annee");
        annee.value = dataT[0].Year;
        let genre = document.querySelector("#genre");
        genre.value = dataT[0].Genre;
        let realisateur = document.querySelector("#realisateur");
        realisateur.value = dataT[0].Director;
        let acteurs = document.querySelector("#acteurs");
        acteurs.value = dataT[0].Actors;
    }

    //affichage liste des films :
    function affichageListeFilm() {
        let listeFilm = document.querySelector("#liste");
        for (let index = 1; index <= 10; index++) {
            dataT[index];
            let ligneFilm = document.createElement("div");
            ligneFilm.class = "row";
            colFilm = document.createElement("div");
            colFilm.class = "col-sm-6";
            imgFilm = document.createElement("img");
            imgFilm.src = dataT[index].Poster;
            imgFilm.alt = dataT[index].Title;
            listeFilm.appendChild(ligneFilm);
            ligneFilm.appendChild(colFilm);
            colFilm.appendChild(imgFilm);
            let titreFilm = document.createElement("p");
            titreFilm.textContent = dataT[index].Title;
            colFilm.appendChild(titreFilm);

        }


    }
}


//programme :
// storeDetailsOnSession("rock");
// console.log("par ici les DATA : " + sessionStorage.getItem('film'));