import { LOAD_DATA } from "../actions/filesActions";

const initialState = {
  files: []
};

const filesReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        files: action.payload
      };

    default:
      return state;
  }
}

export default filesReducer;
