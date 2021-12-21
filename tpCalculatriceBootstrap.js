let resultat = 0;
let operateur = "";

function entreChiffres() {
    let zoneSaisie = document.querySelector("input");
    let saisie = zoneSaisie.value;
    // saisie = saisie + this.getAttribute("name");
    saisie = saisie + this.querySelector("h2").textContent;
    zoneSaisie.value = saisie;
    // console.log("coucou !");
}

function raz() {
    let zoneSaisie = document.querySelector("input");
    zoneSaisie.value = "";

}


function separateurDec() {
    let zoneSaisie = document.querySelector("input");
    let saisie = zoneSaisie.value;
    if (!saisie.includes(".")) {
        saisie = saisie + ".";
    }
    zoneSaisie.value = saisie;
}


function operation() {
    let zoneSaisie = document.querySelector("input");
    resultat = zoneSaisie.value;
    // operateur = this.getAttribute("name");
    operateur = this.querySelector("h2").textContent;
    document.querySelector("input").value = "";
}

function egal() {
    switch (operateur) {
        case "X":
            resultat = parseFloat(resultat) * parseFloat(document.querySelector("input").value);
            document.querySelector("input").value = resultat;
            break;
        case "/":
            resultat = parseFloat(resultat) / parseFloat(document.querySelector("input").value);
            document.querySelector("input").value = resultat;
            break;

        case "-":
            resultat = parseFloat(resultat) - parseFloat(document.querySelector("input").value);
            document.querySelector("input").value = resultat;
            break;

        case "+":
            resultat = parseFloat(resultat) + parseFloat(document.querySelector("input").value);
            document.querySelector("input").value = resultat;
            break;

        default:
            break;
    }
}

// function egal() {
//     switch (operateur) {
//         case "mult":
//             resultat = parseFloat(resultat) * parseFloat(document.querySelector("input").value);
//             document.querySelector("input").value = resultat;
//             break;
//         case "div":
//             resultat = parseFloat(resultat) / parseFloat(document.querySelector("input").value);
//             document.querySelector("input").value = resultat;
//             break;

//         case "sous":
//             resultat = parseFloat(resultat) - parseFloat(document.querySelector("input").value);
//             document.querySelector("input").value = resultat;
//             break;

//         case "add":
//             resultat = parseFloat(resultat) + parseFloat(document.querySelector("input").value);
//             document.querySelector("input").value = resultat;
//             break;

//         default:
//             break;
//     }
// }

// parametrage des événements
let evtChiffre = document.querySelectorAll(".chiffre");
evtChiffre.forEach(element => {
    element.onclick = entreChiffres;
});

let vseparateurDec = document.querySelector("#separateurDec");
vseparateurDec.onclick = separateurDec;

let vraz = document.querySelector("#raz");
vraz.onclick = raz;

let vegal = document.querySelector("#egal");
vegal.onclick = egal;

let voperateur = document.querySelectorAll(".ope");
voperateur.forEach(element => {
    element.onclick = operation;
});