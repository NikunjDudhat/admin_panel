import React from 'react';
import { useEffect } from 'react';

function Promises(props) {

    const One = () => {
        return "One"
    }

    // const Two = () => {
    //    setTimeout(() => {
    //     return "Two"
    //    }, 2000);
    // }

    const Two = () => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Two")
        }, 2000);
     })
    }

    const Three = () => {
        return "Three"
    }

    const All = async () => {
        const o = One()
        console.log(o);

        const t = await Two()
        console.log(t);

        const th = Three()
        console.log(th);
    }

    useEffect (() => {
        All()
    },[])


    // callback function

    const Display = (z) => {
        console.log(z);
    }

    const sum = (Display) => {
        let x = 10;
        let y = 5;

        let z = x + y;
        console.log(z);
        Display(z)
    }

    sum(Display)

    return (
        <div>
            
        </div>
    );
}

export default Promises;