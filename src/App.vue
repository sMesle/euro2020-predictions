<template>
  <div>
    <nav-bar></nav-bar>
    <div class="q-ma-lg row">
      <div class="col-12">
        <featured-match></featured-match>
      </div>
    </div>
    <div class="q-ma-lg row">
      <div class="desktop-only col-2">
        <group-list></group-list>
      </div>
      <div class="col-md-10 col-xs-12">
        <div class="desktop-only q-ml-lg">
          <match-list></match-list>
        </div>
        <div class="mobile-only">
          <match-list></match-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar'
import FeaturedMatch from '@/components/featured-match'
import GroupList from "@/components/group-list";
import MatchList from "@/components/match-list";

export default {
  name: 'LayoutDefault',

  components: {
    GroupList,
    NavBar,
    FeaturedMatch,
    MatchList
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
