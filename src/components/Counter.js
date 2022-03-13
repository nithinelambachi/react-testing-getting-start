import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    function handleIncrement() {
        setCount(count + 1)
    }
    function handleDecrement() {
        setCount(count - 1)
    }
    return (
        <div className='container'><h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button data-testid="decrement" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
