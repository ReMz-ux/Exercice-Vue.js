<template>
<h1>Dr Mario</h1>
<img v-bind:src="lienImage" :alt="NomPersonnage" />
<p>{{ NomPersonnage }}</p>
<form action="">
    <input type="text">
</form>
<p v-bind:alt="AgePersonnage">Âge du personnage : {{ AgePersonnage }}   </p>
<p v-bind:alt="IterationAge">Âge du personnage dans 10 ans : {{ IterationAge }}</p>
<p v-bind:alt="NumeroFetiche">Numéro fétiche {{ NumeroFetiche }}</p>
</template>

<script setup>
    import { ref } from 'vue';
const lienImage = ref('https://www.smashbros.com/assets_v2/img/fighter/dr_mario/main2.png')
let NomPersonnage = ref('Dr Mario');
let AgePersonnage = ref(45);
let IterationAge = ref(AgePersonnage + 10);
let NumeroFetiche = ref('0.726523554184532');
</script>