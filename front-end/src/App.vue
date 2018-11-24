<template>
  <main class="website">
    <b-container>
      <header class="website-header">
        <h1 class="website-header-title"><b>Zadanie</b> testowe</h1>
      </header>
      <Form></Form>
      <Slider></Slider>
      <footer class="website-footer">
        <h3 class="website-footer-title"><b>Koniec</b> zadania ;)</h3>
      </footer>
    </b-container>
  </main>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Form from "./components/Form/Form";
import Slider from "./components/Slider/Slider";

export default {
  name: 'app',
  components: {
    Slider,
    Form
  },
}

</script>

<style lang="scss" src="./styles/main.scss"></style>
