<template>
    <h1>TP Event Binding</h1>
<form action="">
    <label for="texte">Saisir du texte</label>
    <input type="text" @keyup="ecrireTexte"/> 
    <p>Le contenue de l'input est : {{ texte }}</p>
    <label for="texte2">Saisir du texte dans le deuxième champ</label>
    <input type="text" @keyup="ecrireTexte2">
    <p>Le contenue du deuxième input est : {{ texte2 }}</p>
    <button v-on:click="buttonClicked">Clique ici pour afficher le message !</button>

</form>
</template>

<script setup>
    import { ref } from 'vue';
const texte = ref("")

function ecrireTexte(event) {
    texte.value = event.target.value
}
const texte2 = ref("")

function ecrireTexte2(event) {
    texte2.value = event.target.value
}

function buttonClicked() {
    alert("Bien jouer tu sais cliquer sur un bouton !")
}

</script>