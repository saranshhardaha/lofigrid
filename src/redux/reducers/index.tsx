import { combineReducers, Reducer } from "redux";
import { ModeState, ModeAction, modeReducer } from "./modeReducer"; 
import { RainState, RainAction, rainReducer } from "./rainReducer"; 
import { VolumeState, VolumeAction, volumeReducer } from "./volumeReducer";

export interface RootState {
  modeState: ModeState;
  rainState: RainState;
  volumeState: VolumeState;
}
export type RootAction = ModeAction  | RainAction  | VolumeAction

export const rootReducer: Reducer<RootState, RootAction> = combineReducers({
  modeState: modeReducer,
  rainState: rainReducer,
  volumeState: volumeReducer,
});
