import { useState } from "react";

const Input = (p: { onSave: (content: string) => void }) => {
    const [content, setContent] = useState("");
    return (
        <input
            value={content}
            onChange={e => setContent(e.target.value || "")}
            onKeyDown={e => {
                if (e.key === "Enter") {
                    p.onSave(content);
                    setContent("");
                }
            }}
            className="min-w-0 flex-1 p-2 placeholder-gray-300 focus:outline-red-500/50"
            placeholder="What needs to be done?"
        />
    );
};

export default Input;
