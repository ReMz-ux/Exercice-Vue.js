<template>
  <div class="container">
    <h1>TP Event Binding</h1>

    <form class="form-card">
      <div class="form-group">
        <label for="texte">Saisir du texte</label>
        <input type="text" @keyup="ecrireTexte" />
        <p class="feedback">Le contenu de l'input est : <strong>{{ texte }}</strong></p>
      </div>

      <div class="form-group">
        <label for="texte2">Saisir du texte dans le deuxième champ</label>
        <input type="text" @keyup="ecrireTexte2" />
        <p class="feedback">Le contenu du deuxième input est : <strong>{{ texte2 }}</strong></p>
      </div>

      <button type="button" class="alert-btn" @click="buttonClicked">
        Clique ici pour lancer un message d'alerte
      </button>
    </form>
  </div>
</template>


<script setup>
    import { ref } from 'vue';
const texte = ref("")

function ecrireTexte(event) {
    texte.value = event.target.value
}
const texte2 = ref("")

function ecrireTexte2(event) {
    texte2.value = event.target.value
}

function buttonClicked() {
    alert("Bien jouer tu sais cliquer sur un bouton !")
}

</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto;
  font-family: "Segoe UI", sans-serif;
}

h1 {
  text-align: center;
  color: lawngreen;
  margin-bottom: 20px;
}

.form-card {
  padding: 20px;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: bold;
  color: #333;
}

input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 15px;
}

input:focus {
  outline: none;
  border-color: #0066ff;
  box-shadow: 0 0 5px rgba(0, 102, 255, 0.4);
}

.feedback {
  margin-top: 5px;
  color: #666;
}

.alert-btn {
  width: 100%;
  padding: 12px;
  background-color: #d9534f;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}

.alert-btn:hover {
  background-color: #c9302c;
}
</style>