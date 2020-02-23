<template>
    <q-card flat bordered>
      <q-card-section>
        <div class="text-bold text-h6">UEFA EURO 2020</div>
        <div class="text-subtitle2 text-grey">Group Stage - Matchday 1 of 3</div>
        <div class="q-mt-md row items-center text-center">
          <div class="col-3">
            <img src="https://www.uefa.com/imgml/flags/70x70/FRA.png" style="width: 50px;" alt="">
          </div>
            <div class="text-h5 col-6">
              - : -
            </div>
          <div class="col-3">
            <img src="https://www.uefa.com/imgml/flags/70x70/GER.png" style="width: 50px;" alt="">
          </div>
        </div>
        <div class="row justify-between text-center">
          <div class="col-3 text-bold">
            France
          </div>
          <div class="col-3 text-bold">
            Germany
          </div>
        </div>
        <div class="q-mt-md full-width row inline  justify-center items-center content-center">
          <div class="col-auto">
            <q-btn class="q-mr-lg" unelevated color="info" icon="star" />
          </div>
          <div class="col-auto">
            <q-btn @click="predict" style="width: 150px" unelevated color="primary" label="Predict" no-caps />
          </div>
        </div>
        <transition name="fade">
          <div v-if="showPredict">
            <predict-result></predict-result>
          </div>
        </transition>
      </q-card-section>
      <q-separator />
      <div class="text-center">
        <q-btn class="full-width" block flat color="primary" no-caps>
          Match Details
        </q-btn>
      </div>
    </q-card>
</template>

<script>
  import PredictResult from '@/components/predict-result'

  export default {
    name: "featured-match",
    components: { PredictResult },
    data() {
      return {
        showPredict: false
      }
    },
    methods: {
      predict() {
        this.showPredict = !this.showPredict
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>