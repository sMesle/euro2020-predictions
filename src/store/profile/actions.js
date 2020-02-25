import { Auth } from 'aws-amplify'

export async function getSession({ commit, getters }) {
    console.group("store/profile/actions/getSession");
    console.log("Fetching current session");
    Auth.currentAuthenticatedUser()
      .then(user => {
        if (!getters.isAuthenticated) {
          commit("SET_USER", user);
        }
      })
      .catch(err => {
        console.log(err);
        if (getters.isAuthenticated) {
          commit("SET_USER");
        }
        throw new Error(err);
      });
  }