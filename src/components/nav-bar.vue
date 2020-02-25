<template>
    <q-toolbar class="toolbar bg-white" style="height: 60px;">
        <q-tabs narrow-indicator active-color="black" class="text-grey" switch-indicator indicator-color="primary"
                v-model="tab" stretch shrink no-caps >
          <q-tab name="Matches" label="Matches"/>
          <q-tab name="Results" label="Results"/>
          <q-tab name="Groups" label="Groups"/>
          <q-tab name="Statistics" label="Statistics"/>
        </q-tabs>
        <q-space></q-space>
        <q-btn v-if="!isAuthenticated" color="primary" label="Login" no-caps="">
          <q-menu>
            <q-list style="min-width: 150px">
              <q-item clickable v-close-popup>
                <q-item-section @click="signInWithGoogle">Sign in with Google</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <div v-if="isAuthenticated">
          <div class="row">
          <q-btn flat class="q-mx-md" color="grey" size="md" icon="fas fa-bell"></q-btn>
          <q-card flat>
              <q-menu>
                <q-list style="min-width: 150px">
                  <q-item clickable v-close-popup>
                    <q-item-section @click="signOut">Sign out</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
              <div class="row">
              <div class="col">
                <img class="q-mx-sm" :src="picture" style="vertical-align: middle; width: 50px; border-radius: 50%" alt="">
                <span class="text-bold text-grey">{{ name }}</span>
              </div>
            </div>
          </q-card>
          </div>
        </div>
    </q-toolbar>
</template>

<script>
import { Auth } from 'aws-amplify'

  export default {
    name: "navbar",
    props: {
      isAuthenticated: Boolean,
      picture: String,
      name: String
    },
    data() {
      return {
        tab: ''
      }
    },
    methods: {
      async signInWithGoogle() {
        await Auth.federatedSignIn({provider: "Google"})
      },
      async signOut() {
        await Auth.signOut().then(() => {
          this.$store.commit('SET_USER')
        })
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