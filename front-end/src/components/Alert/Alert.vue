<template>
  <div>
    <transition name="fade">
      <b-alert variant="success" :show="alert.success" dismissible>Użytkownik został poprawnie dodany do bazy danych!</b-alert>
    </transition>
    <transition name="fade">
      <b-alert variant="danger" :show="alert.error" dismissible>Niestety wystąpił błąd połączenia się z bazą danych. Dokładny komunikat błędu znajduje się w konsoli</b-alert>
    </transition>
  </div>
</template>

<script>

export default {
  name: "Alert",
  props: [
    "alert"
  ]
}

</script>

<style scoped>

</style>