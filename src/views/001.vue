<template>
  <div class="001">
    <h1>001</h1>
    <h2>Multiples of 3 and 5</h2>
    <br />
    <p>
      If we list all the natural numbers below 10 that are multiples of 3 or 5,
      we get 3, 5, 6 and 9. The sum of these multiples is 23.
    </p>
    <p>Find the sum of all the multiples of 3 or 5 below 1000.</p>

    <v-form ref="form">
      <v-text-field
        label="First Number"
        v-model.lazy="x"
        prepend-icon="mdi-numeric-1-box-outline"
        outlined
      ></v-text-field>
      <v-text-field
        label="Second Number"
        v-model.lazy="y"
        prepend-icon="mdi-numeric-2-box-outline"
        outlined
      ></v-text-field>
      <v-text-field
        label="Limit"
        v-model.lazy="limit"
        prepend-icon="mdi-format-vertical-align-top"
        outlined
      ></v-text-field>
      <v-text-field
        label="Result"
        v-model="result"
        prepend-icon="mdi-subdirectory-arrow-right"
        outlined
        readonly
      ></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 3,
      y: 5,
      limit: 1000
    };
  },
  computed: {
      result() {
          let multiples = [];

            for (let index = 1; index < this.limit; index++) {
                if ((index % this.x === 0) || (index % this.y === 0)) {
                    multiples.push(index);
                }
            }

          return multiples.reduce((pv, cv) => pv + cv, 0);
      }
  }
};
</script>

<style scoped></style>
