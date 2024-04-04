import type { TTab, TTodo } from "./types";

let _activeTab: TTab = "All";

const TODOS_KEY = "p-nerd-app-todos";

export const todos = {
    set: (todos: TTodo[]) => localStorage.setItem(TODOS_KEY, JSON.stringify(todos)),
    get: (): TTodo[] => JSON.parse(localStorage.getItem(TODOS_KEY) || ""),
};

export const activeTab = {
    set: (activeTab: TTab) => (_activeTab = activeTab),
    get: (): TTab => _activeTab,
};
