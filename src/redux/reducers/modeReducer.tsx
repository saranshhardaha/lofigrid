import { SET_MODE } from '../constantsType/actionType';

// Define the interface for the state
export interface ModeState {
  mode: string;
}

// Define the action type for the specific SET_MODE action
export type ModeAction = {
  type: string;
  mode: string;
};

const INITIAL_STATE: ModeState = {
  mode: 'day',
};

export const modeReducer = (state: ModeState = INITIAL_STATE, action: ModeAction): ModeState => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};

export default modeReducer;
