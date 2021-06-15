<template>
  <div>
    <div class="footer_content">
      <div class="container">
        <div class="footer_inner">
          <div class="footer_info">
            <div class="footer_info-company">
              <h3>Our Company</h3>
              <a href="#">About AutoMarket.com</a>
              <a href="#">Find Car with Us</a>
              <a href="#">Site Map</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div class="footer_info-partners">
              <h3>Our Partners</h3>
              <a href="#">Cars.com</a>
              <a href="#">AmericanCars.com</a>
              <a href="#">999.md</a>
              <a href="#">AutoMarketstreet.com</a>
            </div>
            <div class="footer_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1296.1360827159158!2d28.855327786343878!3d47.0225325728455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d9fc804dd33%3A0xbe4dc96dd5452986!2sInterauto!5e0!3m2!1sen!2s!4v1620288554822!5m2!1sen!2s"
                width="450"
                height="220"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_info{
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 18px;
  padding-top:30px;
  margin-top: 50px;
}
.footer_content {
  background-color: #691a29;
  width: 100%;
  min-height: 300px;
}
.footer_info-company{
    display: flex;
    flex-direction: column;
    
}
.footer_info-partners{
    display: flex;
    flex-direction: column;
}
a{
    text-decoration:none;
    color: goldenrod;
    padding-top:10px
}
.footer_map{
    margin-top:10px;
    border: 2px solid goldenrod
}
</style>
