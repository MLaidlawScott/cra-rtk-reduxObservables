import { createSelector } from 'redux-starter-kit';

import { ICounterState } from '../slices/counter';

interface ICounterSelector {
  counter: ICounterState
}

export const counterValueSelector = createSelector(
  (state: ICounterSelector) => state.counter,
  (counter) => counter.counterValue,
);
