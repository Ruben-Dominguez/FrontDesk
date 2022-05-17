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
              <b-form-group id="input-group-email">
                <label>Correo Electrónico</label>
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="text"
                  placeholder="Correo Electrónico"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-password">
                <label>Contraseña</label>
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button-group vertical>
                <b-button class="password-forget-button" variant="light">¿Olvidaste tu contraseña?</b-button>
                <b-button class="login-button" type="submit" variant="primary">Inicio de Sesión</b-button>
                
              </b-button-group>
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
          email: '',
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
    font-family: 'Roboto', sans-serif;
    color: black;
  }

  .padding-0{
    padding-right:0;
    padding-left:0;
}

  .login-body {
    background-color: #ECDFF4;
    height: 90vh;
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

  .form-container{
    width: 100%;
    padding: 0 3rem 0 3rem;
  }

  h1 {
    text-align: left;
    font-size: 2rem;
    padding: 0 3rem 3rem 3rem;
    font-weight: 600;
  }

  label {
    text-align: left !important;
    width: 100%;
    padding: .5rem 0 .5rem 0;
  }

  input {
    height: 4rem;
    color: rgb(102, 102, 102)
  }

  .login-button {
    background-color: #8D2BC0;
    border-color: #8D2BC0;
    color: white;
  }

  .login-button:hover {
    background-color: #560b7d;
    border-color: #560b7d;
  }

  .password-forget-button {
    background-color: white;
    border-color: white;
    color: black;
  }

  .password-forget-button:hover {
    background-color: lightgrey;
    border-color: lightgrey;
  } 

</style>