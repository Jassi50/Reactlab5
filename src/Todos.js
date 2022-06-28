import { useStore } from "./store";
import { useState } from "react";

export default function Todos() {
    const todos = useStore((state) => state.todos);
    const remove = useStore((state) => state.remove);
    const addStrike = useStore((state) => state.addStrike);
    const strike = { color: "" };
    const [style, setStyle] = useState("")
    const handleClick = event => {
        event.currentTarget.style.textDecoration = "line-through";
    }

    return (
        <div>
            {todos.map((todo) => (
                <div onClick={handleClick} >{todo.title}
                    <button>Remove</button>
                    <button>Edit</button>
                </div>
            ))}
        </div>
    );
}