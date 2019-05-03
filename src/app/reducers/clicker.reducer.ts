import { ClickerTypes } from '../actions/clicker.actions';

export const initialState = {
  clicks: 25
};

export function clickerReducer(state = initialState, action) {
  switch (action.type) {
    case ClickerTypes.Update:
      return {
        ...state,
        clicks: state.clicks + action.payload
      };
    case ClickerTypes.Reset:
      return initialState;
    default:
      return state;
  }
}
