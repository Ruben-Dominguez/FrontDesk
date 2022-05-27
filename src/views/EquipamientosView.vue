<template>
  <div class="gym-body">
    <div class="gym-container container">
      <b-row>
        <b-col class="gym-col padding-0">
          <div class="btn-group btn-group-justified">
            <h1>Equipamientos</h1>
            <div class="form-container" id="new-gym-button">
              <b-button class="new-gym" variant="light" @click="show">Nuevo equipo</b-button>
            </div>
          </div>
          <div id="gimnasios">
            <b-row>
              
              <b-col md="3">
                <b-card
                title="Equipo 1"
                tag="article"
                style="max-width:20rem"
                class="mb-2"
                >
                  <div >
                    <img alt="gym-info"  class="img-gym" src="../assets/images/equipo1.jpg" top>
                  </div>
                  
                  <b-card-text class="text-left">
                    <h6>Tipo de equipo</h6>
                    <p>  Tipo de equipo</p>

                    <h6>Músculo que se trabaja</h6>
                    <p>  Músculo que se trabaja</p>

                    <h6>Grupo muscular</h6>
                    <p>  Grupo muscular</p>

                    <h6>Fecha de revisión</h6>
                    <p>  dd/mm/aa</p>

                  </b-card-text>
                </b-card>
              </b-col>

              <b-col md="3">
                <b-card
                title="Equipo 2"
                tag="article"
                style="max-width:20rem"
                class="mb-2"
                >
                  <div >
                    <img alt="gym-info"  class="img-gym" src="../assets/images/equipo1.jpg" top>
                  </div>
                  
                  <b-card-text class="text-left">
                    <h6>Tipo de equipo</h6>
                    <p>  Tipo de equipo</p>

                    <h6>Músculo que se trabaja</h6>
                    <p>  Músculo que se trabaja</p>

                    <h6>Grupo muscular</h6>
                    <p>  Grupo muscular</p>

                    <h6>Fecha de revisión</h6>
                    <p>  dd/mm/aa</p>

                  </b-card-text>
                </b-card>
              </b-col>

              <b-col md="3">
                <b-card
                title="Equipo 3"
                tag="article"
                style="max-width:20rem"
                class="mb-2"
                >
                  <div >
                    <img alt="gym-info"  class="img-gym" src="../assets/images/equipo1.jpg" top>
                  </div>
                  
                  <b-card-text class="text-left">
                    <h6>Tipo de equipo</h6>
                    <p>  Tipo de equipo</p>

                    <h6>Músculo que se trabaja</h6>
                    <p>  Músculo que se trabaja</p>

                    <h6>Grupo muscular</h6>
                    <p>  Grupo muscular</p>

                    <h6>Fecha de revisión</h6>
                    <p>  dd/mm/aa</p>

                  </b-card-text>
                </b-card>
              </b-col>

              <b-col md="3">
                <b-card
                title="Equipo 4"
                tag="article"
                style="max-width:20rem"
                class="mb-2"
                >
                  <div >
                    <img alt="gym-info"  class="img-gym" src="../assets/images/equipo1.jpg" top>
                  </div>
                  
                  <b-card-text class="text-left">
                    <h6>Tipo de equipo</h6>
                    <p>  Tipo de equipo</p>

                    <h6>Músculo que se trabaja</h6>
                    <p>  Músculo que se trabaja</p>

                    <h6>Grupo muscular</h6>
                    <p>  Grupo muscular</p>

                    <h6>Fecha de revisión</h6>
                    <p>  dd/mm/aa</p>

                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>

  <div id="myModal" class="modal"  style="overflow-y: scroll;">
    <div class="modal-content">
      <div class="close-div">
        <div class="close">&times;</div>
      </div>
      <h3 class="agregar-titulo">Nuevo equipo</h3>
      <b-form class="agregar-form" @submit="onSubmitAgregar">
        <b-form-group id="input-group-agregar">
          <b-container class="bv-example-row">
            <b-row>
              <b-col>
                <label >Fotografía</label>
                <b-form-input
                  id="input-3"
                  v-model="nombreGimnasio"
                  type="text"
                  placeholder="Ingresa el nombre"
                  required
                ></b-form-input>

                <label >Nombre de la máquina</label>
                <b-form-input
                  id="input-3"
                  v-model="direccionGimnasio"
                  type="text"
                  placeholder="Ingresa la dirección"
                  required
                ></b-form-input>

                <label > Periodo de mentenimiento</label>
                <b-form-input
                  id="input-3"
                  v-model="coloniaGimnasio"
                  type="text"
                  placeholder="Ingresa la colonia"
                  required
                ></b-form-input>

              </b-col>
              <b-col>
                <label>Tipo de equipo</label>
                <b-form-input
                  id="input-3"
                  v-model="telefonoGimnasio"
                  type="tel"
                  placeholder="Ingresa el número de télefono"
                  required
                ></b-form-input>

                <label>Frecuencia de mantenimiento</label>
                <b-form-input
                  id="input-3"
                  v-model="paisGimnasio"
                  type="text"
                  placeholder="Ingresa el país"
                  required
                ></b-form-input>

                <label>Múculo que se trabaja</label>
                <b-form-input
                  id="input-3"
                  v-model="cpGimnasio"
                  type="text"
                  placeholder="Ingresa el código postal"
                  required
                ></b-form-input>

                <label>Grupo mucular</label>
                <b-form-input
                  id="input-3"
                  v-model="ciudadGimnasio"
                  type="text"
                  placeholder="Ingresa la ciudad"
                  required
                ></b-form-input>

              </b-col>
              
            </b-row>
          </b-container>
        </b-form-group>
        <b-button class="restablecer-button" type="submit" variant="primary">Enviar</b-button>
      </b-form>
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
        },
        emailNuevo: ''
      }
    },
    mounted() {
      var modal = document.getElementById("myModal");
      var span = document.getElementsByClassName("close")[0];

      span.onclick = function() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onSubmitAgregar(event) {
        event.preventDefault()
        alert(JSON.stringify(this.emailNuevo))
      },
      show(event) {
        event.preventDefault()
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
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

  .gym-body {
    background-color: #ECDFF4;
    height: 100vh;
  }

  .gym-container {
    background-color: #ECDFF4;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 5%;
  }

  .gym-col {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px 20px 20px 20px;
  }

  .form-container{
    width: 100%;
  }

  h1 {
    text-align: left;
    font-size: 2rem;
    font-weight: 600;
    width: 100%;
    padding: 1rem 0 1rem 1rem;
  }

  .new-gym {
    float: right;
    width: 30%;
    background-color: white;
    border-color: lightgrey;
    color: blueviolet;
  }

  .new-gym:hover {
    background-color: lightgrey;
    border-color: lightgrey;
    color: blueviolet;
  } 

    #gimnasios{
    width: auto;
    height: auto;
  } 

  #new-gym-button{
    padding: 1rem 1rem 0 1rem;
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

  .restablecer-button {
    width: 30%;
  }

  .restablecer-button,
  .login-button {
    background-color: #8D2BC0;
    border-color: #8D2BC0;
    color: white;
  }

  .restablecer-button:hover,
  .login-button:hover {
    background-color: #560b7d;
    border-color: #560b7d;
  }


  .modal {
    display: none; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: hidden;
    
  }

  .modal-content {
    display: flex;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    border-radius: 16px;
    width: 80%;
    
  }

  .close-div {
    display: flex;
    justify-content: right;
    width: 100%;
  }

  .close {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    width: auto;
    height: auto;
    padding: .5rem 1rem;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .restablecer-titulo {
    padding: .5rem 0 2.5rem 0;
  }

  .restablecer-form {
    width: 72%;
    margin: 0 0 4rem 0;
  }

  #input-3 {
    width: auto%;
  }
  
  .text-left{
    text-align: left !important;
    padding: .5rem .5rem .5rem .5rem;
  }

  .img-gym{
    max-width:100%;
  }
</style>