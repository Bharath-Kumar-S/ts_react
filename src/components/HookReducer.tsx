import { useReducer } from 'react';

type CounterState = {
    count: number
}

type CounterAction = { type: string; payload: number; }

const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case 'inc':
            return { count: state.count + action.payload }
        case 'dec':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

const HookReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <br />
            Count: {state.count}
            <br />
            <button onClick={() => dispatch({ type: 'inc', payload: 10 })}>Inc</button><br />
            <button onClick={() => dispatch({ type: 'dec', payload: 10 })}>Dec</button><br />
        </>
    )
}

export default HookReducer