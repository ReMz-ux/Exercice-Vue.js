<template>
<button @click.right="increment" class="btn-btn-primary">+</button>
<button @click.left="desincrement" class="btn-btn-primary">-</button>
<p>{{ count }}</p>
<button @click ="logEvent" class="btn-btn-primary">Cliquez Ici</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>



</template>

<script setup>
import { ref } from 'vue';
function desincrement() {
  count.value-= 20;
}

const count = ref(0);
function increment() {
  count.value+= 11;
  if (count.value > 200) {
    return "C'est bon j'en est marre de m'incrementer !";
  }
}

 // Capter l'evenement click et indiquer les coordonnées de la souris
  function logEvent(event) {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
  }
</script>