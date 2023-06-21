// controllo Vue
console.log(`Vue OK` , Vue)

// Installo Vue
const { createApp } = Vue

// Vue
const app = createApp({
    data() {
      return {
      }
    }
  })
  
// Stampa Vue
  app.mount('#root')