<template>
  <div class="container">
    <div class="col-10">
      <div class="row row-cols- row-cols-lg-5 g-2">
        <div class="cars_card" v-for="(car,idx) in favCard" :key="car.id">
          <div class="card" style="width: 12rem; min-height:300px">
            <img :src="car.url" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ car.car_make }}</h5>
              <p class="card-text">
                {{ car.car_model }}
              </p>
              <p>
                {{ car.car_year }}
              </p>
              <button class=" btn" @click="removeFromCart(idx)">Delete</button>
            </div>
          </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "favorites",
  data() {
    return {
        favoriteCars:[],
    }
  },
  methods:{
     removeFromCart(idx) {
      this.$store.state.favoriteCar.splice(idx,1)
      localStorage.setItem('favoriteCar', JSON.stringify(this.$store.state.favoriteCar));
      }
  },
  computed: {
    favCard() {
      return this.$store.state.favoriteCar;
    },
  },
  mounted() {
      if(localStorage.idx){
          this.favoriteCars = localStorage.idx
      }
  }
};
</script>

<style scoped>
.container{
    margin-top: 50px;

}
.cars_card{
  height: 320px;
}
.card-img-top {
  max-width: 100rem;
  height: 130px;
  background-position: cover;
  font-size: 20px;
}
.btn{
  background-color: #691a29;
    height: 35px;
    width: 80px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    outline-style: none;
}
</style>