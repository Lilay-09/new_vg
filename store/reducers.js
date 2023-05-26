import { ACTIONS } from "./Actions";

export const reducers = (state, actiion) => {
  switch (actiion.type) {
    case ACTIONS.LANG:
      return { ...state, lang: actiion.payload };

    default:
      return state;
  }
};