<template>
<div class="clearfix"></div>
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
  <div class="submenu2">
    <h4 class="fix-submenu">Editar Cuenta</h4>
    <svg class="vector_edit" width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.9176 1.2153C16.5744 1.35744 16.2626 1.56578 16 1.82843L2.5 15.3284L1 20.8284L6.5 19.3284L20 5.82843C20.2626 5.56578 20.471 5.25398 20.6131 4.91082C20.7553 4.56766 20.8284 4.19986 20.8284 3.82843C20.8284 3.45699 20.7553 3.0892 20.6131 2.74603C20.471 2.40287 20.2626 2.09107 20 1.82843C19.7374 1.56578 19.4256 1.35744 19.0824 1.2153C18.7392 1.07316 18.3714 1 18 1C17.6286 1 17.2608 1.07316 16.9176 1.2153Z"
        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  </div>
  <div class="submenu3" onclick='window.location.href="/cuentas-add"'>
    <h4 class="fix-submenu">Nueva Cuenta</h4>
    <svg class="vector_add" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6702 0.99994V24.3404" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1 12.6702H24.3405" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  </div>
</div>
<div class="body-color">

  <div class="caja">
    <div class="content">
      <h1>Información De La Cuenta Instructor</h1>
      <div class="form-container">
        <b-form class="form-campos" @submit="onSubmit">
          <div class="box_left">
            <div class="clearfix"></div>
            <label>Nombre</label><br>
            <input v-model="form.nombre" type="text" class="campo" placeholder="Rodrigo Roberto Hernandez Estrada">
          </div>
          <div class="box_right">
            <label class="left">Correo electrónico</label>
            <input v-model="form.correo" class="campo left" type="text" placeholder="rodrigo.estrada@gmail.com">
          </div>
          <div class="clearfix"></div>
          <div class="box_left">
            <label>Dirección</label><br>
            <input v-model="form.direccion" class="campo" type="text" placeholder="Campo de los Girasoles #454">
          </div>
          <div class="box_right">
            <label class="left">Télefono</label><br>
            <input v-model="form.telefono" type="text" class="campo left" placeholder="6142584563">
          </div>
          <div class="clearfix"></div>
          <div class="box_left">
            <label>Fecha de Certificación</label><br>
            <input v-model="form.fNacimiento" class="campo" type="text" placeholder="01/05/2000" onfocus="(this.type = 'date')" id="date">
          </div>
          <div class="box_right">
            <label class="left">Género</label><br>
            <input v-model="form.genero" type="text" class="campo left" placeholder="Másculino">
          </div>
          <div class="clearfix"></div>
          <div class="box_left">
            <label>Tipo de Usuario</label><br>
            <input class="campo" type="text" value="Instructor" readonly>
          </div>
          <div class="box_right">
            <label class="left">Fecha de Ingreso</label><br>
            <input v-model="form.fIngreso" type="text" class="campo left" placeholder="07/03/2021" onfocus="(this.type = 'date')" id="date">
          </div>
          <div class="clearfix"></div>

          <br>
        </b-form>
      </div>
      <img class="fotooo" src="../assets/images/persona.png">

    </div>
    <div class="clearfix"></div>
    <div class="botones">
      <b-button class="subbmit-button2" @click="onSubmit" type="submit" variant="primary">Guardar</b-button>
      <b-button class="cancel-button2" type="submit" variant="primary" @click="cancelar">Cancelar</b-button>
    </div>
    <div class="clearfix"></div>
  </div>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="close-div">
        <div class="close" @click="close">&times;</div>
      </div>
      <div class="clearfix"></div>
      <h3 class="restablecer-titulo">¿Estás seguro de eliminar la cuenta?</h3>
      <div class="clearfix"></div>
      <b-button class="cancel-button" type="submit" variant="primary" @click="close">Cancelar</b-button>
      <b-button class="subbmit-button" type="submit" variant="primary" @click="eliminar">Eliminar</b-button>
      <div class="clearfix"></div>
    </div>
  </div>


