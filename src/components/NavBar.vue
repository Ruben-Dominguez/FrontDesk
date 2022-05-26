<template>
  <b-nav class="navigator">
    <b-nav-item>Gimnasios</b-nav-item>
    <b-nav-item>Dashboard</b-nav-item>
    <b-nav-item>Membresias</b-nav-item>
    <b-nav-item onclick='window.location.href="/cuentas"'>Cuentas</b-nav-item>
    <b-nav-item>Equipamientos</b-nav-item>
    <div class="info">
      <img class="info-img" src="../assets/images/bell.png">
      <img class="info-img round" src="../assets/images/persona.png">
      <b-nav-text>{{this.$store.state.users[this.$store.state.numUsers-1].username}}</b-nav-text>
      <img class="info-img chico" src="../assets/images/drop-triangle.png">
    </div>
  </b-nav>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    var navbar = document.getElementsByClassName("NavBar")[0];
    navbar.style.display = 'flex';
  }
}
</script>

<style scoped>
.navigator {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

li {
  list-style-type: none;
  cursor: pointer;
}

.info-img {
  width: 30px;
  margin: 10px;
}

.round {
  border-radius: 50%;
}
.info-img.chico {
  width: 15px;
}

</style>
