import { combineReducers, Reducer } from "redux";
import { ModeState, ModeAction, modeReducer } from "./modeReducer"; // Replace with the correct path and types for modeReducer
import { RainState, RainAction, rainReducer } from "./rainReducer"; // Replace with the correct path and types for rainReducer
import { VolumeState, VolumeAction, volumeReducer } from "./volumeReducer"; // Replace with the correct path and types for volumeReducer

export interface RootState {
  modeState: ModeState;
  rainState: RainState;
  volumeState: VolumeState;
}
// Combine all action types into a single RootAction type
export type RootAction =
  | ModeAction
  | RainAction
  | VolumeAction

export const rootReducer: Reducer<RootState, RootAction> = combineReducers({
  modeState: modeReducer,
  rainState: rainReducer,
  volumeState: volumeReducer,
});
