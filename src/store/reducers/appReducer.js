import { AppActionsType } from "../../constants";

const initState = {
  isLoading: false,
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case AppActionsType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
