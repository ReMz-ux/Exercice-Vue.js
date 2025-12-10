<template>
<div @click.left="selectedCard1(1)" :style=" {backgroundColor: selectedCard1 ? 'red' : 'blue'}" class="card">
    <h1>Grand titre</h1>
    </div>
    <div @click.left="selectedCard2(2)" :style=" {backgroundColor: selectedCard2 ? 'green' : 'violet'}" class="box">
        <h2>Petit titre</h2>
</div>
</template>

<script setup>
    import { ref, watch } from 'vue';

    //Declaration des variables selectCard
    let selectedCard1 = ref(false);
    let selectedCard2 = ref(false);


    //Fonction selectionCard qui prend en parametre une card
    function selectionCard(selectedCard1, selectedCard2) {
      if (selectedCard1 === 1) {
        selectedCard1.value = true;
      } else if (selectedCard2 === 2) {
        selectedCard2.value = true;
      }
    }
</script>