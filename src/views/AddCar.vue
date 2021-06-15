<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="login-panel bg-white text-center">
          <h3 class="display-3">Add Your Car</h3>
          <form @click.prevent>
            <div class="form-group">
            <label for="email" class="input-label">CarMake</label>
            <input placeholder="please enter your CarMake" class="form-control" v-model="car_make">
            </div>
             <div class="form-group">
            <label for="password" class="input-label">CarModel</label>
             <input placeholder="please enter your CarModel" class="form-control" v-model="car_model">
            </div>
            <div class="form-group">
            <label for="password" class="input-label">CarYear</label>
             <input placeholder="please enter your CarYear" class="form-control" v-model="car_year">
            </div>
            <div class="form-group">
               <label for="password" class="input-label">CarImage</label>
             <input placeholder="please enter your Car Image" class="form-control" v-model="url">
      
            </div>
            <div class="form-group">
              <br>
              <button class="btn" @click="addCar">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </div>
    
</template>

<script>
export default {
  data() {
    return {
      car_make: "",
      car_model: "",
      car_year: "",
      url: "",
    };
  },
  methods: {
    addCar() {
      const newCar = {
        car_make: this.car_make,
        car_model: this.car_model,
        car_year: this.car_year,
        url: this.url,
      };
       this.$store.dispatch('addNewCar', newCar)
    },
  },
};
</script>

<style scoped>
.container{
  font-family: "Lato", sans-serif;
}
.display-3{
  margin: 20px 0;
  font-weight: bold;
  font-size: 48px;
}
button{
 background-color:#691a29;
 color: #fff;
}
button:hover{
  color: #691a29;
  background-color: #fff;
  border-color: #691a29;
  
};
.input-label{
  font-size: 20px;
}
</style>
