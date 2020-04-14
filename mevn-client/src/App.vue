<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <router-link
        class="navbar-brand"
        tag="a"
        :to="{ name: 'Start' }"
      >logo</router-link>
    </nav>
    <h1>

    </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
