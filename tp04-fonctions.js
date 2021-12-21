// fonction constante

function constante() {

    return 33;

}

console.log("resultat fonction constante : " + constante());


// bonjour untel

function bonjour(prenom) {

    return "Bonjour " + prenom;
}

console.log(bonjour("Denis"))

// fonction calcul

function calcul(a, b) {
    if (!a || !b) {
        throw "vous devez fournir 2 paramètres"
    }

    if (typeof a != "number" || typeof b != "number") {
        throw "les parametres doivent être numérique !"
    }

    return a * b + a + b;

}

console.log();
console.log("Exercice Fonction calcul : ");
console.log("resultat : " + calcul(2, 3));
// console.log("Appel avec des chaînes de caractère : ");
// console.log("resultat : " + calcul("2", "3"));


// fonction contrôle tableau :

function controleTableau(tableau) {
    if (tableau.length == 0) {
        return false;
    }

    for (let index = 0; index < tableau.length; index++) {
        if (typeof tableau[index] != "number") {
            return false;
        }

    }

    return true;
}

console.log("appel avec tableau ne contenant que des nombres :");
console.log("resultat : " + controleTableau([0, 1, 2, 3.5, 10]));
console.log("appel avec tableau contenant des nombres et une chaîne de caractère :");
console.log("resultat : " + controleTableau([0, 1, 2, "2", 3.5, 10]));
console.log("appel avec tableau vide :");
console.log("resultat : " + controleTableau([]));


// fonction moyenne
function calculMoyenne(tableau) {

    if (tableau.length == 0) {
        return 0;
    }

    if (Array.isArray(tableau) == false) {
        throw "le parametre doit être un tableau"
    }


    let somme = 0;
    for (let index = 0; index < tableau.length; index++) {
        if (typeof tableau[index] != "number") {
            throw "tableau contenant des éléments non numériques !"
        }
        somme = somme + tableau[index];
    }
    return somme / tableau.length;
}

console.log("appel avec tablau numérique : ");
console.log("moyenne : " + calculMoyenne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("appel avec tablau vide : ");
console.log("resultat : " + calculMoyenne([]));

// exception non prise en charge !
console.log("appel avec tablau contenant une chaine de caractère : ");


try {
    console.log("moyenne : " + calculMoyenne([1,"2",3,4,5,6,7,8,9,10]));
} catch (error) {
    console.log(error); 
}

console.log("appel avec param qui n'est pas un tableau : ");

try {
    console.log("moyenne : " + calculMoyenne([1,"2",3,4,5,6,7,8,9,10]));
} catch (error) {
    console.log(error); 
}


// fonction Maj : mise en majuscule de la première lettre
function maj(chaineDeCharactere) {
    let premiereLettre = chaineDeCharactere.substring(0, 1);
    premiereLettre = premiereLettre.toUpperCase();
    let finChaine = chaineDeCharactere.substring(1);

    return premiereLettre + finChaine;
}

console.log("mise en majuscule de la première lettre : ")
let phrase = "bonjour à tous !"
console.log("phrase : " + phrase);
console.log("resultat : " + maj(phrase))

// fonction phrase maj : mise en majuscule de la première lettre de chaque mot

function majPhrase(phrase) {

    if (phrase.length == 0) {
        return phrase;
    }

    let mots = phrase.split(" ");
    let phraseMaj = "";
    let space = " ";
    for (let index = 0; index < mots.length; index++) {
        // mots[index] = maj(mots[index]);
        if (index == 0) {
            space = "";
        } else {
            space = " ";
        }

        phraseMaj = phraseMaj + space + maj(mots[index]);

    }
    // phraseMaj = phraseMaj + maj(mots[mots.length - 1]);

    return phraseMaj;

}

console.log("mise en majuscule de la première lettre de chaque mots : ")
// let phrase = "bonjour à tous !"
console.log("phrase : " + phrase);
console.log("resultat : " + majPhrase(phrase))


// TP05 fonction Calcul :
console.log("fonction calcul avec controle des paramètres :")
console.log("1 seul param :")
try {
    console.log(calcul(2));
} catch (error) {
    console.log(error);

}

console.log("3 param :") // seul les 2 premiers param sont pris en compte !
try {
    console.log(calcul(2, 3, 4));
} catch (error) {
    console.log(error);

}

console.log("param nom numérique :")
try {
    console.log(calcul(2, "3"));
} catch (error) {
    console.log(error);

}