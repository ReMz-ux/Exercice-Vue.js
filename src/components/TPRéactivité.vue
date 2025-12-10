<template>
    <div class="container">
        <h1>TP Le Nombre Gagnant</h1>
        
        <!-- Affichage du compteur -->
        <div class="counter-display">
            <p class="counter-label">Le nombre actuel est :</p>
            <p class="counter-value">{{ count }}</p>
        </div>

        <!-- Message de statut -->
        <div v-if="message" class="message" :class="messageClass">
            {{ message }}
        </div>

        <!-- Boutons d'action -->
        <div class="button-group">
            <button @click.left="increment1" class="btn btn-increment">+1</button>
            <button @click.left="increment5" class="btn btn-increment">+5</button>
            <button @click.left="reset" class="btn btn-reset">Réinitialiser</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch, computed } from 'vue';

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

// Classe CSS dynamique pour le message
const messageClass = computed(() => {
    if (count.value === 7) return 'success';
    if (count.value > 7) return 'warning';
    return 'info';
});
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

h1 {
    color: #fff;
    text-align: center;
    font-size: 2.5rem;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.counter-display {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.counter-label {
    color: #666;
    font-size: 1.1rem;
    margin: 0 0 0.5rem 0;
}

.counter-value {
    color: #667eea;
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.message {
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    transition: all 0.3s ease;
    animation: slideIn 0.5s ease;
}

.message.info {
    background-color: rgba(33, 150, 243, 0.3);
    color: #fff;
    border: 2px solid #2196f3;
}

.message.success {
    background-color: rgba(76, 175, 80, 0.3);
    color: #fff;
    border: 2px solid #4caf50;
}

.message.warning {
    background-color: rgba(255, 152, 0, 0.3);
    color: #fff;
    border: 2px solid #ff9800;
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.btn {
    padding: 0.8rem 2rem;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.btn-increment {
    background-color: #ff6b6b;
}

.btn-increment:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.btn-reset {
    background-color: #546e7a;
}

.btn-reset:hover {
    background-color: #455a64;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.btn:active {
    transform: translateY(0);
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

