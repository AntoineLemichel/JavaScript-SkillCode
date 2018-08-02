// Exercice n°1 : Hello World.
// console.log("Excercice n°1 : Hello World");
// console.log("Hello World");
// var world = "Hello world";
// console.log(world, "ceci est le message avec la variable de type :", typeof (world));
// console.log("==================");

// Exercice n°2 : Calcul divers.
// console.log("Excercice n°2 : Calcul divers");
// console.log(3 * 3);
// console.log(12 / 0);
// console.log(4 + 9 + 78);
// console.log(12 - 7);
// console.log(5 ^ 4);
// console.log("==================");


// Exercice n°3 : Communiquer avec l'ordinateur
// console.log("Exercice n°3 : Communiquer avec l'ordinateur");
// var nom = prompt("Quel est votre nom ?");
// console.log("Bonjour", nom, "bienvenu à toi !");
// console.log("==================");

//Exercice n°4 : Nom et prénom
// console.log("Exercice n°4 : Nom et prénom");
// var nom = "Lemichel ";
// var prenom = "Antoine";
// console.log("Bonjour", nom + prenom);
// console.log("==================");


// Exercice n°5 : Des caractères au nombre
// console.log("Exercice n°5 : Des caractères au nombre");
// var myNumber = "123";
// var myNumberInt = parseInt(myNumber);
// console.log(typeof (myNumberInt), myNumberInt, "<- Chiffres");
// console.log(typeof (myNumber), myNumber, "<- Caractères");
// console.log("==================");


// Exercice n°6 : Majuscule et minuscule
// console.log("Exercice n°6 : Majuscules et minuscules");
// var maStringMiniscule = "bonjour";
// var maStringMajuscule = "SALUT";
// console.log(maStringMiniscule.toLocaleUpperCase());
// console.log(maStringMajuscule.toLocaleLowerCase());
// console.log("==================");

// Exercice n°7 : True ou False ?
// console.log("Exercice n°7 : True ou False ?");
// var myTrue = "True";
// var myFalse;
// if (myTrue) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// if (!myFalse) {
//   console.log("False");
// } else {
//   console.log("True");
// }
// console.log("==================");
// Exercice n°8 : Calculer mon âge
// console.log("Exercice n°8: Calculer mon âge");
// var annee = prompt("Quelle est l'année actuel ?");
// var anneeNaissance = prompt("Quelle est ton année de naissance ?");

// var anneeInt = parseInt(annee);
// var anneeNaissanceInt = parseInt(anneeNaissance);
// console.log("Ton âge est de :", anneeInt - anneeNaissanceInt, "ans !");
// console.log("==================");

// Exercice n°9 : Problème de chaussures
// console.log("Exercice n°9 : Problème de chaussures");
// var chaussure = 70;
// var jean = 59;
// var tShirt = 20;
// var reduction = (chaussure + jean + tShirt) * 0.20;
// var total = (chaussure + jean + tShirt) - reduction;

// console.log("Le prix total à payer est de :", total, "€");
// console.log("==================");

// Exercice n°10 : Une calculatrice Javascript
// console.log("Exercice n°10 : Une calculatrice Javascript");
// var chiffre1 = prompt("Choisis le premier chiffre à additionner :");
// var chiffre2 = prompt("Choisis le deuxième chiffre à additionner : ");
// var chiffre1Int = parseInt(chiffre1);
// var chiffre2Int = parseInt(chiffre2);
// var resultat = chiffre1Int + chiffre2Int;
// alert(resultat);
// console.log("==================");


//Exercice n°11 : Travailler avec les propriétés
// console.log("Exercice n°11 : Travailler avec les propriétés");
// var prenom = prompt("Votre prénom :");
// var nom = prompt("Votre nom :");
// console.log(prenom.substring(0, 1).toLocaleUpperCase() + prenom.substring(prenom.length - 1).toLocaleUpperCase());
// console.log(nom.substring(0, 1).toLocaleUpperCase() + nom.substring(nom.length - 1).toLocaleUpperCase());
// console.log(prenom.substring(0, 1).toLocaleUpperCase() + prenom.substring(prenom.length - 1).toLocaleUpperCase() + nom.substring(0, 1).toLocaleUpperCase() + nom.substring(nom.length - 1).toLocaleUpperCase());
// console.log("==================");


// Exercice n°12 : Le nombre le plus grand
// console.log("Exercice n°12 : Le nombre le plus grand");
// var nombre1 = 5;
// var nombre2 = 7;
// var nombre3 = 9;
// var nombre4 = 11;
// console.log(Math.max(nombre1, nombre2, nombre3, nombre4));
// console.log("==================");


// Exercice n°13 : Condition d'âge 
// console.log("Exercice n°13 : Condition d'âge");
// var age = prompt("Quel âge as-tu?");
// if(age >= 21){
//     console.log("Accès autorisé");
// }
// if(age % 3){
//     console.log("Ton âge est pair");
// }
// if(age / 4){
//     console.log("Ton âge est au carré");
// }
// if(age < 0 || age != Number) {
//     console.log("Dis moi ton vrai âge !");
// }
// console.log("==================");

// Exercice n°14 : Le nombre caché 
// console.log("Exercice n°14 : Le nombre caché");
// var secret = Math.floor(Math.random() * 100) + 1;
// var vie = 6;

// console.log(secret);

