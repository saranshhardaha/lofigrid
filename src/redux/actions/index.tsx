import {
  SET_MODE,
  SET_RAIN,
  SET_VOLUME,
} from "../constantsType/actionType";
import { Dispatch } from "redux";

export interface SetModeAction {
  type: typeof SET_MODE;
  mode: string;
}

export interface SetRainAction {
  type: typeof SET_RAIN;
  rainMode: string;
  rainValue: number;
}

export interface SetVolumeAction {
  type: typeof SET_VOLUME;
  volumeValue: number;
}

export const setMode = (payload: string): SetModeAction => ({
  type: SET_MODE,
  mode: payload,
});

export const setRain = (payload: string, value: number): SetRainAction => ({
  type: SET_RAIN,
  rainMode: payload,
  rainValue: value,
});

export const setVolume = (payload: number): SetVolumeAction => ({
  type: SET_VOLUME,
  volumeValue: payload,
});

export const changeRainStatus = (currentStatus: string, value: number) => {
  let rainStatus: string;
  if (currentStatus === "rain") rainStatus = "clear";
  else if (currentStatus === "clear") rainStatus = "rain";
  return (dispatch: Dispatch<SetRainAction>) => {
    dispatch(setRain(rainStatus, value));
  };
};

export const changeVolume = (currentStatus: number) => {
  return (dispatch: Dispatch<SetVolumeAction>) => {
    dispatch(setVolume(currentStatus));
  };
};
