import { useState } from "react";
import { useStore } from "./store";
export default function Input() {
    const [inputValue, setInputValue] = useState("");
    const add = useStore((state) => state.add);
    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add new book"
            />
            <button onClick={() => add(inputValue)} >Add</button>
        </div>
    );
}
