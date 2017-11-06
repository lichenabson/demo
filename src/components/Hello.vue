<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/test">Go to Foo</router-link>
    <h2><a href="/test">welcome</a></h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
