<template>
  <div class="intro-container">
    <img src="../assets/logo.png" alt="">
    <HomeSentence />
  </div>
</template>

<script>
import HomeSentence from '../components/HomeSentence.vue'

export default {
  name: 'MainHome',
  components: {
    HomeSentence
  }
}
</script>

<style>
html {
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #ffffff 85%, #2FBD8D 110%);
}

.intro-container {
  text-align: center;
  margin-top: 17%;
}

img {
  height: 208px;
  width: 194px;
  text-align: center;
}
</style>