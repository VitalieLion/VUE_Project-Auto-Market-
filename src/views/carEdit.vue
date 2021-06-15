<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="login-panel bg-white text-center">
          <h3 class="display-3"> Edit Car</h3>
          <form @click.prevent>
            <div class="form-group">
            <label for="email" class="input-label">CarMake</label>
            <input placeholder="please enter your Edit CarMake" class="form-control" v-model="car_make">
            </div>
             <div class="form-group">
            <label for="password" class="input-label">CarModel</label>
             <input placeholder="please enter your Edit CarModel" class="form-control" v-model="car_model">
            </div>
            <div class="form-group">
            <label for="password" class="input-label">CarYear</label>
             <input placeholder="please enter your Edit CarYear" class="form-control" v-model="car_year">
            </div>
            <div class="form-group">
               <label for="password" class="input-label">CarImage</label>
             <input placeholder="please enter your Edit Car Image" class="form-control" v-model="url">
      
            </div>
            <div class="form-group">
              <br>
              <button class="btn" @click="updateCar">Update</button>
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
      car: this.$store.state.cars.find((item) => item.id == +this.id),
    };
  },
  props: ["id"],
  name: "Car",

  watch: {},
  methods: {
    updateCar() {
      const data = {
        id: this.id,
        car_make: this.car.car_make,
        car_model: this.car.car_model,
        car_year: this.car.car_year,
        url: this.car.url,
      };
      this.$store.dispatch("updateCar", data);
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