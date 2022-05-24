<template>
<div class="login-body">
  <div class="container-asset container">
    <b-col class="padding-0">

      <table style="width:90%">
        <tr>
          <th>
            <h1>Información Del Gimnasio</h1>
          </th>
          <th>
             <b-button variant="outline-light" class="right edit">
               <svg onclick='window.location.href="/edit-campaign"' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path
                     d="M17.9176 2.38693C17.5744 2.52907 17.2626 2.73741 17 3.00006L3.5 16.5001L2 22.0001L7.5 20.5001L21 7.00006C21.2626 6.73741 21.471 6.42561 21.6131 6.08245C21.7553 5.73929 21.8284 5.37149 21.8284 5.00006C21.8284 4.62862 21.7553 4.26083 21.6131 3.91767C21.471 3.57451 21.2626 3.2627 21 3.00006C20.7374 2.73741 20.4256 2.52907 20.0824 2.38693C19.7392 2.24479 19.3714 2.17163 19 2.17163C18.6286 2.17163 18.2608 2.24479 17.9176 2.38693Z"
                     stroke="#560b7d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

                 </svg>
             </b-button>

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


    </b-col>
  </div>
  <br><br><br>
  <b-button class="button-blank" type="button" variant="light">+ Crear Promoción</b-button>

  <div class="container-asset container">
    <b-col class="padding-0">
      <h1>Campañas</h1>
      <br><br><br><br>
    </b-col>
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
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: black;
}

.padding-0 {
  padding-right: 0;
  padding-left: 0;
}

.login-body {
  background-color: #ECDFF4;
  height: 100vh;
}

.login-photo {
  width: 500px;
  border-radius: 20px 0 0 20px;
  z-index: 5;
}

.container-asset {
  border-radius: 20px;
  position: static;
  transform: translate(0%, 55%);
}

.button-secondary {
  border-radius: 20px;
  position: relative;
  top: 70%;
  left: 3%;
  transform: translate(-50%, -50%);
}

.login-col {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 20px 20px 0;
}

.form-container {
  width: 100%;
  padding: 0 3rem 0 3rem;
}

h1 {
  text-align: left;
  font-size: 2rem;
  padding: 1rem 3rem 1rem 3rem;
  font-weight: 600;
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

.right {
  text-align: right;
  position: absolute;
  left: 91.68%;

  top: 9.83%;
  bottom: 76.23%;
}

.edit {
  border-color: #d9a1f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  height: 45px;
}

.edit:hover {
  background-color: #ecd0fb;
  border-color: #560b7d;
}


th,
td {
  text-align: left;
}



.button-blank {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #FFFFFF;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  width: 200px;
  height: 45px;
  position: relative;
  border-color: #560b7d;
  margin: 0px;
}

.restablecer-button:hover,
.button-blank:hover {
  background-color: #ecd0fb;
  border-color: #560b7d;
}



.modal-content {
  display: flex;
  align-items: center;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 35%;
  border-radius: 16px;
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
  width: 100%;
}
</style>
