import { createSlice, PayloadAction, createAction } from 'redux-starter-kit';

export interface ICounterState {
    counterValue: number;
  }
  
const initialState: ICounterState = {
counterValue: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counterValue = state.counterValue + 1;
    },
    decrement(state) {
      state.counterValue = state.counterValue - 1;
    },
    add(state, action: PayloadAction<string>) {
      state.counterValue = state.counterValue + parseInt(action.payload);
    },
    incrementAfterDelay() {},
  },
});

export const { increment, decrement, add, incrementAfterDelay } = counterSlice.actions;
export default counterSlice.reducer;
