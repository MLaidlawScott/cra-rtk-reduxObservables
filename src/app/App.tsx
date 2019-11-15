import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as selectors from '../selectors';
import * as actions from '../slices';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectors.counterValueSelector);
  const [incrementValue, setIncrementValue] = useState('');

  return (
    <div className="App">
      rtk starter
      <div>{counterValue}</div>
      <div>
        <button onClick={() => dispatch(actions.increment())}>Increment</button>
        <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
        <button onClick={() => dispatch(actions.incrementAfterDelay())}>+1 after delay</button>
      </div>
      <div>
        Number to increase by:
        <input
          type="number"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
        />
        <button onClick={() => dispatch(actions.add(incrementValue))}>Add</button>{' '}
      </div>
    </div>
  );
};


export default App;
