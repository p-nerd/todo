import { TTab } from "../utils/types";

const Tab = (p: { tab: TTab; activeTab: TTab; onClick: (activeTab: TTab) => void }) => {
    return (
        <button
            className={`mx-2 rounded border px-1 ${p.tab === p.activeTab ? "border-red-900" : "border-transparent hover:border-red-100"}`}
            onClick={() => p.onClick(p.tab)}
        >
            {p.tab}
        </button>
    );
};

const Tabs = (p: { activeTab: TTab; onClick: (activeTab: TTab) => void }) => {
    return (
        <div className="order-3 flex min-w-full flex-1 flex-row justify-center sm:order-2 sm:min-w-min">
            <Tab tab="All" activeTab={p.activeTab} onClick={p.onClick} />
            <Tab tab="Active" activeTab={p.activeTab} onClick={p.onClick} />
            <Tab tab="Completed" activeTab={p.activeTab} onClick={p.onClick} />
        </div>
    );
};

export default Tabs;
