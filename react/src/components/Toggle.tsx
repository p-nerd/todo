import { TTodo } from "../utils/types";

const Toggle = (p: { todos: TTodo[]; onSelect: () => void; onUnselect: () => void }) => {
    const isAllSelected =
        p.todos.reduce((x, todo) => x && todo.completed, true) && p.todos.length > 0;
    return (
        <button
            onClick={() => (isAllSelected ? p.onUnselect() : p.onSelect())}
            className={`flex w-12 items-center justify-center text-gray-400 ${isAllSelected ? "text-green-500" : ""}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m3 17 2 2 4-4" />
                <path d="m3 7 2 2 4-4" />
                <path d="M13 6h8" />
                <path d="M13 12h8" />
                <path d="M13 18h8" />
            </svg>
        </button>
    );
};

export default Toggle;
