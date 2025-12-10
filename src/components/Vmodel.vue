<template>
<form action="">
    <label for="text">Age :</label>
    <input type="number" v-model="age">
    <label for="text">Couleur :</label>
    <input type="text" v-model="color">
    
</form>
</template>

<script setup>
import { ref } from 'vue';
// Exemple de base d'utilisation de v-model
const message = ref('');
const age = ref(28);
const color = ref('blue');
//Exemple dynamique

</script>