import { useStore } from "./store";


export default function Filter() {
    const todos = useStore((state) => state.todos);
    const remove = useStore((state) => state.remove);

    return (
        <div>
            <button>Read</button><button>Reading</button><button>All</button>
        </div>
    );
}