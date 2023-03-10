import React, { useEffect } from "react";

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    useEffect(()=> {
        console.log('useEffect Function called!');
    }, []);

    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <button onClick={onIncrement}>Click Me</button>
        </>
    );
}