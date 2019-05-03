import { clickerReducer } from './clicker.reducer';
import { ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from 'src/environments/environment';

export interface ClickerState {
  clicks: number;
}


export interface State {
  clicker: ClickerState;
}

export const reducers = {
  clicker: clickerReducer
};

export function logger(reducer: ActionReducer<State>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];
