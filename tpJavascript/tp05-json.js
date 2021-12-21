let societe = {
    "nom": "Google",
    "siege social": "Googleplex, Mountain View, California, United States",
    "fondateurs": [{ "nom": "Page", "prenom": "Larry", "date_de_naissance": "1973-03-26", "ville_naissance": "East Lansing", "etat_naissance": "Michigan" },
    { "nom": "Brin", "prenom": "Sergey", "date_de_naissance": "1973-08-21", "ville_naissance": "Moscou", "etat_naissance": "URSS" }],
    "chiffreAffaire": [{ "2008": 16.42 },
    { "annee": "2012", "ca": 37.97 },
    { "annee": "2016", "ca": 89.46 },
    { "annee": "2018", "ca": 136.2 }]
}

function trouverLesFondateurs(societe) {
    let fondateurs = "";
    societe.fondateurs.forEach(element => {
        fondateurs = fondateurs + " " + element.prenom + " et " + element.nom + " ";
    });
    return fondateurs;
}



function affichage() {

    let titre = document.querySelector("h1");
    let titre2 = document.createElement('h2');
    titre2.textContent = "Quelques données au sujet de Google : ";
    titre.after(titre2);
    let fondateurs = document.createElement("p");
    fondateurs.textContent = "Les fondateurs de Google sont "
    titre2.after(fondateurs);
    let f1 = document.createElement("span");
    f1.setAttribute('id', 'f1');
    f1.textContent = trouverLesFondateurs(societe);
    fondateurs.appendChild(f1);
    fondateurs.after(affichageCA(societe));
}


function affichageCA(societe) {
    let ca = societe.chiffreAffaire;
    let tb = document.createElement("table");
    let tbh = document.createElement("thead");
    let tbhr = document.createElement("tr");
    tb.appendChild(tbh);
    tbh.appendChild(tbhr);
    tch = document.createElement("th");
    tch.textContent = "Année";
    tbhr.appendChild(tch);
    tch = document.createElement("th");
    tch.textContent = "CA";
    tbhr.appendChild(tch);
    let tbody = document.createElement("tbody");
    tb.appendChild(tbody);

    ca.forEach(element => {
        let ligne = document.createElement("tr");
        let annee = document.createElement("td");
        annee.textContent = element.annee;
        let cal = document.createElement("td");
        cal.textContent = element.ca;
        tbody.appendChild(ligne);
        ligne.appendChild(annee);
        ligne.appendChild(cal);
    });

    return tb;



}

affichage();