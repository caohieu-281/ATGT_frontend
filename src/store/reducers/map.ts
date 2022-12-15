import { SET_CENTER } from "../actions";
import { MapState } from "../models";

const initialState: MapState = {
  center: [21.0277644, 105.83415979],
};

// const center = [21.0277644, 105.83415979];

const mapReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_CENTER: {
      return { center: [21.0277644, 105.83415979] };
    }
    default: {
      return state;
    }
  }
};

export default mapReducer;
