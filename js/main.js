// Exercice n°1 : Hello World.
console.log("Excercice n°1 : Hello World");
console.log("Hello World");
var world = "Hello world";
console.log(world, "ceci est le message avec la variable de type :", typeof(world));
console.log("==================");

// Exercice n°2 : Calcul divers.
console.log("Excercice n°2 : Calcul divers");
console.log(3*3);
console.log(12/0);
console.log(4+9+78);
console.log(12-7);
console.log(5^4);
console.log("==================");


// Exercice n°3 : Communiquer avec l'ordinateur
console.log("Exercice n°3 : Communiquer avec l'ordinateur");
// var nom = prompt("Quel est votre nom ?");
console.log("Bonjour", nom, "bienvenu à toi !");
console.log("==================");

//Exercice n°4 : Nom et prénom
console.log("Exercice n°4 : Nom et prénom");
var nom = "Lemichel ";
var prenom = "Antoine";
console.log("Bonjour", nom + prenom);
console.log("==================");


// Exercice n°5 : Des caractères au nombre
console.log("Exercice n°5 : Des caractères au nombre");
var myNumber = "123";
var myNumberInt = parseInt(myNumber);
console.log(typeof(myNumberInt), myNumberInt, "<- Chiffres");
console.log(typeof(myNumber), myNumber, "<- Caractères");
console.log("==================");


// Exercice n°6 : Majuscule et minuscule
console.log("Exercice n°6 : Majuscules et minuscules");
var maStringMiniscule = "bonjour";
var maStringMajuscule = "SALUT";
console.log(maStringMiniscule.toLocaleUpperCase());
console.log(maStringMajuscule.toLocaleLowerCase());
console.log("==================");

// Exercice n°7 : True ou False ?
console.log("Exercice n°7 : True ou False ?");
var myTrue = "True";
var myFalse;
if(myTrue){
    console.log("True");
}
else {
    console.log("False");
}
if(!myFalse)
{
    console.log("False");
}
else {
    console.log("True");
}
console.log("==================");
// Exercice n°8 : Calculer mon âge
console.log("Exercice n°8: Calculer mon âge");
// var annee = prompt("Quelle est l'année actuel ?");
// var anneeNaissance = prompt("Quelle est ton année de naissance ?");

// var anneeInt = parseInt(annee);
// var anneeNaissanceInt = parseInt(anneeNaissance);
// console.log("Ton âge est de :", anneeInt - anneeNaissanceInt, "ans !");
console.log("==================");

// Exercice n°9 : Problème de chaussures
console.log("Exercice n°9 : Problème de chaussures");
var chaussure = 70;
var jean = 59;
var tShirt = 20;
var reduction = (chaussure + jean + tShirt) * 0.20;
var total = (chaussure + jean + tShirt) - reduction;

console.log("Le prix total à payer est de :", total, "€");
console.log("==================");

// Exercice n°10 : Une calculatrice Javascript
console.log("Exercice n°10 : Une calculatrice Javascript");
// var chiffre1 = prompt("Choisis le premier chiffre à additionner :");
// var chiffre2 = prompt("Choisis le deuxième chiffre à additionner : ");
// var chiffre1Int = parseInt(chiffre1);
// var chiffre2Int = parseInt(chiffre2);
// var resultat = chiffre1Int + chiffre2Int;
// alert(resultat);
console.log("==================");


//Exercice n°11 : Travailler avec les propriétés
console.log("Exercice n°11 : Travailler avec les propriétés");
var prenom = prompt("Votre prénom :");
var nom = prompt("Votre nom :");
console.log(prenom.substring(0,1).toLocaleUpperCase()+ prenom.substring(prenom.length -1).toLocaleUpperCase());
console.log(nom.substring(0,1).toLocaleUpperCase() + nom.substring(nom.length -1).toLocaleUpperCase());
console.log(prenom.substring(0, 1).toLocaleUpperCase() + prenom.substring(prenom.length -1).toLocaleUpperCase() + nom.substring(0, 1).toLocaleUpperCase() + nom.substring(nom.length -1).toLocaleUpperCase());