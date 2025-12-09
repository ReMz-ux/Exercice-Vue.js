<template>
<h1>Ici c'est le composant AttributeBinding</h1>
<h2>Directive v-bind pour lier les attributs HTML</h2>
<a :href="lelien">Lien vers Google</a>
 <!-- <a href="https://www.google.com">Lien vers Google</a> -->
        <a v-bind:href="leLien">Lien vers Google</a>
    <!-- Optionnellement on peut utiliser :href="leLien" -->    
        <a :href="leLien">Lien vers Google</a>

        <p v-bind:alt="NomPersonnage">super paragraphe</p>
        <p :alt="NomPersonnage">super paragraphe</p>
        <!-- On peut aussi utiliser des conditions ternaires dans le v-bind -->
        <p v-bind:alt="11===11 ? 'Vrai' : 'Faux'">super paragraphe</p>


</template>

<script setup>
import { ref } from 'vue';
const lelien = ref('https://www.google.com');
let NomPersonnage = ref('Jean Bambois');
</script>