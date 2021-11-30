<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-info bg-light">
      <div class="container">
        <h2 class="navbar-brand mt-2" href="#"><strong>DAILY TESTS</strong></h2>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Linear Regression</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/lstm"><strong>LSTM</strong></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="mt-5">
        <h1 v-if="!APIResult.length">See the prediction with LSTM</h1>
        <h1 v-else style="font-size: 4rem">
          Required tests today: {{ APIResult }}
        </h1>
      </div>
      <form @submit.prevent>
        <button @click="predict" type="submit" class="btn btn-primary mt-3">
          Predict
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { getAPI } from "@/axios";

export default {
  name: "LSTM",
  data() {
    return {
      data: {},
      APIResult: [],
    };
  },
  methods: {
    predict() {
      getAPI
        .get("/prediction_lstm")
        .then((response) => {
          console.log("Received data successfully");
          this.APIResult = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>