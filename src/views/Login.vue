<template>
    <section class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="login-panel bg-white text-center">
          <h2 class="display-3 'font-weight-bold'">Login</h2>
          <form @click.prevent>
            <div class="form-group">
            <label for="email" class="input-label">Email</label>
            <input placeholder="please enter your email" class="form-control" v-model="email">
            </div>
             <div class="form-group">
            <label for="password" class="input-label">Password</label>
             <input placeholder="please enter your password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <br>
              <button class="btn " @click="login">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>


  </section>
</template>

<script>

    export default {
        name: "Login",
        data(){
            return {
                email: "eve.holt@reqres.in",
                password: "cityslicka",
            }
    },
        methods:{
            login(){
                this.$store.dispatch('login',
                    {email: this.email,
                    password: this.password})
            }
        }
    }
</script>

<style scoped>
.btn {
  background-color: #691a29;
    height: 35px;
    width: 80px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    outline-style: none;
}
</style>
