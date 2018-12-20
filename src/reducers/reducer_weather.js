import { Fetch_Weather } from "../actions/index";
export default function(state = [], action) {
  switch (action.type) {
    case Fetch_Weather:
      return state.concat([action.payload.data]);
  }
  return state;
}