// var choixJoueur = Number(prompt("Choisis un chiffre entre 1 et 100"));
// while (vie != 0 && choixJoueur != secret) {
//   if (choixJoueur < secret) {
//     console.log("Le chiffre est plus grand");
//     choixJoueur = Number(prompt("Choisis un chiffre entre 1 et 100"));
//     vie--;
//     console.log("Vie restante : " + vie);
//   }
//   if (choixJoueur > secret) {
//     console.log("Le chiffre est plus petit");
//     choixJoueur = Number(prompt("Choisis un chiffre entre 1 et 100"));
//     vie--;
//     console.log("Vie restante : " + vie);
//   }
//   if (choixJoueur == secret) {
//     console.log("Félicitation tu as trouvé le bon chiffre !");
//     console.log("Il te restait", vie, "de vies");
//   }
//   if (vie == 0) {
//     console.log("Tu as perdu tu as 0 vie");
//   }
//   if (!choixJoueur) {
//     console.log("Il faut mettre un chiffre !");
//     choixJoueur = Number(prompt("Choisis un chiffre entre 1 et 100"));
//   }
// }
// console.log("==================");


//Exercice n°15 : Des nombres en boucle
// console.log("Exercice n°15 : Des nombres en boucle");
// for (var nombreBoucle = 1; nombreBoucle <= 100; nombreBoucle++) {
//   console.log(nombreBoucle);
// }
// console.log("==================");


//Exercice n°16 : Des nombres en boucle bis
// console.log("Exercice n°16 : Des nombres en boucle bis");
// for (var i = 0; i <= 100; i += 2) {
//   console.log(i);
// }
// console.log("==================");


//Exercice n°17 : Remplir la piscine


//Exercice n°18 : Calcul de cercle
// console.log("Exercice n°18 : Calcul de cercle");
// var x = Number(prompt("Rayon du cercle :"));
// function airCercle(x){
//     // Aire A = π x R² = 3,14 x 3² = 3,14 x 9 = 28,26 cm² 
//     console.log("Air du cercle : " + Math.floor(Math.PI * (x * 3)) + " cm");
// }
// function perimCercle(x){
//     //Périmètre P =2 x π x 7 = 43,96 cm (avec Pi arrondi à 3,14)
//     console.log("Périmètre du cercle :" + Math.floor(2 * Math.PI * x) + " cm");
// }
// perimCercle(x);
// airCercle(x);
// console.log("==================");

//Exercice n°19 : Une pyramide
// console.log("Exercice n°19 : Une pyramide");

// for (var i = 1; i < 6; i++) {
//   var etoile = '*';
//   console.log(etoile.repeat(i));
// }
// console.log("==================");


//Exercice n°20 : FIZZ BUZZ
// console.log("Exercice n°20 : FIZZ BUZZ");
// for (fizz = 1; fizz <= 100; fizz++) {
//   if (fizz != 0 && (fizz % 3 == 0)) {
//     console.log(fizz + " FIZZ");
//   }
//   if (fizz != 0 && (fizz % 5 == 0)) {
//     console.log(fizz + " BUZZ");
//   }
//   if (fizz != 0 && ((fizz % 3 == 0) && (fizz % 15 == 0))) {
//     console.log(fizz + " FIZZBUZZ");
//   }
// }
// console.log("==================");

//Exercice n°21 : Un échiquier 
// console.log("Exercice n°21 : Un échiquier");
// var echiquier = "";
// for (var i = 0; i < 8; i++) {
//   echiquier += "\n";
//   for (var x = 0; x < 8; x++) {
//     if (echiquier.length % 2 === 0) {
//       echiquier += "#";
//     } else {
//       echiquier += " ";
//     }
//   }
// }
// console.log(echiquier);
// console.log("==================");


//Exercice n°22 : Matrix dans la console
// console.log("Exercice n°22 : Matrix dans la console");
// for (var i = 0; i < 4; i++) {
//   for (var y = 0; y < 4; y++) {
//     if (i === y) {
//       console.log(1);
//     } else {
//       console.log(0);
//     }
//   }
//   console.log('-----------');
// }

// Exercice n°23 : Nombre pair ?
// function panier(x) {
//   var y = Math.round(x);
//   if (y % 2 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }

//   return x;
// }

// x = prompt("Donner le montant de votre panier :");
// panier(x);

//Exercice n°24 : Vous avez dit factorielle ?
// console.log("Exercice n°24 : Vous avez dit factorielle ?");

// function factorielle(x) {
//   var numberFact = 1;
//   for (var n = 1; n < x; n++) {
//     numberFact += numberFact * n;
//   }
//   if (!Number.isInteger(x)) {
//     console.log("Le chiffre indiqué n'est pas entier.");
//   } else {
//     console.log(numberFact);
//   }
// }
// x = Number(prompt("Entre un chiffre pour la factorisation :"));
// factorielle(x);


//Exercice n°25 : Les tirets ça compte !
// function suppTiret(res) {
//     if (!isNaN(res)) {
//       console.log("Erreur");
//     } else {
//       var str = res.replace(/-/gi, "_");
//       console.log(str);
//     }
// }
// suppTiret("Bonjour-Tout-Le-Monde-Voici-Ma-Variable");
// suppTiret(-2);


//Exercice n°26 : Entrainez-vous avec les tableaux
// var tableau = ["Eau", "Lait", "Chocolat", "Bière", "Ice Tea"];
// console.log("J'ai acheter l'article suivant :", tableau[0]);
// console.log("J'ai acheter l'article suivant :", tableau[tableau.length - 1]);
// console.log("J'ai acheter l'article suivant : ", tableau[2]);



//Exercice n°27 : Le tableau d'un homme
var homme = [{
  nom: "Tawin",
  prenom: "Andrew",
  age : 32,
  dateNaissance : "04/06/1986",
}];
function tableauHomme(homme){
  var table = {};
  for(var i = 0; i < homme.length; i++){
    console.log(homme.length);
  }
}
tableauHomme(homme);
console.log(homme.length);