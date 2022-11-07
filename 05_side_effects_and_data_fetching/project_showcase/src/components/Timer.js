import { useState, useEffect } from "react";

const Timer = () => {
    
    // console.log("Timer Component Rendered");

    // useEffect(() => {
        
    //     // Behavior First

    //     // Return / Clean Up Later
    //     return (
    //         Clean Up Behavior
    //     );
    // });

    // Some State to Manage Number of Seconds
    const [ count, setCount ] = useState(0);

    // console.log("Component Mounted!");
    // console.log(count);
    
    const consoleTest = () => console.log("Page Clicked!");

    // console.log(count);

    useEffect(() => {

        // Add Event Listener to Fire Off When User Clicks On Page
        document.addEventListener("click", consoleTest);

        // document.addEventListener("click", someOtherFunction);
        
        let intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // intervalId => intervalID Necessary for Clearing Out setTimeout
        // console.log(intervalId);

        // clearTimeout => Built In JS Function to Clear Out Previous setTimeout Intervals
        return () => { 
            
            // Clean Up Function Fires Off At Two Times:
                // When The Component Initially Mounts
                // When The Component Unmounts
            // console.log("Clean Up Fired Off!");
            
            // Clear Out setTimeout
            clearInterval(intervalId); 

            // Remove Event Listener
            document.removeEventListener("click", consoleTest);
        };
    }, []);

    return (
        <>
            <h1>Count: {count}</h1>
        </>
    );
}

export default Timer;