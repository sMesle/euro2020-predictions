<template>
  <div>
    <button @click="signInWithGoogle">Sign In with Google</button>
    <button @click="signIn">Sign In</button>
    <button @click="checkUser">checkUser</button>
    <button v-if="user" @click="signOut"> Sign Out</button>
  </div>
</template>

<script>

import { Auth } from 'aws-amplify'

export default {
  name: "Authentication",
  data() {
    return {
      user: ''
    }
  },
  methods: {
    async signInWithGoogle() {
      await Auth.federatedSignIn({provider: "Google"})
    },
    async signOut() {
      await Auth.signOut()
    },
    signIn() {
      Auth.federatedSignIn()
    },
    async checkUser() {
      this.user = await Auth.currentAuthenticatedUser()
      console.log('user:', this.user)
    }
  },
}
</script>

<style lang="stylus">
</style>