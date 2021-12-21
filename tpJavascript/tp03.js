// affichage 10 fois mon prenom
console.log("affichage 10 fois mon prenom :");
let monPrenom = "Denis";
for (let index = 0; index < 10; index++) {
    console.log(monPrenom);
}


// affichage des nombres de 1 à 10
console.log("affichage des nombres de 1 à 10 :");
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

// affichage des nombres pairs de 1 à 10
console.log("affichage des nombres pairs de 1 à 10 :");
for (let index = 2; index <= 10; index += 2) {
    console.log(index);
}

// affichage tableau
console.log("affichage tableau :");
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
for (let index = 0; index < array.length; index++) {
    console.log("elt index : " + index + " valeur : " + array[index]);

}

// elements pairs du tableau
console.log("affichage éléments pairs du tableau :")
// let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
        console.log("elt index : " + index + " valeur : " + array[index]);
    }
}
