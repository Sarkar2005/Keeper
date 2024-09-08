import { useState } from "react";

function Counter(){
    const[count , setCount] = useState(100);

    function handleChange(){
        setCount(count - 1);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick = {handleChange}>-</button>
        </>
    )
}

export default Counter;