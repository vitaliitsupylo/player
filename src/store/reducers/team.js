import { REQ_TEAM, RES_TEAM, ERR_TEAM } from "../actions";

const teamInitialState = {
  loading: false,
  loaded: false,
  error: false,
  data: null,
};

const teamReducer = (state = teamInitialState, action) => {
  switch (action.type) {
    case REQ_TEAM:
      return {
        loading: true,
        loaded: false,
        error: false,
        data: null,
      };

    case RES_TEAM:
      return {
        loading: false,
        loaded: true,
        error: false,
        data: action.payload,
      };
    case ERR_TEAM:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default teamReducer;
