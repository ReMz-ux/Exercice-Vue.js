<template>
    <h1>Texte Interpolé</h1>
    <h2>{{ message }}</h2>
    <p>{{ age }}</p>
    <!--Affichage depuis une fonction-->
    <h3>{{ SuperAffichage() }}</h3>
    <!--Opérations mathématiques-->
    <p>{{ 10+15 }}</p>
    <p>{{ 999-250 }}</p>
    <!--Exemple d'utilisation de conditions ternaire dans le template-->
    <p class="ternaire">{{ age >= 18 ? 'Adulte' : 'Mineur' }}</p>
    <!--Affichage de variables-->
    <p>{{ playStation5 }}</p>
    <p>{{ xboxSeriesX }}</p>
    <p>{{ isOnline }}</p>
    <p>{{ années }}</p>
    <p>{{ untableau[2] }}</p>
    <!--Affichage des propriétés d'un objet-->
    <p>{{ Objet.nom }}</p>
    <p>{{ Objet.marque }}</p> 
    <p>{{ Objet.modele }}</p>
    <p>{{ Objet.annéeSortie }}</p>
    <p>{{ afficherConsole() }}</p>
</template>

<script setup>
const message = 'Bien jouer tu a reussi a interpoler du texte !';
const age = 25;

function SuperAffichage() {
    return 'Affichage depuis une fonction !';
}

let playStation5 = "PlayStation 5";
let xboxSeriesX = "Xbox Series X";
let isOnline = true; 
let années = 2024;
let untableau = ["MMORPG", "FPS", "Aventure", "Simulation", 2025];

let Objet = {
    nom: "Console",
    marque: "Sony",
    modele: "PlayStation 5",
    annéeSortie: 2020
};

Objet.name; // "Console"
Objet.marque; // "Sony"
Objet["modele"];
Objet.annéeSortie; // 2020

function afficherConsole() {
    return `La ${Objet.nom} de marque ${Objet.marque} est sortie en ${Objet.annéeSortie}.`;
}


</script>