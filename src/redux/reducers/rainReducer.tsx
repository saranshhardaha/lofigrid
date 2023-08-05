import {  SET_RAIN } from "../constantsType/actionType";

export interface RainState {
  rainMode: string;
  rainValue: number;
}

export interface RainAction {
  type: string;
  rainMode: string;
  rainValue: number;
}

const INITIAL_STATE: RainState = {
  rainMode: "clear",
  rainValue: 0,
};

export const rainReducer = (state: RainState = INITIAL_STATE, action: RainAction) => {
  switch (action.type) {
    case SET_RAIN:
      return {
        ...state,
        rainMode: action.rainMode,
        rainValue: action.rainValue,
      };
    default:
      return state;
  }
};

export default rainReducer;
