<template>
<div class="body-color">
  <div class="caja">
    <h1>Información De La Cuenta Recepción</h1>


    <div class="form-container">
      <b-form class="form-campos" @submit="onSubmit">
        <div class="box_left">
          <div class="clearfix"></div>
          <label>Nombre</label><br>
          <input type="text" class="campo" value="Rodrigo Roberto Hernandez Estrada" readonly>
        </div>
        <div class="box_right">
          <label class="left">Correo electrónico</label>
          <input class="campo left" type="text" value="rodrigo.estrada@gmail.com" readonly>
        </div>
        <div class="clearfix"></div>
        <div class="box_left">
          <label>Dirección</label><br>
          <input class="campo" type="text" value="Campo de los Girasoles #454" readonly>
        </div>
        <div class="box_right">
          <label class="left">Télefono</label><br>
          <input type="text" class="campo left" value="6142584563" readonly>
        </div>
        <div class="clearfix"></div>
        <div class="box_left">
          <label>Fecha de Nacimiento</label><br>
          <input class="campo" type="text" value="01/05/2000" readonly>
        </div>
        <div class="box_right">
          <label class="left">Género</label><br>
          <input type="text" class="campo left" value="Másculino" readonly>
        </div>
        <div class="clearfix"></div>
        <div class="box_left">
          <label>Tipo de Usuario</label><br>
          <input class="campo" type="text" value="FrontDesk" readonly>
        </div>
        <div class="box_right">
          <label class="left">Fecha de Ingreso</label><br>
          <input type="text" class="campo left" value="07/03/2021" readonly>
        </div>
        <div class="clearfix"></div>

        <br>
      </b-form>
    </div>
    <img src="../assets/images/persona.png">
    <div class="clearfix"></div>

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
  height: 100vh;
  position: relative;
  padding-top: 4rem;
}

img{
  display: inline-block;
  margin-top:5%;

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

.form-campos{
  display: inline-block;
  float: left;
  width: 70%;
  margin-top:2.7%;
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
  margin-top: 1.4%;
  margin-right: 10%;
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
