<template>
  <div class="exchange">
    <section class="exchange">
      <div class="exchange__inner">
        <h2 class="title">
          Excange 
        </h2>
        <div class="text">
          Choose the currency
        </div>
        <div class="form">
          <select class="valoare" v-model= "fromValue">
            <option v-for="(rate, base) in rates"  :key="rate">{{base}}</option>
            
            
          </select>
          
          <input type="number" class="sum"   v-model.number="amount" />
        </div>
        <div class="button__exc">
          <button class="btn" @click="convert(fromValue, toValue, amount)">SWAP</button> 
        </div>
        <div class="form">
          <select class="valoare" v-model="toValue">
             <option v-for="(rate, base) in rates"  :key="rate">{{base}}</option>
            
          </select>
          <input type="number" class="sum"  v-model="result" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  name: "echange",
  data() {
    return {
      amount: "",
      rates:{},
      fromValue :'',
      toValue:'',
      result : 0
    };
  },
  methods: {
    convert(fromV, toV, amount){
      let conversion = this.rates[fromV] / this.rates[toV];
      this.result = Math.round(amount/conversion)
      console.log(this.result);
    }
  },
  mounted() {
    axios({
      method: 'get',
      url: 'http://api.exchangeratesapi.io/v1/latest?access_key=7c641079cecf260b405edb9d5fc0f646'
    })
    .then(response =>{
      this.rates = response.data.rates
    })
  }
};
</script>

<style scoped>
.exchange {
  width: 175px;
  height: 300px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #c0bbb5;
  border-radius: 2px;
  box-shadow: 0 8px 19px 1px;
}
.img {
  margin: 10px 0;
}
.title {
  color: #691a29;
}
.text {
  font-size: 16px;
  padding-bottom: 10px;
}
.form {
  padding: 12px;
}

.sum {
  border: 1px solid #c0bbb5;
  margin-left: 4px;
  text-align: right;
  height: 26px;
  width: 76px;
  outline-style: none;
}
.button__exc {
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
}
.btn {
    background-color: #691a29;
    height: 35px;
    width:80px;
    color: #ffffff;
    border:none;
    border-radius: 5px;
    outline-style:none;
}
.curs {
  color: #007bf7;
  font-size: 12px;
}
</style>
