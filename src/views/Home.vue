<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getAnime } from '@/services/anime'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const anime = await getAnime(20)
      console.log(anime)
    }
  }
}
</script>
