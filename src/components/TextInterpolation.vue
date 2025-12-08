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
</template>

<script setup>
const message = 'Bien jouer tu a reussi a interpoler du texte !';
const age = 25;

function SuperAffichage() {
    return 'Affichage depuis une fonction !';
}



</script>