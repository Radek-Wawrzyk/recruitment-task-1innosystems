<template>
  <section class="section form">
    <h2 class="section-header">1. Zakoduj formularz</h2>
    <b-form>
      <b-row>
        <b-col md="4">
          <b-form-group >
            <b-form-input v-model="credentials.name" type="text" required placeholder="Podaj imię"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <b-form-input v-model="credentials.surName" type="text" required placeholder="Podaj nazwisko"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <b-form-input v-model="credentials.age" type="text" required placeholder="Ile masz lat?"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <b-form-input v-model="credentials.location" type="text" required placeholder="Gdzie mieszkasz?"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <b-form-input v-model="credentials.email" type="text" required placeholder="Podaj adres e-mail"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-button variant="success" class="btn-full">Wyślij formularz</b-button>
        </b-col>
      </b-row>
    </b-form>
  </section>
</template>

<script>

export default {
  name: "Form",
  data: () => ({
    credentials: {
      name: '',
      surName: '',
      age: '',
      location: '',
      email: ''
    }
  }),
}

</script>

<style lang="scss" src="./Form.scss" scoped ></style>