const Clear = (p: { onClick: () => void }) => {
    return (
        <button onClick={p.onClick} className="font-light hover:underline">
            Clear Completed
        </button>
    );
};

export default Clear;
