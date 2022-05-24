
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <div class="navigation">
    <b-navbar fixed="top" sticky="true" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"><img src="./assets/images/logo_fimgym.png" alt="logo"></b-navbar-brand>
    </b-navbar>
  </div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/registrar">Registrar Usuario</router-link> |
    <router-link to="/login">Ingresar</router-link>
  </nav> -->
  <router-view/>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img {
  width: 300px;
}

.navigation {
  background: white;
  width: 100%;
  z-index: 10;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
  
}

div {
  background-color: #ECDFF4;
}
</style>
