import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props:{
    name3:"clara",
    age3: 33

  }
})

export default app;
