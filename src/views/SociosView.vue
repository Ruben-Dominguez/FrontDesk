<template>
<div class="body-color">
  <div class="menu">
    <div class="submenu1" @click="show">
      <h4 class="fix-submenu">Eliminar Cuenta</h4>
      <svg class="fix-submenu vector_trash" width="32" height="33" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.875 9.87463H8.125H34.125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M13 9.8746V6.58305C13 5.71008 13.3424 4.87286 13.9519 4.25558C14.5614 3.63829 15.388 3.2915 16.25 3.2915H22.75C23.612 3.2915 24.4386 3.63829 25.0481 4.25558C25.6576 4.87286 26 5.71008 26 6.58305V9.8746M30.875 9.8746V32.9154C30.875 33.7884 30.5326 34.6256 29.9231 35.2429C29.3136 35.8602 28.487 36.207 27.625 36.207H11.375C10.513 36.207 9.6864 35.8602 9.0769 35.2429C8.46741 34.6256 8.125 33.7884 8.125 32.9154V9.8746H30.875Z"
          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.25 18.1035V27.9782" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22.75 18.1035V27.9782" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class="submenu2" onclick='window.location.href="/frontdesk-edit"'>
      <h4 class="fix-submenu">Editar Cuenta</h4>
      <svg class="vector_edit" width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.9176 1.2153C16.5744 1.35744 16.2626 1.56578 16 1.82843L2.5 15.3284L1 20.8284L6.5 19.3284L20 5.82843C20.2626 5.56578 20.471 5.25398 20.6131 4.91082C20.7553 4.56766 20.8284 4.19986 20.8284 3.82843C20.8284 3.45699 20.7553 3.0892 20.6131 2.74603C20.471 2.40287 20.2626 2.09107 20 1.82843C19.7374 1.56578 19.4256 1.35744 19.0824 1.2153C18.7392 1.07316 18.3714 1 18 1C17.6286 1 17.2608 1.07316 16.9176 1.2153Z"
          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
    <div class="submenu3" onclick='window.location.href="/frontdesk-add"'>
      <h4 class="fix-submenu">Nueva Cuenta</h4>
      <svg class="vector_add" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6702 0.99994V24.3404" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 12.6702H24.3405" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
    <div class="submenu3" onclick='window.location.href="/frontdesk-add"'>
      <h4 class="fix-submenu">Agendar Cita</h4>
      <img class="icons" src="../assets/images/book.png">
    </div>
    <div class="submenu3" onclick='window.location.href="/frontdesk-add"'>
      <h4 class="fix-submenu">Registrar Pago</h4>
      <img class="icons" src="../assets/images/dollar.png">
    </div>
  </div>
  <div class="caja">

    <h1 class="title">Información del Socio</h1><br><br>
    <svg onclick="window.location.href='/cuentas'" class="close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path onclick="window.location.href='/cuentas'" d="M22 2L2 22M22 22L2 2L22 22Z" stroke="black" stroke-width="2.5" stroke-linecap="round" />
    </svg>

    <div class="columnas">
      <div class="separador-foto">
        <label>Nombre</label>
        <input placeholder="Nombre" type="text" class="campo" v-model="this.$store.state.passed.name" disabled>
        <label>Fecha de Nacimiento</label>
        <input placeholder="Fecha de Nacimiento" type="date" class="campo" disabled>
        <label>Género</label>
        <b-form-select v-model="selectedGender" :options="optionsGender" class="campo" disabled></b-form-select>
        <label>Tipo de Usuario</label>
        <b-form-select v-model="selected" :options="options" class="campo" disabled></b-form-select>
        <label>Dirección</label>
        <input placeholder="Dirección" type="text" class="campo" disabled>
        <label>Número de Celular</label>
        <input placeholder="Número de Celular" type="tel" class="campo" disabled>
        <label>Número de Telefono</label>
        <input placeholder="Número de Celular" type="tel" class="campo" disabled>
        <label>Membresía</label>
        <input placeholder="Membresía" type="text" class="campo" disabled>
        <label>Nivel de Fidelidad</label>
        <input placeholder="Nombre" type="text" class="campo" disabled>
        <label>Lista de Objetivos de Entrenamiento</label>
        <textarea id="objetivos" placeholder="Lista de Objetivos de Entrenamiento" type="text" style="resize:none" class="campo description" disabled></textarea>
      </div>
      <b-form class="separador" @submit="onSubmit">
        <img id="fotito" src="../assets/images/persona.png">
        <label>Correo Electrónico</label>
        <input placeholder="Correo Electrónico" type="email" class="campo" v-model="this.$store.state.passed.email" disabled>
        <label>Minutos de Antelación</label>
        <input placeholder="Minutos de Antelación" type="number" class="campo" disabled>
        <label>Fecha de Ingreso</label>
        <input placeholder="Fecha de Ingreso" type="date" class="campo" disabled>
        <label>Fecha de Corte</label>
        <input placeholder="Fecha de Corte" type="date" class="campo" disabled>
        <label>Referenciado por</label>
        <input placeholder="Referenciado por" type="text" class="campo" disabled>
        <label>Estatus</label>
        <b-form-select v-model="selectedStatus" :options="optionsStatus" class="campo" disabled></b-form-select>
      </b-form>
    </div>
    <img class="tabla" src="../assets/images/tabla1.png">
    <img class="tabla" src="../assets/images/tabla2.png">
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
  margin-top: 3%;
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
  border-radius: 50%;
}

.separador,
.separador-foto {
  width: 50%;
  margin-top: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.separador {
  margin-top: 3rem;
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

.menu {
  position: fixed;
  top: 0px;
  float: center;
  background: white;
  width: 100%;
  z-index: 9;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, .70);
  height: 120px;
}

.submenu1 {
  position: relative;
  bottom: -56%;
  float: right;
  padding-top: 12px;
  padding-right: 3.5px;
  padding-bottom: 7px;
  margin-right: 10px;
}

.submenu1:hover {
  cursor: pointer;
  margin-top: 1px;
  margin-bottom: 1px;
  background-color: #ecd0fb;

}

.submenu2 {
  position: relative;
  bottom: -56%;
  float: right;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-right: 3.5px;
  margin-right: 30px;
}

.submenu2:hover {
  cursor: pointer;
  margin-top: 2px;
  margin-bottom: 1px;
  background-color: #ecd0fb;
}

.submenu3 {
  position: relative;
  bottom: -56%;
  float: right;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-right: 3.5px;
  margin-right: 30px;
}

.submenu3:hover {
  cursor: pointer;
  margin-top: 2px;
  margin-bottom: 1px;
  background-color: #ecd0fb;
}

.fix-submenu {
  display: block;
  float: right;
}

.vector_trash {
  position: relative;
  top: -3px;
  margin-right: 2px;
}

.vector_edit {
  position: relative;
  top: 1px;
  margin-right: 5px;
}

.vector_add {
  position: relative;
  top: 1px;
  margin-right: 5px;
}

.restablecer-titulo {
  display: inline;
  float: center;
  padding: 1.5rem 0rem 10rem 0;
  font-size: 2em;
  font-weight: 700;
}

.tabla {
  width: 80%;
}

.icons {
  width: 26px;
}

</style>
