export const setAuth = ({ is_authenticated, is_superuser }) => ({
  type: "SET_AUTH",
  payload: { is_authenticated, is_superuser },
});
