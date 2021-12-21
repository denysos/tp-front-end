// TODO : créer une page qui permet de chercher des informations sur un film
// Lien de l'API : http://www.omdbapi.com/
// Clé pour pouvoir l'utiliser : Here is your key: f6e256e1
// Exemple de code avec l'utilisation de fetch et JSON : https://developer.mozilla.org/en-US/docs/Web/API/Response/json


function rqcine() {

    let url = 'http://www.omdbapi.com/?apikey=f6e256e1&';
    let rq = 's=';

    let texteRq = document.querySelector("#recherche").value;
    console.log("texte recherche : " + texteRq);

    fetch(url + rq + texteRq).then(res => res.json())
        .then(data => {
            alimPage(data);
            afficheDetail(data.Search[0].Title)
        })
        .catch(console.error);
}



function afficheDetail(titre) {
    // affiche les détails en appelant omdb sur le titre
    let url = 'http://www.omdbapi.com/?apikey=f6e256e1&';
    let rqTitre = 't=';
    fetch(url + rqTitre + titre).then(res => res.json())
        .then(data => majDetail(data))
        .catch(console.error);
}


function majDetail(data) {
    // alimente des données de la section "reponse"

    let afficheFilm = document.querySelector("#affiche0");
    let imgFilm = document.createElement("img");
    imgFilm.src = data.Poster;
    imgFilm.alt = data.Title;
    afficheFilm.appendChild(imgFilm);
 
    let titre = document.querySelector("#titre");
    titre.value = data.Title;
    let annee = document.querySelector("#annee");
    annee.value = data.Year;
    let genre = document.querySelector("#genre");
    genre.value = data.Genre;
    let realisateur = document.querySelector("#realisateur");
    realisateur.value = data.Director;
    let acteurs = document.querySelector("#acteurs");
    acteurs.value = data.Actors;

}

function alimPage(dataTotale) {
    console.log(dataTotale)
    let dataT = dataTotale.Search;
    
    affichageListeFilm();
    
   //affichage liste des films :
    function affichageListeFilm() {
        let listeFilm = document.querySelector("#liste");
        for (let index = 1; index < 10; index++) {
            // dataT[index];
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
