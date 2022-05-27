<template>
<div class="body-color">
  <div class="caja">

    <h1 class="title">Agregar Nueva Cuenta de Socio</h1><br><br>
    <svg onclick="window.location.href='/cuentas'" class="close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path onclick="window.location.href='/cuentas'" d="M22 2L2 22M22 22L2 2L22 22Z" stroke="black" stroke-width="2.5" stroke-linecap="round" />
    </svg>

    <div class="columnas">
      <div class="separador-foto">
        <img id="fotito" src="../assets/images/no-img.png">
        <label>Fecha de Nacimiento</label>
        <input placeholder="Fecha de Nacimiento" type="date" class="campo" required>
        <label>Género</label>
        <b-form-select v-model="selectedGender" :options="optionsGender" class="campo" required></b-form-select>
        <label>Dirección</label>
        <input placeholder="Dirección" type="text" class="campo" required>
        <label>Número de Celular</label>
        <input placeholder="Número de Celular" type="tel" class="campo" required>
        <label>Membresía</label>
        <input placeholder="Membresía" type="text" class="campo" required>
        <label>Lista de Objetivos de Entrenamiento</label>
        <textarea id="objetivos" placeholder="Lista de Objetivos de Entrenamiento" type="text" style="resize:none" class="campo description"></textarea>
      </div>
      <b-form class="separador" @submit="onSubmit">
        <label>Nombre</label>
        <input placeholder="Nombre" type="text" class="campo" v-model="this.$store.state.passed.name" required>
        <label>Tipo de Usuario</label>
        <b-form-select v-model="selected" :options="options" class="campo" disabled></b-form-select>
        <label>Correo Electrónico</label>
        <input placeholder="Correo Electrónico" type="email" class="campo" v-model="this.$store.state.passed.email" required>
        <label>Minutos de Antelación</label>
        <input placeholder="Minutos de Antelación" type="number" class="campo" required>
        <label>Fecha de Ingreso</label>
        <input placeholder="Fecha de Ingreso" type="date" class="campo" required>
        <label>Fecha de Corte</label>
        <input placeholder="Fecha de Corte" type="date" class="campo" required>
        <label>Referenciado por</label>
        <input placeholder="Referenciado por" type="text" class="campo" required>
        <label>Estatus</label>
        <b-form-select v-model="selectedStatus" :options="optionsStatus" class="campo" required></b-form-select>
        <div class="but-cont">
          <b-button class="cancel-button btn" variant="primary" onclick='window.location.href="/cuentas"'>Cancelar</b-button>
          <b-button class="subbmit-button btn" type="submit" variant="primary">Agregar</b-button>
        </div>
      </b-form>
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'socio',
      options: [
        { value: 'socio', text: 'Socio' },
        { value: 'recepcion', text: 'Recepción' },
        { value: 'intructor', text: 'Instructor'}
      ],
      selectedGender: null,
      optionsGender: [
        { value: null, text: 'Select' },
        { value: 'femenino', text: 'Femenino' },
        { value: 'masculino', text: 'Masculino'}
      ],
      selectedStatus: 'activo',
      optionsStatus: [
        { value: 'activo', text: 'Activo' },
        { value: 'inactivo', text: 'Inactivo'}
      ]
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
      this.$router.push('/cuentas/')
    },
    onSubmitRestablecer(event) {
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
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto', sans-serif;
  color: black;
}

.body-color {
  background-color: #ECDFF4;
  height: auto;
  position: relative;
  padding-top: 8rem;
  padding-bottom: 5%;
}

.title {
  display: block;
  text-align: center;
  font-size: 3rem;
  padding: 2rem 3rem 1rem 3rem;
  font-weight: 600;
  float: left;
  width: 93%;
}

h2 {
  text-align: left;
  font-size: 1.5rem;
  padding: 0 1rem 0.5rem 4.5rem;
  font-weight: 450;
}

h3 {
  text-align: left;
  font-size: 1.2rem;
  padding: 0 4rem 1rem 4.7rem;
  font-weight: 400;
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

.caja {
  border-radius: 50px;
  height: auto;
  margin-left: 10%;
  margin-right: 10%;
  background-color: #ffffff;
}

.subbmit-button {
  background-color: #8D2BC0;
  border-color: #8D2BC0;
  border-radius: 8px;
  color: white;
  width: 220px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
}

.cancel-button {
  background-color: #FFFFFF;
  border-color: #8D2BC0;
  border-radius: 8px;
  color: #757575;
  width: 220px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
}

.cancel-button:hover {
  background-color: gray;
  border-color: #560b7d;
}

.subbmit-button:hover {
  background-color: #560b7d;
  border-color: #560b7d;
}

.campo {
  border: 3px solid #8D2BC0;
  border-radius: 10px;
  width: 80%;
  height: 65px;
  padding: 3px 8px;
  margin-bottom: 1rem;
}

.close {
  display: block;
  text-align: right;
  width: 7%;
  cursor: pointer;
}

.columnas {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
}

#fotito {
  width: 20rem;
  margin-bottom: 1.5rem;
}

.separador,
.separador-foto {
  width: 50%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.separador {
  margin-top: .5rem;
}

.but-cont {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}

.btn{
  margin: 2rem;
}

#objetivos {
  height: 12rem;
}

label {
  color: #8D2BC0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin-left: 20%;
}


</style>
