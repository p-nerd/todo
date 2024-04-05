import { TTodo } from "../utils/types";

const Todo = (p: {
    todo: TTodo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}) => {
    return (
        <div className="border-t-2 border-gray-100 text-2xl">
            <div className="group flex flex-row items-center">
                <button
                    className={`flex w-12 flex-col items-center justify-center ${p.todo.completed ? "text-green-500" : "text-gray-400"}`}
                    onClick={() => p.onToggle(p.todo.id)}
                >
                    {p.todo.completed ? (
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
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="m9 11 3 3L22 4" />
                        </svg>
                    ) : (
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
                            className="lucide lucide-circle"
                        >
                            <circle cx={12} cy={12} r={10} />
                        </svg>
                    )}
                </button>
                <label
                    className={`flex min-w-0 flex-1 items-center break-all p-2 ${p.todo.completed ? "text-gray-500 line-through" : "text-gray-800"}`}
                >
                    {p.todo.content}
                </label>
                <button
                    className="w-12 text-red-700 opacity-0 group-hover:opacity-100"
                    onClick={() => p.onDelete(p.todo.id)}
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
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Todo;
