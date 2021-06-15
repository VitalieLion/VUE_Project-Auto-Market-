<template>
  
</template>

<script>
export default {
  data() {
    return {
      
    };
  },

  methods: {
    call() {
      console.log(this.articleGroups);
    },
  },
  computed: {
    carsList() {
      return this.$store.state.cars;
    },

    articleGroups() {
      return this.carsList
        .map((e, i) => {
          return i % 5 === 0 ? this.carsList.slice(i, i + 5) : null;
        })
        .filter((e) => e);
    },
  },
};
</script>

<style scoped></style>
