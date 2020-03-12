import React, { useState } from'react';

const Counter = () => {const [count, setCount] = useState(0);
    return (
    <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>        
        Increment
        </button>
        <button onClick={() => setCount(count - 1)}>        
        Decrement
        </button>
        <button onClick={() => setCount(0)}>        
        reset
        </button>
        </div>
         
        );
        };
        
        
        
        export default Counter