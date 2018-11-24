<template>
  <main class="website">
    <b-container>
      <header class="website-header">
        <h1 class="website-header-title"><b>Zadanie</b> testowe</h1>
      </header>
      <Form></Form>
    </b-container>
  </main>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Form from "./components/Form/Form";

export default {
  name: 'app',
  components: {
    Form
  },
}

</script>

<style lang="scss" src="./styles/main.scss"></style>
