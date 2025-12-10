<template>
    <div class="container">
        <h1>TP Conditionnal Rendering / List Rendering</h1>
        
        <h2 v-if="mesjeux.length != 0" class="message success">
            Votre dernier jeu ajouté est : {{ mesjeux[mesjeux.length - 1] }}
        </h2>
        <h2 v-else class="message info">Aucun jeu ajouté pour le moment.</h2>
        
        <!-- input pour ajouter des elements a la liste -->
        <div class="form-group">
            <label for="game-input">Ajouter un jeux à la liste :</label>
            <input type="text" id="game-input" v-model="newjeux" placeholder="Entrez le nom du jeux">
            
            <!-- Bouton Ajouter -->
            <button class="btn-add" @click="ajouterJeux">Ajouter le jeux à la liste</button>
            
            <!-- Bouton pour masquer la liste / et l'afficher -->
            <button @click="showList = !showList" class="btn-toggle">
                {{ showList ? 'Masquer la liste' : 'Afficher la liste' }}
            </button>
        </div>

        <!-- Liste des jeux -->
        <ul v-if="showList && mesjeux.length > 0" class="game-list">
            <li v-for="(jeux, index) in mesjeux" :key="index" class="game-item">
                {{ jeux }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    //Notre tableau vide
    const mesjeux = ref([]);
    const newjeux = ref('');
    const showList = ref(true);

    //fonction pour ajouter un jeux
    const ajouterJeux = () => {
        if (newjeux.value.trim() !== '') {
            mesjeux.value.push(newjeux.value);
            newjeux.value = ''; // Vider l'input après l'ajout
        }
    };
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
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

.message.success {
    background-color: rgba(76, 175, 80, 0.3);
    color: #fff;
    border: 2px solid #4caf50;
}

.message.info {
    background-color: rgba(33, 150, 243, 0.3);
    color: #fff;
    border: 2px solid #2196f3;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
}

label {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
}

input[type="text"] {
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

input[type="text"]:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.btn-add,
.btn-toggle {
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

.btn-add {
    background-color: #ff6b6b;
}

.btn-add:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.btn-toggle {
    background-color: #546e7a;
}

.btn-toggle:hover {
    background-color: #455a64;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.btn-add:active,
.btn-toggle:active {
    transform: translateY(0);
}

.game-list {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
}

.game-item {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    margin-bottom: 0.8rem;
    border-radius: 8px;
    color: #333;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.game-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
}
</style>