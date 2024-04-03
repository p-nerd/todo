import "./style.css";

type TTodo = {
    id: string;
    content: string;
    completed: boolean;
};

const todos: TTodo[] = [
    {
        id: "1",
        content: "Completed Task",
        completed: true,
    },
    {
        id: "2",
        content: "Normal Task",
        completed: false,
    },
];

const renderTodo = (todo: TTodo) => {
    const contentConditionClass = todo.completed ? "text-gray-500 line-through" : "text-gray-800";
    const completedConditionSvg = todo.completed
        ? `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
            </svg>`
        : `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle"
            >
                <circle cx="12" cy="12" r="10" />
            </svg>`;

    return `
        <div class="border-t-2 border-gray-100 text-2xl">
            <div class="group flex flex-row items-center">
                <button
                    class="flex w-12 flex-col items-center justify-center ${todo.completed ? "text-green-500" : ""}"
                >
                    ${completedConditionSvg} 
                </button>
                <label
                    class="flex min-w-0 flex-1 items-center break-all p-2 ${contentConditionClass}"
                >
                   ${todo.content} 
                </label>
                <button class="w-12 text-red-700 opacity-0 group-hover:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
        </div>
    `;
};

const renderTodos = (todos: TTodo[]) => {
    const root = document.getElementById("todos-root");
    if (!root) {
        return;
    }
    root.innerHTML = `
        ${todos.reduce((s, todo) => s + renderTodo(todo), "")}
`;
};

renderTodos(todos);
