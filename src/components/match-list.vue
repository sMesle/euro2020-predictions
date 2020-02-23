<template>
  <div>
    <div class="q-mb-md text-h5 text-bold">
      Match
    </div>
    <div>
      <q-card flat bordered>
        <q-toolbar class="toolbar bg-white" style="height: 60px;">
          <q-tabs indicator-color="transparent" active-color="purple" class="text-grey"
                  v-model="tab" stretch shrink no-caps >
            <q-tab name="All" label="All Matches"/>
            <q-tab name="Results" label="Results"/>
            <q-tab name="Groups" label="Groups"/>
            <q-tab name="Statistics" label="Statistics"/>
          </q-tabs>
        </q-toolbar>
        <q-separator>
        </q-separator>
        <q-card-section class="bg-accent">
          <div class="row justify-around text-bold text-info">
            <div class="col-md-2 col-3">Date </div>
            <div class="col-md-5 col-7 text-center">Match </div>
            <div class="col-2">
            </div>
          </div>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section v-for="n in 2" :key="n">
          <div class="row justify-around items-center">
            <div class="col-md-2 col-2"> 8:00 </div>
            <div class="col-md-5 col-10  text-bold text-center">

              <span class="q-mr-sm col-12">France </span>
              <img src="https://www.uefa.com/imgml/flags/70x70/FRA.png" style="vertical-align: middle; width: 20px;" alt="">
              <span class="q-mx-sm">- : -</span>
              <img src="https://www.uefa.com/imgml/flags/70x70/GER.png" style="vertical-align: middle; width: 20px;" alt="">
              <span class="q-ml-sm">Germany</span>
            </div>
            <div class="desktop-only col-2 text-center">
              <q-btn @click="showPredict(n)" unelevated color="primary" label="Predict" no-caps />
            </div>
            <div class="mobile-only q-mt-md col-12 text-center">
              <q-btn @click="showPredict(n)" unelevated color="primary" label="Predict" no-caps />
            </div>
          </div>
          <transition name="fade">
            <q-card-section v-if="predict[n]">
              {{n}}
              <predict-result></predict-result>
            </q-card-section>
          </transition>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
  import PredictResult from '@/components/predict-result'
  export default {
    name: "match-list",
    components: {
      PredictResult
    },
    data() {
      return {
        tab: 'All',
        predict: [false, false]
      }
    },
    methods: {
      showPredict(n) {
        this.$set(this.predict, n, !this.predict[n]);
      },
    },

  }
</script>

<style lang="stylus" scoped>
  @import '~quasar-variables'

  .q-tabs {
    /deep/ .q-tabs__content {
      .q-tab__label {
        color: grey
        font-size: 14px;
      }
      .q-tab--active {
        .q-tab__label {
          color: $primary;
          font-weight 700;
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>