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
              <a class="nav-link" href="/"
                ><strong>Linear Regression</strong></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/lstm">LSTM</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="mt-5">
          <h1 v-if="!APIResult.length">
            Enter COVID-19 data to make the prediction with Linear Regression
          </h1>
          <h1 v-else style="font-size: 4rem">
            Required tests today: {{ APIResult }}
          </h1>
        </div>
        <form @submit.prevent>
          <div class="form-group mt-3 col-4">
            <label for="inputDailyCases">Daily cases</label>
            <input
              v-model.trim="data.daily_cases"
              type="number"
              class="form-control"
              id="inputDailyCases"
              aria-describedby="dailyCasesHelp"
              placeholder="Enter daily cases"
            />
          </div>
          <div class="form-group mt-3 col-4">
            <label for="inputDailyRecoveries">Daily recoveries</label>
            <input
              v-model.trim="data.daily_recoveries"
              type="number"
              class="form-control"
              id="inputDailyRecoveries"
              aria-describedby="dailyRecoveriesHelp"
              placeholder="Enter daily recoveries"
            />
          </div>
          <div class="form-group mt-3 col-4">
            <label for="inputDailyDeaths">Daily deaths</label>
            <input
              v-model.trim="data.daily_deaths"
              type="number"
              class="form-control"
              id="inputDailyDeaths"
              aria-describedby="dailyCasesHelp"
              placeholder="Enter daily deaths"
            />
          </div>
          <button @click="predict" type="submit" class="btn btn-primary mt-3">
            Predict
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getAPI } from "@/axios";

export default {
  name: "Reg",
  data() {
    return {
      data: {
        daily_cases: "",
        daily_recoveries: "",
        daily_deaths: "",
      },
      APIResult: [],
    };
  },
  methods: {
    predict() {
      getAPI
        .get("/prediction_reg", {
          params: {
            daily_cases: this.data.daily_cases,
            daily_recoveries: this.data.daily_recoveries,
            daily_deaths: this.data.daily_deaths,
          },
        })
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