<template>
    <div class="app-container">
    <h1 class="title">TP Le Nombre Gagnant</h1>
    <!-- Bouton qui ajoute 1 au compteur -->
<button @click.left="increment1" class="btn">+1</button>

<!-- Bouton qui ajoute 5 au compteur -->
<button @click.left="increment5" class="btn">+5</button>

<!-- Bouton de réinitialisation -->
<button @click.left="reset" class="btn">Réinitialiser</button>

<!-- Affichage du compteur  -->
<p>Le nombre actuel est : {{ count }}</p>

<p>{{ message }}</p>
</div>
</template>


<script setup>
    import { ref, watch } from 'vue';

    //Déclaration du compteur
    const count = ref(0);
//Fonction qui ajoute 1 au compteur
function increment1() {
  count.value+= 1;
}

//Fonction qui ajoute 5 au compteur
function increment5() {
  count.value+= 5;
}

// Fonction de réinitialisation du compteur
function reset() {
  count.value = 0;
}

//Message à afficher selon la valeur du compteur
 const message = ref("");

//Watcher qui surveille le compteur et affiche un message si le nombre 7 est atteint
watch(count, (newValue) => {
  if (newValue != 7) {
    message.value = "Ce n'est pas le bon nombre, réessaie !";
  } if (newValue === 7) {
    message.value = "Félicitations ! Tu as trouvé le nombre gagnant !";
  } if (newValue > 7) {
    message.value = "Tu as dépassé le nombre gagnant, recommence !";
  }
});

//Watcher sur le nombre afficher si on depasse 30, au bout de 3 secondes le compteur revient a 0
watch(count, (newValue) => {
  if (newValue > 30) {
    setTimeout(() => {
      count.value = 0;
      message.value = "Trop haut ! Le compteur a été réinitialisé.";
    }, 3000);
  }
});
</script>

<style scoped>
.app-container {
  background-color: #0f2537; /* fond bleu foncé */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    gap: 20px;
}

.title {
  color: lawngreen; /* texte vert vif */
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.btn {
  background-color: lawngreen;
  color: #0f2537;
  border: none;
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;
}

.btn:hover {
  background-color: #0f2537;
  color: lawngreen;
  border: 2px solid lawngreen;
}
</style>