</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: '',
        correo: '',
        direccion: '',
        telefono: '',
        fCertificacion: '',
        genero: '',
        tUser: 'Instructor',
        fIngreso: ''
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
    onSubmitRestablecer(event) {
      event.preventDefault()
      alert(JSON.stringify(this.emailNuevo))
    },
    show(event) {
      event.preventDefault()
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    cancelar(event) {
      event.preventDefault()
      location.href = "/instructor";
    },
    close(event) {
      event.preventDefault()
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    eliminar(event) {
      event.preventDefault()
      var modal = document.getElementById("myModal");
      alert("Cuenta Eliminada Correctamente!");
      location.href = "/cuentas";
      modal.style.display = "none";
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

.fotooo {
  border-radius: 50%;
}

.menu {
  position: fixed;
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
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 30px;
  margin-top: 2px;
  margin-bottom: 1px;
  background-color: #78FF62;
  border-radius: 30px;
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

.body-color {
  top: 100px;
  background-color: #ECDFF4;
  height: 110vh;
  position: relative;
  padding-top: 4rem;

}

.content{
  display:block;
  position:center;
}
.botones{
  display:block;
  position:right;
}

.fotooo {
  border-radius: 50%;
}

img {
  display: inline-block;
  margin-top: 5%;

}

h2 {
  text-align: left;
  font-size: 1.5rem;
  padding: 0 1rem 0.5rem 0.2rem;
  font-weight: 450;
}

h3 {
  text-align: left;
  font-size: 1.2rem;
  padding: 0 7.1rem 1rem 0.5rem;
  font-weight: 400;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  padding: 2rem 7.1rem 1rem 0.5rem;
  margin-top: 30px;
  margin-bottom: 35px;
}



input {
  height: 3rem;
  text-align: left;
  color: rgb(102, 102, 102)
}

.campo {
  border: 3px solid #8D2BC0;
  border-radius: 10px;
  width: 100%;
  height: 55px;
  padding: 3px 8px;
  margin-bottom: 50px;
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
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  display: block;
  align-items: center;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 45%;
  border-radius: 16px;
}


.close {
  float: right;
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

.clearfix {
  float: none;
  clear: both;
}

.form-campos {
  display: inline-block;
  float: left;
  width: 70%;
  margin-top: 2.7%;
  margin-bottom: -30px;
}

.right {
  display: block;
  float: right;
  margin-right: 8%;
}

.left {
  display: block;
  float: left;
  margin-left: 8%;
}

.box_left {
  display: inline-block;
  float: left;
  margin-left: 5%;
  width: 46%
}

.box_right {
  display: inline-block;
  float: left;
  margin-left: 1%;
  width: 46%
}



th,
td {
  text-align: left;
}

.form-container label {
  float: left;
  color: #8D2BC0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  left: 0px;
}

.caja {
  border-radius: 50px;
  width: 82%;
  height: auto;
  margin-left: 10%;
  margin-top: 1%;
  margin-right: 20%;
  background-color: #ffffff;
}

table {
  margin-left: 4%;
}

.cancel-button {
  display: inline;
  float: center;
  background-color: #FFFFFF;
  border-color: #8D2BC0;
  border-radius: 8px;
  color: #757575;
  margin-right: 2%;
  margin-left: 5%;
  margin-top: 1%;
  width: 200px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

.cancel-button2 {
  background-color: #FFFFFF;
  border-color: #8D2BC0;
  border-radius: 8px;
  color: #757575;
  float: right;
  width: 220px;
  height: 50px;
  margin-right: 2%;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 1%;
}

.subbmit-button {
  display: inline;
  float: center;
  background-color: #8D2BC0;
  border-color: #8D2BC0;
  border-radius: 8px;
  color: white;
  margin-right: 8%;
  margin-top: 1%;
  width: 200px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

.subbmit-button2 {
  background-color: #8D2BC0;
  border-color: #8D2BC0;
  border-radius: 8px;
  color: white;
  float: right;
  margin-right: 0px;
  width: 220px;
  height: 50px;
  margin-right: 5%;
  margin-bottom: 1%;
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
</style>
