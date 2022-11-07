import { useState, useEffect } from "react";

const Timer = () => {
    // Some State to Manage Number of Seconds
    const [ count, setCount ] = useState(0);
    
    useEffect(() => {
        
        let count = setTimeout(() => {
            // console.log("Side Effect Fired Off!");
            
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Clean Up Function Fires Off At Two Times:
            // When The Component Initially Mounts
            // When The Component Unmounts

        // counst => intervalID Necessary for Clearing Out setTimeout
        // console.log(count);

        // clearTimeout => Built In JS Function to Clear Out Previous setTimeout Intervals
        return () => clearTimeout(count);
    });

    // Add Function to Clear Out setTimeout
    // const stopTimer = () => {
    //     clearTimeout(count);
    // }

    return (
        <>
            <h1>Count: {count}</h1>
        </>
    );
}

export default Timer;