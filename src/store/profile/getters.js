export const isAuthenticated = state => {
    return !!state.user;
  };

export const userAttributes = state => {
  return state.user.attributes
}
  
  export const name = state => {
    return (
      (state.user && state.user.attributes && state.user.attributes.name) ||
      "Name"
    );
  };

  export const picture = state => {
    return (
      (state.user &&
        state.user.attributes &&
        state.user.attributes.picture) ||
      "Picture"
    );
  };
