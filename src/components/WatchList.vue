<template>
    <div class="container">
        <h1>Liste de film TP</h1>
        <h2 v-if="mesFilm.length != 0" class="message success">Votre dernier film ajouté est : {{ mesFilm[mesFilm.length - 1] }}</h2>
        <h2 v-else class="message info">Aucun film ajouté pour le moment.</h2>
        
        <!-- 1 input qui va permettre d'ajouter 1 film au tableau -->
        <div class="form-group">
            <label for="text">Ajoute ton film :</label>
            <input type="text" v-model="newFilm" placeholder="Entrez le nom du film">
            <!-- Boutton pour ajouter le film au tableau -->
            <button @click="ajouterFilm" class="btn-add">Ajouter</button>
        </div>

        <!-- Liste des films -->
        <ul v-if="mesFilm.length > 0" class="film-list">
            <li v-for="(film, index) in mesFilm" :key="index" class="film-item">
                {{ film }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
   //Notre tableau vide 
   const mesFilm = ref([]);
    const newFilm = ref('');

    // Fonction pour ajouter un film
    const ajouterFilm = () => {
        if (newFilm.value.trim() !== '') {
            mesFilm.value.push(newFilm.value);
            newFilm.value = ''; // Vider l'input après l'ajout
        }
    };

    // Consulter la liste des films dans la console
    console.log(mesFilm);

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

.btn-add {
    padding: 0.8rem 2rem;
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.btn-add:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.btn-add:active {
    transform: translateY(0);
}

.film-list {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
}

.film-item {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    margin-bottom: 0.8rem;
    border-radius: 8px;
    color: #333;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.film-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
}
</style>