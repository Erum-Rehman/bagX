import {
  IS_LOADER,
} from "../constant/constant";

const initState = {
  isLoader: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {

    case IS_LOADER:
      return {
        ...state,
        isLoader: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;


