<template>
<div class="body-color">
  <div class="caja">

    <h1 class="title">Agregar Nueva Campaña Promocional</h1><br><br>
    <svg onclick="window.location.href='/campaign'" class="close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path onclick="window.location.href='/campaign'" d="M22 2L2 22M22 22L2 2L22 22Z" stroke="black" stroke-width="2.5" stroke-linecap="round" />
    </svg>
    <br><br><br>
    <input placeholder="Titulo de la promoción" type="text" class="campo left">
    <input placeholder="Fecha de Inicio" type="text" class="campo right"><br>
    <div class="clearfix"></div>
    <input placeholder="Tipo de Usuario" type="text" class="campo left">
    <input placeholder="Fecha de Caducidad" type="text" class="campo right">
    <div class="clearfix"></div>
    <input placeholder="Porcentaje de descuento" type="text" class="campo left">
    <svg class="photo" width="400" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M114.969 87.8984H108.992L107.568 83.9082C107.47 83.6352 107.29 83.3991 107.052 83.2324C106.815 83.0657 106.531 82.9763 106.241 82.9766H92.7588C92.1655 82.9766 91.6338 83.3501 91.436 83.9082L90.0078 87.8984H84.0312C82.0889 87.8984 80.5156 89.4717 80.5156 91.4141V111.453C80.5156 113.396 82.0889 114.969 84.0312 114.969H114.969C116.911 114.969 118.484 113.396 118.484 111.453V91.4141C118.484 89.4717 116.911 87.8984 114.969 87.8984ZM115.32 111.453C115.32 111.646 115.162 111.805 114.969 111.805H84.0312C83.8379 111.805 83.6797 111.646 83.6797 111.453V91.4141C83.6797 91.2207 83.8379 91.0625 84.0312 91.0625H92.2358L92.9873 88.9619L93.9937 86.1406H105.002L106.008 88.9619L106.76 91.0625H114.969C115.162 91.0625 115.32 91.2207 115.32 91.4141V111.453ZM99.5 93.875C95.6152 93.875 92.4688 97.0215 92.4688 100.906C92.4688 104.791 95.6152 107.938 99.5 107.938C103.385 107.938 106.531 104.791 106.531 100.906C106.531 97.0215 103.385 93.875 99.5 93.875ZM99.5 105.125C97.1709 105.125 95.2812 103.235 95.2812 100.906C95.2812 98.5771 97.1709 96.6875 99.5 96.6875C101.829 96.6875 103.719 98.5771 103.719 100.906C103.719 103.235 101.829 105.125 99.5 105.125Z"
        fill="#9C15CB" />
      <rect x="0.5" y="0.5" width="199" height="199" rx="99.5" stroke="#FF00C7" stroke-linecap="round" stroke-dasharray="10 5" />
    </svg>
    <textarea placeholder="Descripción de la campaña" type="text" style="resize:none" class="campo left description"></textarea>
    <div class="clearfix"></div>
    <br>
    <b-button class="subbmit-button" type="submit" variant="primary" onclick='window.location.href="/campaign"'>Agregar</b-button>
    <b-button class="cancel-button" type="submit" variant="primary" onclick='window.location.href="/campaign"'>Cancelar</b-button>
    <div class="clearfix"></div>
    <br>
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
  padding-top: 8rem;
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
  width: 82%;
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
  float: right;
  margin-right: 8%;
  margin-top: 1%;
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
  float: right;
  margin-right: 2%;
  margin-top: 1%;
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
  width: 450px;
  height: 55px;
  padding: 3px 8px;
  margin-bottom: 50px;
}

.left {
  display: block;
  float: left;
  margin-left: 10%;
}

.right {
  display: block;
  float: right;
  margin-right: 10%;
}

.description {
  height: 100px;
}

.photograpy {
  height: 300px;
}

.photo {
  border: 3px solid #8D2BC0;
  padding: 10px;
  border-radius: 10px;
  display: block;
  float: right;
  margin-right: 12%;
}

.close {
  display: block;
  text-align: right;
  width: 7%;
  cursor: pointer;
}

.clearfix {
  float: none;
  clear: both;
}
</style>
