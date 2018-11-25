<template>
  <section class="section form">
    <Alert :alert="alert"></Alert>
    <h2 class="section-header">1. Zakoduj formularz</h2>
    <b-form @submit.prevent="submit">
      <b-row>
        <b-col md="4">
          <b-form-group >
            <b-form-input v-model.trim="credentials.name" v-validate="'required'" :class="{'is-valid': !errors.has('name') && name.changed, 'is-invalid': errors.has('name')}" name="name" type="text" required placeholder="Podaj imię"></b-form-input>
            <span class="success" v-if="!errors.has('name') && name.changed">
              <svg aria-hidden="true" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
            </span>
            <span class="error" v-if="errors.has('name')">
              <svg aria-hidden="true" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
            </span>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <b-form-input v-model="credentials.surName" v-validate="'required'" :class="{'is-valid': !errors.has('surname') && surName.changed, 'is-invalid': errors.has('surname')}" name="surname" type="text" required placeholder="Podaj nazwisko"></b-form-input>
            <span class="success" v-if="!errors.has('surname') && surName.changed">
              <svg aria-hidden="true" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
            </span>
            <span class="error" v-if="errors.has('surname')">
              <svg aria-hidden="true" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
            </span>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <b-form-select v-model="credentials.age" id="select">
              <option :value="null" disabled>Ile masz lat?</option>
              <option value="0-9">0-9 lat</option>
              <option value="9-16">9-16 lat</option>
              <option value="16-21">16-21 lat</option>
            </b-form-select>
            <span class="arrow" v-if="!errors.has('age')">
              <svg aria-hidden="true" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
            </span>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <b-form-input v-model="credentials.location" v-validate="'required'" :class="{'is-valid': !errors.has('location') && location.changed, 'is-invalid': errors.has('location')}" name="location" type="text" required placeholder="Gdzie mieszkasz?"></b-form-input>
            <span class="success" v-if="!errors.has('location') && location.changed">
              <svg aria-hidden="true" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
            </span>
            <span class="error" v-if="errors.has('location')">
              <svg aria-hidden="true" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
            </span>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <b-form-input v-model="credentials.email" name="email" type="text" v-validate="'required|email'" :class="{'is-valid': !errors.has('email') && email.changed, 'is-invalid': errors.has('email')}" required placeholder="Podaj adres e-mail"></b-form-input>
            <span class="success" v-if="!errors.has('email') && email.changed">
              <svg aria-hidden="true" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
            </span>
            <span class="error" v-if="errors.has('email')">
              <svg aria-hidden="true" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
            </span>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-button variant="success" class="btn-full" @click="submit">Wyślij formularz</b-button>
        </b-col>
      </b-row>
    </b-form>
  </section>
</template>

<script>

import { mapFields } from 'vee-validate';
import axios from 'axios';

export default {
  name: "Form",
  data: () => ({
    credentials: {
      name: '',
      surName: '',
      age: null,
      location: '',
      email: ''
    },
    alert: {
      error: false,
      success: false,
      message: ''
    }
  }),
  computed: {
    ...mapFields({
      name: 'name',
      surName: 'surname',
      location: 'location',
      email: 'email'
    })
  },
  methods: {
    async submit() {
      const valid = await this.$validator.validateAll();
      if (valid) {

        //Call API
        try {
          const data = await axios.post('http://localhost:4000/api/users/', this.credentials);
          console.log(data);

          this.alert.success = true;
          this.alert.error = false;
        } catch (err) {
          console.log(err);

          this.alert.success = false;
          this.alert.error = true;
          this.alert.message = err;
        }

        //Reset Validator
        this.$validator.reset();

        //Reset fields
        for (let key in this.credentials) {
          this.credentials[key] = '';
        }

        this.credentials.age = null;
      }
    }
  }
}

</script>

<style lang="scss" src="./Form.scss"  ></style>