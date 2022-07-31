import { useReducer } from 'react'

const initialState = {
    count: 0
}

type actionType = { type: 'inc' | 'dec'; payload: number };

type resetType = { type: 'reset' };

type ActualAction = actionType | resetType;

const reducer = (state: { count: number }, action: ActualAction) => {
    switch (action.type) {
        case 'inc':
            return { count: state.count + action.payload }
        case 'dec':
            return state.count > 0 ? { count: state.count - action.payload } : state
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const HookReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            {state?.count}
            <button onClick={() => dispatch({ type: 'inc', payload: 10 })}>Incr</button>
            <button onClick={() => dispatch({ type: 'dec', payload: 10 })}>Desc</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    )
}

export default HookReducer