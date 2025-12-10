<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/navbar.vue'
import TextInterpolation from './components/TextInterpolation.vue'
import AttributeBinding from './components/AttributeBinding.vue'
import Compteur from './components/Compteur.vue'
import EventBinding from './components/EventBinding.vue'
import ExerciceBug from './components/ExerciceBug.vue'
import Vmodel from './components/Vmodel.vue'
import TPRéactivité from './components/TPRéactivité.vue'
import StyleDynamiqueTP from './components/StyleDynamiqueTP.vue'
</script>

<template>
<div id="app" class="min-vh-100">
  <Navbar />
  <h1>Bienvenue sur ton applications de test VUE.JS</h1>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
<TPRéactivité />
<StyleDynamiqueTP />
</div>
</template>

<style>


p {
  color: white;
}

#app {
  background-color: #0f2537; /* ta couleur personnalisée */
  min-height: 100vh;        /* couvre toute la hauteur */
}


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}


</style>
