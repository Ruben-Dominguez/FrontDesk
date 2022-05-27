<template>
<div class="body-color">
  <div class="graficas">
    <img class="graficaL" src="../assets/images/kpi1.png">
    <img class="graficaR" src="../assets/images/kpi2.png">
    <img class="graficaL" src="../assets/images/kpi3.png">
    <img class="graficaR" src="../assets/images/kpi4.png">
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

.graficas {
  display: grid;
  grid-template-columns: 55% 45%;
}

.graficaL {
  width: 66%;
  justify-self: right;
  margin: 1.5rem;
}

.graficaR {
  width: 60%;
  justify-self: left;
  margin: 1.5rem;
}



</style>
