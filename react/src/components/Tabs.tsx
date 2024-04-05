const Tabs = () => {
    return (
        <div className="order-3 flex min-w-full flex-1 flex-row justify-center sm:order-2 sm:min-w-min">
            <button className="mx-2 rounded border border-red-900 px-1">All</button>
            <button className="mx-2 rounded border border-transparent px-1 hover:border-red-100">
                Active
            </button>
            <button className="mx-2 rounded border border-transparent px-1 hover:border-red-100">
                Completed
            </button>
        </div>
    );
};

export default Tabs;
