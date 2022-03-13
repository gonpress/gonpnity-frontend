<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<style>
</style>
<script>
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar}
}
</script>