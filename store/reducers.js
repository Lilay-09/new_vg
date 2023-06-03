import { ACTIONS } from "./Actions";

export const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.LANG:
      return { ...state, lang: action.payload };
    case ACTIONS.TRANSLATE_LANG:
      return { ...state, trans: action.payload };
    case ACTIONS.SEARCH:
      return { ...state, search: action.payload };
    case ACTIONS.VIEW:
      return { ...state, view: action.payload };
    default:
      return state;
  }
};
