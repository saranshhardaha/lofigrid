import { SET_VOLUME } from "../constantsType/actionType";

// Define the interface for the state
export interface VolumeState {
  volumeValue: number;
}

// Define the action type for the SET_VOLUME action
export interface VolumeAction {
  type: typeof SET_VOLUME;
  volumeValue: number;
}

const INITIAL_STATE: VolumeState = {
  volumeValue: 50,
};

// Use the SetVolumeAction type for the action parameter
export const volumeReducer = (
  state: VolumeState = INITIAL_STATE,
  action: VolumeAction
) => {
  switch (action.type) {
    case SET_VOLUME:
      return {
        ...state,
        volumeValue: action.volumeValue,
      };
    default:
      return state;
  }
};

