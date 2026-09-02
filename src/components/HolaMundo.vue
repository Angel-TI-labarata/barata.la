<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  nombre: {
    type: String,
    default: 'mundo',
  },
})

const visitas = ref(0)

const saludo = computed(() => `Hola ${props.nombre}`)

function sumarVisita() {
  visitas.value += 1
}
</script>

<template>
  <section class="hola">
    <h1>{{ saludo }}</h1>
    <p class="dominio">barata.la</p>
    <button type="button" @click="sumarVisita">
      Me gusta ({{ visitas }})
    </button>
  </section>
</template>

<style scoped>
.hola {
  text-align: center;
  padding: 3rem 1rem;
}

h1 {
  font-size: 3rem;
  margin: 0 0 0.5rem;
}

.dominio {
  color: #646cff;
  letter-spacing: 0.1em;
  margin: 0 0 2rem;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1rem;
  font-weight: 500;
  background-color: #1a1a1a;
  color: #fff;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}
</style>
