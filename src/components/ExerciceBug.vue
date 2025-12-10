<template>
    <button @click.left ="increment" type="button" class="btn btn-success">+</button>
<button @click.left ="desincrement" type="button" class="btn btn-danger">-</button>
<p>{{ count }}</p>
<p>Affichage de la fonction : {{ AfficherUserName }}</p>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const Name = ref('');
function increment() {
  count.value+= 10;
  if (count.value > 200) {
    return "C'est bon j'en est marre de m'incrementer !";
  }
}
function desincrement() {
  count.value-= 20;
}

function AfficherUserName() {
  
  if (Name.value === 'John Wick') {
    return "test";
  } else {
    return "un autre test";
  }
}
console.log("La fonction a bien été appelée !");
</script>