<template>
  <div>
    <nav-bar :isAuthenticated="isAuthenticated" :picture="picture" :name="name"></nav-bar>
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
import { Auth, Hub } from 'aws-amplify'
import { mapState, mapGetters } from "vuex";
import NavBar from '@/components/nav-bar'
import FeaturedMatch from '@/components/featured-match'
import GroupList from "@/components/group-list";
import MatchList from "@/components/match-list";

export default {
  name: 'matches',

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
  },
  computed: {
    ...mapState({
      user: state => state.profile.user
    }),
    ...mapGetters({
      name: "profile/name",
      picture: "profile/picture",
      isAuthenticated: "profile/isAuthenticated"
    })
  },
  mounted() {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.user = data;
          break;
        case "signOut":
          this.user = null;
          break;
        case "customOAuthState":
          this.setState({ customState: data });
      }
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user)
        this.$store.commit('profile/SET_USER', user)
      })
      .catch(() => console.log("Not signed in"));
    });
  }
}
</script>

<style>
</style>
