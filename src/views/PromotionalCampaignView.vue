<template>
<div class="body-color">
  <div class="caja1">
    <table style="width:90%">
      <tr>
        <th>
          <h1>Información Del Gimnasio</h1>
        </th>

      </tr>

      <tr>
        <th>
          <h2>Dirección</h2>
          <h3>Calle de las Girasoles #568 C.P 31300</h3>
        </th>
        <th>
          <h2>Ciudad</h2>
          <h3>Chihuahua</h3>
        </th>
        <th>
          <h2>Télefono</h2>
          <h3>6391289362</h3>
        </th>
      </tr>
      <tr>
        <td>
          <h2>Aforo</h2>
          <h3>74 personas</h3>
        </td>
        <td>
          <h2>Aforo Permitido</h2>
          <h3>100 personas</h3>
        </td>
      </tr>
    </table>

  </div>
  <br><br><br>
  <b-button class="button-blank" type="button" variant="light" onclick='window.location.href="/campaign-add"'>+ Crear Promoción</b-button>

  <div class="caja2">


    <div class="clearfix"></div>
    <table style="width:60%" class="table2">
      <tr>
        <th>
          <h1>Campañas</h1>
        </th>
      </tr>
      <tr>
        <th>
          <h1 class="tituloCampaña">Descuento por dia de las madres</h1>
        </th>
      </tr>
      <tr>
        <th>
          <h2>Porcentaje de Descuento</h2>
        </th>
        <th>
          <h2>Tipo de Usuario</h2>
        </th>

      </tr>
      <tr>
        <td>
          <h3>25%</h3>
        </td>
        <td>
          <h3>Socio</h3>
        </td>
      </tr>
      <tr>
        <td>
          <h2>Fecha de Publicación</h2>
        </td>
        <td>
          <h2>Fecha de Caducidad</h2>
        </td>

      </tr>
      <tr>
        <td>
          <h3>05 de Mayo</h3>
        </td>
        <td>
          <h3>15 de Mayo</h3>
        </td>
      </tr>
      <tr>
        <td>
          <h2>Descripción de la campaña</h2>
        </td>
      </tr>
      <tr>
        <td>
          <h3>Esta promoción únicamente es válida para madres.</h3>
        </td>
      </tr>
    </table>

    <b-dropdown no-caret right class="edit" toggle-class="" variant='none'>
      <template #button-content>
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.9998 27.0834C26.1504 27.0834 27.0832 26.1506 27.0832 25C27.0832 23.8494 26.1504 22.9167 24.9998 22.9167C23.8492 22.9167 22.9165 23.8494 22.9165 25C22.9165 26.1506 23.8492 27.0834 24.9998 27.0834Z" fill="#8D2BC0"
            stroke="#8D2BC0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M39.5833 27.0834C40.7339 27.0834 41.6667 26.1506 41.6667 25C41.6667 23.8494 40.7339 22.9167 39.5833 22.9167C38.4327 22.9167 37.5 23.8494 37.5 25C37.5 26.1506 38.4327 27.0834 39.5833 27.0834Z" fill="#8D2BC0" stroke="#8D2BC0"
            stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10.4168 27.0834C11.5674 27.0834 12.5002 26.1506 12.5002 25C12.5002 23.8494 11.5674 22.9167 10.4168 22.9167C9.26624 22.9167 8.3335 23.8494 8.3335 25C8.3335 26.1506 9.26624 27.0834 10.4168 27.0834Z" fill="#8D2BC0" stroke="#8D2BC0"
            stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </template>
      <b-dropdown-item to="/campaign-edit">Editar</b-dropdown-item>
      <b-dropdown-item href="#" @click="show">Eliminar</b-dropdown-item>
    </b-dropdown>
    <img class="porcentOff" src="../assets/images/descuento15.png">
    <div class="clearfix"></div>
  </div>

  <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="close-div">
        <div class="close" @click="close">&times;</div>
      </div>
      <div class="clearfix"></div>
      <h3 class="restablecer-titulo">¿Estás seguro de eliminar la campaña?</h3>
      <div class="clearfix"></div>
      <br>
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
    onSubmitRestablecer(event) {
      event.preventDefault()
      alert(JSON.stringify(this.emailNuevo))
    },
    show(event) {
      event.preventDefault()
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    close(event) {
      event.preventDefault()
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    eliminar(event) {
      event.preventDefault()
      var modal = document.getElementById("myModal");
      alert("Campaña Eliminada Correctamente!");
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

.body-color {
  background-color: #ECDFF4;
  height: 120vh;
  position: relative;
  padding-top: 4rem;
}

.edit {
  border-color: #d9a1f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  height: 45px;
  float: right;
  margin-top: 1%;
  margin-right: 3%;
  background-color: transparent;

}

.caja1.h1 {
  text-align: left;
  font-size: 2rem;
  padding: 1rem 3rem 1rem 3rem;
  font-weight: 600;
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

label {
  text-align: left !important;
  width: 100%;
  padding: .5rem 0 .5rem 0;
}

input {
  height: 4rem;
  color: rgb(102, 102, 102)
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
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
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

.right {
  text-align: right;
  position: relative;
  left: 200%;
  top: 5%;
}



.edit:hover {
  background-color: #ecd0fb;
  border-color: #560b7d;
}

th,
td {
  text-align: left;
}

.table2 {
  display: block;
  float: left;
  margin-left: 4%;
}


.button-blank {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  width: 200px;
  height: 5%;
  color: #560b7d;
  float: right;
  margin-right: 12%;
  margin-top: -20px;
}

.button-blank:hover {
  background-color: #ecd0fb;
  border-color: #560b7d;
}

.caja1 {
  border-radius: 20px;
  width: 80%;
  height: auto;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3%;
  background-color: #ffffff;
}

.caja2 {
  border-radius: 20px;
  width: 80%;
  height: auto;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 0px;
  margin-top: 3%;
  background-color: #ffffff;
}

.porcentOff {
  float: right;
  width: 13%;
  margin-top: 5%;
  padding-bottom: 2%;
  margin-right: 8%;


  vertical-align: baseline;
}

table {
  margin-left: 4%;
}

.tituloCampaña {
  font-size: 1.7em;
  text-decoration-line: underline;

}

.restablecer-titulo {
  display: inline;
  float: center;
  padding: 5.5rem 0 20rem 0;
  font-size: 2em;
  font-weight: 700;

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
.cancel-button:hover {
  background-color: gray;
  border-color: #560b7d;
}


.subbmit-button:hover {
  background-color: #560b7d;
  border-color: #560b7d;
}

</style>
