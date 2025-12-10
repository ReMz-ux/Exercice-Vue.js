<template>
    <div class="container">
        <!-- Creation d'une appli ou il y aura 2 inputs et 2 titres -->
        <h1>TP DynanamicStyle</h1>
        
        <form>
            <div class="form-group">
                <input type="text" v-model="title1" placeholder="Entrez le premier titre (hello)">
                <h3 v-if="showTitle1" :class="classTitle1" class="message">Tu as reussi a afficher le message cacher</h3>
            </div>
            
            <div class="form-group">
                <input type="text" v-model="title2" placeholder="Entrez le deuxième titre (world)">
                <h3 v-if="showTitle2" :class="classTitle2" class="message">Tu as reussi a afficher le message cacher</h3>
            </div>
            
            <!-- Les bouttons vont permettre d'afficher les titre ou pas -->
            <div class="button-group">
                <button @click="showTitle1 = !showTitle1" type="button" class="btn btn-toggle">
                    {{ showTitle1 ? 'Masquer' : 'Afficher' }} le premier titre
                </button>
                <button @click="showTitle2 = !showTitle2" type="button" class="btn btn-toggle">
                    {{ showTitle2 ? 'Masquer' : 'Afficher' }} le deuxième titre
                </button>
            </div>
        </form>
    </div>
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
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

.message {
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
    font-size: 1.1rem;
    background-color: rgba(255, 255, 255, 0.9);
    color: #333;
    margin: 0;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.maClasseHello {
    border: 3px solid #4caf50;
    background-color: rgba(76, 175, 80, 0.2);
    color: #4caf50;
    font-weight: bold;
    animation: slideIn 0.5s ease;
}

.maClasseWorld {
    border: 3px solid #2196f3;
    background-color: rgba(33, 150, 243, 0.2);
    color: #2196f3;
    font-weight: bold;
    animation: slideIn 0.5s ease;
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}

.btn-toggle {
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

.btn-toggle:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.btn-toggle:active {
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
