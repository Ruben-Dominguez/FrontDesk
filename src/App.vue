
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <div class="navigation">
    <b-navbar class="navigation-cont" toggleable="lg">
      <b-navbar-brand class="logoBrand" onclick='window.location.href="/"'><img id="logo" src="./assets/images/logo_fimgym.png" alt="logo"></b-navbar-brand>
      <NavBar class="NavBar" />
    </b-navbar>
  </div>
  <router-view/>
</template>

<script>

import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar
  }

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

#logo {
  width: 300px;
}

.logoBrand {
  cursor: pointer;
  padding-left: 1.2rem;
}

.navigation {
  position: fixed;
  top: 0px;
  background: white;
  width: 100%;
  z-index: 10;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, .70);
}

.navigation-cont {
  display: flex;
  justify-content: center;
  align-items: center;
}

.NavBar {
  display: none;
}

.nav-link {
  color: black !important;
  font-weight: 600;
  font-size: 1.2rem;

}
</style>
