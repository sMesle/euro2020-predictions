<template>
    <q-toolbar class="toolbar bg-white" style="height: 60px;">
        <q-tabs narrow-indicator active-color="black" class="text-grey" switch-indicator indicator-color="purple"
                v-model="tab" stretch shrink no-caps >
          <q-tab name="Matches" label="Matches"/>
          <q-tab name="Results" label="Results"/>
          <q-tab name="Groups" label="Groups"/>
          <q-tab name="Statistics" label="Statistics"/>
        </q-tabs>
    </q-toolbar>
</template>

<script>
  export default {
    data() {
      return {
        tab: 'Matches'
      }
    }
  }
</script>


<style lang="stylus" scoped>
  @import '~quasar-variables'

  .q-tabs {
    /deep/ .q-tabs__content {
      .q-tab__label {
        color: grey
        font-size: 16px;
      }
      .q-tab--active {
        .q-tab__label {
          color: black;
          font-weight 700;
        }
      }
    }
  }

  .toolbar {
    border-bottom : 1px solid #BDC2D2
  }


</style>