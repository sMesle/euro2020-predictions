<template>
  <div>
    <nav-bar></nav-bar>
    <div class="q-ma-lg row">
      <div class="col-12">
        <featured-match></featured-match>
      </div>
    </div>
    <div class="desktop-only q-ma-lg row">
      <div class="col-2">
        <group-list></group-list>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar'
import FeaturedMatch from '@/components/featured-match'
import GroupList from "@/components/group-list";

export default {
  name: 'LayoutDefault',

  components: {
    GroupList,
    NavBar,
    FeaturedMatch
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
