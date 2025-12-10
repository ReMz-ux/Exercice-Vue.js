<template>
    <div class="container">
        <h1>TP Style Dynamique</h1>
        
        <p class="message info">Cliquez sur les cartes pour changer leur couleur</p>
        
        <div class="cards-wrapper">
            <div 
                @click.left="selectionCard(1)" 
                :style="{backgroundColor: selectedCard1 ? '#ff6b6b' : '#667eea'}" 
                class="card"
            >
                <h2>Grand titre</h2>
                <p class="status">{{ selectedCard1 ? 'Activé' : 'Désactivé' }}</p>
            </div>
            
            <div 
                @click.left="selectionCard(2)" 
                :style="{backgroundColor: selectedCard2 ? '#4caf50' : '#764ba2'}" 
                class="card"
            >
                <h2>Petit titre</h2>
                <p class="status">{{ selectedCard2 ? 'Activé' : 'Désactivé' }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    //Declaration des variables selectCard
    let selectedCard1 = ref(false);
    let selectedCard2 = ref(false);

    //Fonction selectionCard qui prend en parametre un numero de card
    function selectionCard(cardNumber) {
        if (cardNumber === 1) {
            selectedCard1.value = !selectedCard1.value;
        } else if (cardNumber === 2) {
            selectedCard2.value = !selectedCard2.value;
        }
    }
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

h1 {
    color: #fff;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.message {
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.message.info {
    background-color: rgba(33, 150, 243, 0.3);
    color: #fff;
    border: 2px solid #2196f3;
}

.cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.card {
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border: 3px solid rgba(255, 255, 255, 0.3);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.card:active {
    transform: translateY(-2px);
}

.card h2 {
    color: #fff;
    margin: 0 0 1rem 0;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.status {
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    display: inline-block;
}
</style>