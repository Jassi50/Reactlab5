import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
    todos: [],
    strike: [],
    add: (title, id) =>
        set(
            produce((state) => {
                state.todos.push({ title });
                state.todos.push({ id });
                console.log(state.todos);
            })
        ),
    remove: (title) =>
        set(
            produce((state) => {
                state.todos.filter(todo => !todo.contains({ title }))
            })
        ),
    removeUsingId: (id) =>
        set(
            produce((state) => {
                state.todos.filter(todo => !todo.contains({ id }))
            })
        ),

    reading: (title) =>
        set(
            produce((state) => {
                state.todos.push({ title });
            })
        ),
    addStrike: (css) =>
        set(
            produce((state) => {
                state.strike.push({ css });
            })
        ),
}));

const useStore1 = create(() => ({
    color: 'red'
}));