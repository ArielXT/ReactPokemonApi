import { useState } from 'react';

const Controls = (props) => {
    const [counter, setCounter] = useState(0);   

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <button onClick={() => setCounter(counter + 1)}>{props.sumar}</button>
            <button onClick={() => setCounter(counter - 1)}>{props.restar}</button>
        </div>
    );
};
export default Controls;
