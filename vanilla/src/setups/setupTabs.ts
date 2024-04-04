import { TTab } from "../types";

const createTabButton = (tab: TTab, activeTab: TTab, onClick: (tab: TTab) => void) => {
    const button = document.createElement("div");
    button.classList.add("mx-2", "rounded", "border", "px-1", "cursor-pointer");
    if (activeTab === tab) {
        button.classList.add("border-red-900");
    } else {
        button.classList.add("border-transparent", "hover:border-red-100");
    }
    button.innerText = tab;
    button.onclick = () => onClick(tab);

    return button;
};

const setupTabs = (activeTab: TTab, onClick: (tab: TTab) => void) => {
    return [
        createTabButton("All", activeTab, onClick),
        createTabButton("Active", activeTab, onClick),
        createTabButton("Completed", activeTab, onClick),
    ];
};

export default setupTabs;
