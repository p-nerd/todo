import type { TTodo } from "../types";

const getCompletedSvg = (completed: boolean) => {
    return completed
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
};

const getDeleteSvg = () => {
    return `
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

`;
};

const setupTodo = (
    todo: TTodo,
    onToggle: (id: string) => void,
    onDelete: (id: string) => void,
): HTMLDivElement => {
    const container = document.createElement("div");
    container.classList.add("border-t-2", "border-gray-100", "text-2xl", "py-3");

    const group = document.createElement("div");
    group.classList.add("group", "flex", "flex-row", "items-center");

    const completedButton = document.createElement("button");
    completedButton.classList.add("flex", "w-12", "flex-col", "items-center", "justify-center");
    if (todo.completed) {
        completedButton.classList.add("text-green-500");
    }
    completedButton.onclick = () => onToggle(todo.id);
    completedButton.innerHTML = getCompletedSvg(todo.completed);

    const contentLabel = document.createElement("label");
    contentLabel.classList.add("flex", "min-w-0", "flex-1", "items-center", "break-all");
    if (todo.completed) {
        contentLabel.classList.add("text-gray-500", "line-through");
    } else {
        contentLabel.classList.add("text-gray-800");
    }
    contentLabel.textContent = todo.content;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("w-12", "text-red-700", "opacity-0", "group-hover:opacity-100");
    deleteButton.onclick = () => onDelete(todo.id);
    deleteButton.innerHTML = getDeleteSvg();

    group.appendChild(completedButton);
    group.appendChild(contentLabel);
    group.appendChild(deleteButton);
    container.appendChild(group);

    return container;
};

export default setupTodo;
