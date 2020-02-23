<template>
  <div class="fit row wrap justify-center">
    <div class="col-auto">
      <div class="column inline">
        <q-btn unelevated color="accent" text-color="black" label="1 - 0" class="btn-select-score q-ma-sm"></q-btn>
        <q-btn unelevated color="accent" text-color="black" label="2 - 0" class="btn-select-score q-ma-sm"></q-btn>
        <q-btn unelevated color="accent" text-color="black" label="2 - 1" class="btn-select-score q-ma-sm"></q-btn>
      </div>
    </div>
    <div class="col-auto">
      <div class="column inline">
        <q-btn unelevated color="accent" text-color="black" label="0 - 0" class="btn-select-score q-ma-sm"></q-btn>
        <q-btn unelevated color="accent" text-color="black" label="1 - 1" class="btn-select-score q-ma-sm"></q-btn>
        <q-btn unelevated color="accent" text-color="black" label="2 - 2" class="btn-select-score q-ma-sm"></q-btn>
      </div>
    </div>
    <div class="col-auto">
      <div class="column inline">
        <q-btn unelevated color="accent" text-color="black" label="0 - 1" class="btn-select-score q-ma-sm"></q-btn>
        <q-btn unelevated color="accent" text-color="black" label="0 - 2" class="btn-select-score q-ma-sm"></q-btn>
        <q-btn unelevated color="accent" text-color="black" label="1 - 2" class="btn-select-score q-ma-sm"></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "predict-result"
  }
</script>

<style scoped>
  .btn-select-score {
    border: 1px solid #ABADC7;
  }
</style>