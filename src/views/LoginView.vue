<template>
  <div class="login-body">
    <div class="login-container container">
      <b-row>
        <b-col class="padding-0" md="auto">
          <img class="login-photo" alt="Login photo" src="../assets/images/login-photo.jpg">
        </b-col>
        <b-col class="login-col padding-0">
          <h1>Inicio de Sesión</h1>
          <div class="form-container">
            <b-form class="login-form" @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-1" label="Usuario" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.username"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Inicio de Sesión</b-button>
              <b-button variant="light">¿Olvidaste tu contraseña?</b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .padding-0{
    padding-right:0;
    padding-left:0;
}

  .login-body {
    background-color: #0DB5B5;
    height: 100vh;
  }

  .login-photo {
    width: 500px;
    border-radius: 20px 0 0 20px;
  }

  .login-container {
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .login-col {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0 20px 20px 0;
  }


</style>