import { useState, useCallback } from "react";
import Todos from "./Todos";

const UseCallbackHook = (props) => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    }
    //---------------------------------------------------------------------------------------
    // If addTodo in userCallback hook it will re-render even count change
    // This is because of something called "referential equality".
    // Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.
    //---------------------------------------------------------------------------------------
    // const addTodo =  () => {
    //     setTodos((t) => [...t, "New Todo"]);
    //   };

    // when added in useCallback its only re-render on todos state change
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
    //[todos] is dependency
    return <div>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
    </div>

}

export default UseCallbackHook;


