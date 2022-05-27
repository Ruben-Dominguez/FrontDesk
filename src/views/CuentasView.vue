<template>
<div class="body-color">
  <div class="caja">
    <div class="cajahijo1">
      <input id="lookup" class="campo" type="text">
      <b-button class="button-blank" type="button" variant="light" onclick='window.location.href="/cuentas-add"'>+ Nueva Cuenta</b-button>
    </div>

    <div class="cajahijo2">
      <div class="cajahijo3" onclick='window.location.href="/socio"'>
        <img class="info-img round" src="../assets/images/persona.png">
        <div class="cajahijo4">
          <h2>{{this.$store.state.users[0].username}}</h2>
          <p>{{this.$store.state.users[0].tipo.charAt(0).toUpperCase() + this.$store.state.users[0].tipo.slice(1)}}</p>
        </div>
      </div>
      <div class="cajahijo3">
        <img class="info-img round" src="../assets/images/persona.png">
        <div class="cajahijo4">
          <h2>{{this.$store.state.users[1].username}}</h2>
          <p>{{this.$store.state.users[1].tipo.charAt(0).toUpperCase() + this.$store.state.users[1].tipo.slice(1)}}</p>
        </div>
      </div>
      <div class="cajahijo3" onclick='window.location.href="/frontdesk"'>
        <img class="info-img round" src="../assets/images/persona.png">
        <div class="cajahijo4">
          <h2>{{this.$store.state.users[2].username}}</h2>
          <p>{{this.$store.state.users[2].tipo.charAt(0).toUpperCase() + this.$store.state.users[2].tipo.slice(1)}}</p>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
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
  height: auto;
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 2rem;
  background-color: #ffffff;
}

.campo {
  border: 3px solid #8D2BC0;
  border-radius: 10px;
  width: 450px;
  height: 55px;
  padding: 3px 8px;
}

#lookup {
  background: url(../assets/images/loupe.png) no-repeat scroll 400px 10px;
  background-size: 30px;
}

.button-blank {
  background: #FFFFFF;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  width: 200px;
  height: 5%;
  color: #560b7d;
}

.cajahijo1 {
  display: flex;
  padding: 3rem;
  justify-content: space-around;
}

.cajahijo2 {
  background-color: #D2A3DA;
  border-radius: 30px;
  height: auto;
  margin-left: 10%;
  margin-right: 10%;
  padding: 2rem;
}

.cajahijo3 {
  background-color: white;
  border-radius: 20px;
  height: auto;
  margin: 2rem;
  display: flex;
  align-items: center;
  padding: 0 0 0 3rem;
}

.cajahijo4 {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-content: left;
  align-items: left;
}

.info-img {
  width: 80px;
  margin: 20px 40px 20px 20px;
}

.round {
  border-radius: 50%;
}

b-nav-text {
  font-weight: 500;
  font-size: 1.5rem;
}

p {
  text-align: left;
  padding: 0 1rem 0.5rem 4.5rem;
}

</style>
