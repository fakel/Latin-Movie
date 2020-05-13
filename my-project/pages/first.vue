<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        my-project
      </h1>
      <h2 class="subtitle">
        My ace Nuxt.js project
      </h2>
      <mdb-icon fab icon="500px" />
      <mdb-icon icon="ad" />
      <mdb-btn color="primary">MDB Button</mdb-btn>
      <mdb-btn tag="a" gradient="peach" floating><mdb-icon icon="leaf"/></mdb-btn>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import { mdbIcon, mdbBtn } from 'mdbvue';


export default {
  components: {
    Logo,
    mdbIcon,
    mdbBtn
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
