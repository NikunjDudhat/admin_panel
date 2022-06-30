import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../Redux/Action/action';

function Counter(props) {
    const store = useSelector(state => state.count)
    const dispatch =  useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <button onClick={() => handleIncrement()}>+</button>
            <p>{store.count}</p>
            <button onClick={() => handleDecrement()}>-</button>
        </div>
    );
}

export default Counter;