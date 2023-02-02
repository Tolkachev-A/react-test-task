import { AppActionsType } from "../../constants";

export const setLoading = (payload) => ({
  type: AppActionsType.SET_LOADING,
  payload,
});
