"use client";

import type { TTab, TTodo } from "@/utils/types";

import { useState } from "react";
import { generateId } from "@/utils/random";

import Clear from "@/components/Clear";
import Input from "@/components/Input";
import Tabs from "@/components/Tabs";
import Todo from "@/components/Todo";
import Toggle from "@/components/Toggle";

const Home = () => {
    const [todos, setTodos] = useState<TTodo[]>([]);
    const [activeTab, setActiveTab] = useState<TTab>("All");

    return (
        <div className="mx-auto flex min-h-screen w-full flex-col items-center bg-[#f5f5f5]">
            <h1 className="pt-10 text-center text-8xl text-red-500 text-opacity-60">todos</h1>
            <main className="mb-20 mt-8 w-full max-w-prose rounded-lg bg-white p-3 shadow-2xl">
                <div className="flex h-16 flex-row text-2xl">
                    <Toggle
                        todos={todos}
                        onSelect={() => {
                            setTodos(prev =>
                                prev.map(todo => {
                                    if (todo.completed) return todo;
                                    return { ...todo, completed: true };
                                }),
                            );
                        }}
                        onUnselect={() => {
                            setTodos(prev =>
                                prev.map(todo => {
                                    return { ...todo, completed: false };
                                }),
                            );
                        }}
                    />
                    <Input
                        onSave={content => {
                            setTodos(prev => [
                                ...prev,
                                { id: generateId(), content, completed: false },
                            ]);
                        }}
                    />
                </div>
                {todos
                    .filter(todo => {
                        if (activeTab === "Active") {
                            return !todo.completed;
                        }
                        if (activeTab === "Completed") {
                            return todo.completed;
                        }
                        return true;
                    })
                    .map((todo, index) => (
                        <Todo
                            key={index}
                            todo={todo}
                            onToggle={id => {
                                setTodos(prev =>
                                    prev.map(todo => {
                                        if (todo.id !== id) return todo;
                                        return { ...todo, completed: !todo.completed };
                                    }),
                                );
                            }}
                            onDelete={id => {
                                setTodos(prev => prev.filter(todo => todo.id !== id));
                            }}
                        />
                    ))}
                <div className="flex flex-row flex-wrap items-center border-t-2 border-gray-100 p-2 font-light sm:flex-nowrap">
                    <div className="order-1 flex flex-1 flex-row justify-start">
                        {todos.filter(todo => !todo.completed).length} items left
                    </div>
                    <div className="order-2 flex flex-1 flex-row justify-end sm:order-3">
                        <Clear
                            onClick={() => {
                                setTodos(prev => prev.filter(todo => !todo.completed));
                            }}
                        />
                    </div>
                    <Tabs
                        activeTab={activeTab}
                        onClick={activeTab => {
                            setActiveTab(activeTab);
                        }}
                    />
                </div>
            </main>
        </div>
    );
};

export default Home;
