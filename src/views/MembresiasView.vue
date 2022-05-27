<template>
  <div class="gym-body">
    <div class="gym-container container">
      <b-row>
        <b-col class="gym-col padding-0">
          <h1>Membresias</h1>
          
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
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  }

  .new-gym {
    width: 20%;
    float: right;
    background-color: white;
    border-color: lightgrey;
    color: blueviolet;
  }

  .new-gym:hover {
    background-color: lightgrey;
    border-color: lightgrey;
    color: blueviolet;
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
    width: 100%;
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
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
  }

  .modal-content {
    display: flex;
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 70%; 
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