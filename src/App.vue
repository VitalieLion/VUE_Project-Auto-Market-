<template>
  <div class="container-fluid">
    <div class="logo">
       <span>Auto <i>Market</i></span>
      <p class="logo-text">American Original Car</p>
      </div>
      
    <div class="inner">
      <router-link to="/">Home</router-link>
      <router-link to="/favorites">Favorites</router-link>
      <router-link to="/AddCar">Car+</router-link>
      <router-link v-if="!$store.state.token" to="/login">
        <button class="btn btn-light">Login</button>
      </router-link>
      <button
        class="btn btn-light"
        v-else
        @click="$store.commit('removeToken')"
      >
        logout
      </button>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {};
</script>
<style>
@font-face {
  font-family: "Lato", sans-serif;
  src: url(./fonts/Lato-Regular.ttf);
}
.container-fluid {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  top: 0;
  left: 100px;
  position: absolute;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 40px;
  
}
.logo-text{
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-size: 15px;
  color: gold;
 
}
.btn {
  margin: 10px 0 0 30px;
  height: 40px;
  width: 100px;
  background-color: transparent;
  color: #fff;
}
.container-fluid {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background-color: #691a29;
  min-height: 100px;
  color: #fff;
  position: relative;
}
.inner {
  right: 0;
}
.inner:first-child {
  margin-left: 30px;
}
.inner a {
  float: left;
  margin: 10px 0 0 40px;
  font-weight: normal;
  color: #fff;
  font-size: 24px;
}

.inner a.router-link-exact-active {
  color: gold;
}
</style>
