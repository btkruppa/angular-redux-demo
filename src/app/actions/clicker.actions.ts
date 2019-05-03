import { Action } from '@ngrx/store';

export enum ClickerTypes {
  Update = '[Clicker] Update',
  Reset = '[Clicker] reset'
}

export class UpdateClicks implements Action {
  readonly type = ClickerTypes.Update;
  constructor(public payload: number) {}
}

export class ResetClicks implements Action {
  readonly type = ClickerTypes.Reset;
}
