import type { TTab, TTodo } from "./types";

let _activeTab: TTab = "All";

const TODOS_KEY = "p-nerd-app-todos";

export const todos = {
    set: (todos: TTodo[]) => localStorage.setItem(TODOS_KEY, JSON.stringify(todos)),
    get: (): TTodo[] => {
        const todos = localStorage.getItem(TODOS_KEY);
        if (!todos) {
            return [];
        }
        const x = JSON.parse(todos);
        console.log(x);
        return x;
    },
};

export const activeTab = {
    set: (activeTab: TTab) => (_activeTab = activeTab),
    get: (): TTab => _activeTab,
};
