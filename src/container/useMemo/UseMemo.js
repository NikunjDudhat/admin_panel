import React, { useMemo } from 'react';
import { useState } from 'react';

function UseMemo(props) {

    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const findFactorial = (n) => {
        console.log("findFactorial");
        if(n > 1){
            return n * findFactorial(n - 1);
        } else {
            return 1;
        }
    }

    // const result = findFactorial(number)

    const result = useMemo(() => findFactorial(number), [number]);

    return (
        <div>
            <input type="text" placeholder='Please Enter Value' onChange={(e) => {setNumber(e.target.value)}}/>
            <button onClick={() => setCount(count + 1)}>Count</button> <br/>

            <p>Counter Value is : {count}</p>
            <p>findFactorial Value is: {result}</p>
        </div>
    );
}

export default UseMemo;