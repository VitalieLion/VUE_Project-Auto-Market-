<template>
  <div class="container">
    <div class="row cars_inner ">
      <div class="col-sm-2 " style="margin-top: 60px">
        <div class="form-floating">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            v-model="itemsPerPage"
          >
            <option v-for="option in itemsNumber" :key="option">
              {{ option.number }}
            </option>
          </select>
          <label for="floatingSelect">Number of Item</label>
        </div>
        <echange></echange>
      </div>

      <div class="col-sm-10">
       
          <div class="pagination">
          <div v-if="itemsPerPage" class="pagination_row">
            <span
              v-for="(numberPage, index) in new Array(
                itemsPerPage ? cars.length / itemsPerPage : 5
              )"
              :key="index"
            >
              <button class="btn-pagination" @click="pageNumber = index + 1">
                {{ index + 1 }}
              </button>
            </span>
            </div>
            <div class="button_change" style="margin-bottom: 10px">
              
              <button @click="changeItems(true)">Column</button>
              <button @click="changeItems(false)">Row</button>
            </div>
          </div>
        

        <div :class="{ cars_top: cars_top }">
          <div
            :class="[{ cars_item: cars_item }, { cars_row: cars_row }]"
            v-for="car in filterCars"
            :key="car.id"
          >
            <img class="car_img" :src="car.url" alt="" />
            <p class="car_name">{{ car.car_make }}</p>
            <p class="car_model">{{ car.car_model }}</p>
            <span class="car_year">{{ car.car_year }}</span>
            <span class="car_price">{{ car.randomPrice }}</span>
            <div>
              <button class="car_edit" @click="editCar(car.id)">Edit</button>
              <button class="car_like" @click="addFavoriteCar(car.id)">
                Like
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-page></footer-page>
</template>

<script>
import Echange from "./echange.vue";
import FooterPage from "./Footer-Page.vue";
export default {
  components: {
    Echange,
    FooterPage,
  },
  data() {
    return {
      pageNumber: 1,
      itemsNumber: [{ number: 5 }, { number: 10 }, { number: 25 }],
      itemsPerPage: "",
      cars_top: true,
      cars_item: true,
      cars_row: false,
    };
  },
  methods: {
    addFavoriteCar(id) {
      this.$store.commit("addFavoriteCar", id);
    },
    editCar(id) {
      this.$router.push(`/editCar/${id}`);
    },
    changeItems(row) {
      if (row) {
        this.cars_top = true;
        this.cars_item = true;
        this.cars_row = false;
      } else {
        this.cars_top = !this.cars_top;
        this.cars_item = !this.cars_item;
        this.cars_row = !this.cars_row;
      }
    },
  },

  computed: {
    cars() {
      return this.$store.state.cars;
    },
    filterCars() {
      return this.$store.state.cars.filter((item, idx) =>
        this.itemsPerPage
          ? idx < this.pageNumber * this.itemsPerPage &&
            idx >= (this.pageNumber - 1) * this.itemsPerPage
          : true
      );
    },
  },
  mounted() {
    this.$store.dispatch("getPrice");
  },
};
</script>

<style scoped>
.button_change {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  position: absolute;
  right: 0;
}
.button_change button {
  height: 30px;
  width: 75px;
  margin: 0 30px 0 0;
  border: 2px solid #691a29;
  border-radius: 15px;
  background-color: transparent;
  font-size: 14px;
  background-color: #691a29;
  color: #fff;
}
.cars_item {
  font-family: "Lato", sans-serif;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  max-height: 300px;
}
.cars_row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  font-family: "Lato", sans-serif;
}

.cars_top {
  display: flex;
  flex-wrap: wrap;
  flex-basis:33%;
  align-items: center;
}
.cars_item button,
.cars_row button {
  height: 40px;
  width: 90px;
  margin: 0 7px 10px 0;
  border: 2px solid #691a29;
  border-radius: 15px;
  background-color: transparent;
  font-size: 18px;
  color: #691a29;
}
.car_img {
  width: 200px;
  height: 100px;
}
.car_name {
  font-size: 22px;
  font-weight: bold;
  margin-top: 2px;
}
.car_model {
  font-size: 18px;
}
.car_price{
 margin-left:100px;
 font-weight: bold;
 font-size: 16px;
}
.pagination{
  display: flex;
  justify-content: space-between
}
.pagination_row {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  position: relative;
}
.btn-pagination {
  border: 1px solid #691a29;
  border-radius: 30%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
.form-floating {
  margin: 80px 0;
}
.form-select {
  margin-top: 15px;
}
button:hover {
  background-color: #691a29;
  color: #fff;
}

/* .cars_card {
  height: 320px;
}
.card-img-top {
  max-width: 100rem;
  height: 130px;
  background-position: cover;
  font-size: 20px;
}
.cars_inner {
  margin-top: 50px;
  font-family: "Lato", sans-serif;
}
.price {
  float: right;
}
.btn {
  width: 100px;
  border-color: #691a29;
  color: #691a29;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
}
.butt {
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
}

*/
</style>
