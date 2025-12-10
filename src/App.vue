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
import StyleDynamiqueTP2 from './components/StyleDynamiqueTP2.vue'
import WatchList from './components/WatchList.vue'
import ConditionnalRendering from './components/ConditionnalRendering.vue'
import StyleDynamiqueTP from './components/StyleDynamiqueTP.vue'
</script>

<template>
<div id="app" class="min-vh-100">
  <Navbar />
  <h1>Bienvenue sur ton applications de test VUE.JS</h1>
  
<TPRéactivité />
<StyleDynamiqueTP />
<StyleDynamiqueTP2 />
<WatchList />
<ConditionnalRendering />

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
