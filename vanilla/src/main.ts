import "./style.css";
import type { TTab, TTodo } from "./types";
import { generateId } from "./utils";
import { activeTab, todos } from "./states";
import { setupTodo, setupTabs } from "./setups";

const handleToogleAll = () => {
    if (todos.get().reduce((x, todo) => x && todo.completed, true)) {
        todos.set(
            todos.get().map(todo => {
                return { ...todo, completed: false };
            }),
        );
    } else {
        todos.set(
            todos.get().map(todo => {
                if (todo.completed) return todo;
                return { ...todo, completed: true };
            }),
        );
    }
    render();
};

const handleSaveTodo = (content: string) => {
    todos.set([...todos.get(), { id: generateId(), content, completed: false }]);
    render();
};

const handleToogle = (id: string) => {
    todos.set(
        todos.get().map(todo => {
            if (todo.id !== id) return todo;
            return { ...todo, completed: !todo.completed };
        }),
    );
    render();
};

const handleDelete = (id: string) => {
    todos.set(todos.get().filter(todo => todo.id !== id));
    render();
};

const handleTabClick = (tab: TTab) => {
    if (tab === activeTab.get()) return;
    activeTab.set(tab);
    render();
};

const handleClearCompleted = () => {
    todos.set(todos.get().filter(todo => !todo.completed));
    render();
};

const filterTodos = (todos: TTodo[]) => {
    return todos.filter(todo => {
        const _activeTab = activeTab.get();
        if (_activeTab === "Active") {
            return !todo.completed;
        }
        if (_activeTab === "Completed") {
            return todo.completed;
        }
        return true;
    });
};

const renderHeader = () => {
    const selectAll = document.getElementById("toggle-all-btn")!;
    selectAll.onclick = handleToogleAll;

    const todoInput = document.getElementById("todo-input")! as HTMLInputElement;
    todoInput.onkeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSaveTodo(todoInput.value || "");
            todoInput.value = "";
        }
    };
};

const renderTodos = () => {
    const todosRoot = document.getElementById("todos-root")!;
    todosRoot.innerHTML = "";
    const _todos = filterTodos(todos.get());
    _todos.forEach(todo => todosRoot.appendChild(setupTodo(todo, handleToogle, handleDelete)));
};

const renderFooter = () => {
    const todoItemsLeft = document.getElementById("todo-items-left")!;
    todoItemsLeft.innerText = `${todos.get().filter(todo => !todo.completed).length} items left`;

    const tabsRoot = document.getElementById("tabs-root")!;
    tabsRoot.innerHTML = "";
    const tabs = setupTabs(activeTab.get(), handleTabClick);
    tabs.forEach(tabElement => tabsRoot.appendChild(tabElement));

    const clearCompleted = document.getElementById("clear-completed-btn")!;
    clearCompleted.onclick = handleClearCompleted;
};

const render = () => {
    renderHeader();
    renderTodos();
    renderFooter();
};

render();
