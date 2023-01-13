import { Dispatch, FC, useReducer } from 'react';

type countState = {
  count: number;
};

const initialState: countState = {
  count: 0
};

type COUNTER_ACTION = {
  type: 'INCREASE_COUNTER' | 'DECREASE_COUNTER' | 'RESET';
};

const countReducer = (state: countState, action: COUNTER_ACTION) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {
        count: state.count + 1
      };
    case 'DECREASE_COUNTER':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      throw new Error('Something ocurred');
  }
};

const checkVal = (val: number, dispatch: Dispatch<COUNTER_ACTION>) => {
  if (val > 0) {
    return () => dispatch({ type: 'DECREASE_COUNTER' });
  }
};
const Counter: FC = () => {
  const [value, dispatch] = useReducer(countReducer, initialState);
  return (
    <main className="Counter">
      <h2>Days Since Last Incident</h2>
      <h1>{value.count}</h1>
      <section className="controls">
        <button onClick={() => dispatch({ type: 'INCREASE_COUNTER' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <button onClick={checkVal(value.count, dispatch)}>Decrement</button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
