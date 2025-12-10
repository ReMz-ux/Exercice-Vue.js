<template>
    <!-- Creation d'une appli ou il y aura 2 inputs et 2 titres -->
    <h1>TP DynanamicStyle</h1>
<form action="">
<input type="text" v-model="title1" placeholder="Entrez le premier titre (hello)">
<h3 v-if="showTitle1" :class="classTitle1">Je m'affiche si le titre est Hello</h3>
<input type="text" v-model="title2" placeholder="Entrez le deuxième titre (world)">
<h3 v-if="showTitle2" :class="classTitle2">Je m'affiche si le titre est World</h3>
<!-- Les bouttons vont permettre d'afficher les titre ou pas -->
<button @click="showTitle1 = !showTitle1  "type="button" class="btn btn-dark">Afficher le premier titre</button>
<button @click="showTitle2 = !showTitle2" type="button" class="btn btn-dark">Afficher le deuxième titre</button>
</form>
</template>

<script setup>
    import { computed, ref, watch } from 'vue';

// Variable d'affichage des titres
 const showTitle1 = ref(false);
 const showTitle2 = ref(false);

 //Variable qui relie l'input a la variable title1
 let title1 = ref("");
  //Variable qui relie l'input a la variable title2
 let title2 = ref("");

    // On va calculer dynamiquement la classe CSS grace a computer
    const classTitle1 = computed(() => {
  return title1.value === "hello" ? "maClasseHello" : "";
});

const classTitle2 = computed(() => {
  return title2.value === "world" ? "maClasseWorld" : "";
});


 
</script>

<style scoped>
.maClasseHello {
  color: lawngreen;
}

.maClasseWorld {
  color: lawngreen;
}
</style>
