// import { initialstate } from "./Advancedstatemanagement"
import { FETCHFAILED, FETCHLOADING, FETCHSUCCESS } from "./actiontype"

const initialstate = {
  data: [],
  filtereddata: [],
  loading: false,
  error: "",
};

export function reducer(state = initialstate, action) {
  switch (action.type) {
    case FETCHLOADING:
      return { ...state, loading: true };

    case FETCHSUCCESS:
      return { ...state, loading: false, data: action.payload };

    case FETCHFAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
