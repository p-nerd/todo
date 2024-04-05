import type { TTodo } from "./utils/types";

import { useState } from "react";
import Clear from "./components/Clear";
import Input from "./components/Input";
import Tabs from "./components/Tabs";
import Todo from "./components/Todo";
import Toggle from "./components/Toggle";

const App = () => {
    const [todos, setTodos] = useState<TTodo[]>([]);

    return (
        <div className="mx-auto flex min-h-screen w-full flex-col items-center bg-[#f5f5f5]">
            <h1 className="pt-10 text-center text-8xl text-red-500 text-opacity-60">todos</h1>
            <main className="mb-20 mt-8 w-full max-w-prose rounded-lg bg-white p-3 shadow-2xl">
                <div className="flex h-16 flex-row text-2xl">
                    <Toggle />
                    <Input />
                </div>
                {todos.map((todo, index) => (
                    <Todo key={index} todo={todo} />
                ))}
                <div className="flex flex-row flex-wrap items-center border-t-2 border-gray-100 p-2 font-light sm:flex-nowrap">
                    <div className="order-1 flex flex-1 flex-row justify-start">2 items left</div>
                    <div className="order-2 flex flex-1 flex-row justify-end sm:order-3">
                        <Clear />
                    </div>
                    <Tabs />
                </div>
            </main>
        </div>
    );
};

export default App;
