const App = () => {
    return (
        <div className="mx-auto flex min-h-screen w-full flex-col items-center bg-[#f5f5f5]">
            <h1 className="pt-10 text-center text-8xl text-red-500 text-opacity-60">todos</h1>
            <main className="mb-20 mt-8 w-full max-w-prose rounded-lg bg-white p-3 shadow-2xl">
                <div className="flex h-16 flex-row text-2xl">
                    <button className="flex w-12 items-center justify-center text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m3 17 2 2 4-4" />
                            <path d="m3 7 2 2 4-4" />
                            <path d="M13 6h8" />
                            <path d="M13 12h8" />
                            <path d="M13 18h8" />
                        </svg>
                    </button>
                    <input
                        className="min-w-0 flex-1 p-2 placeholder-gray-300 focus:outline-red-500/50"
                        placeholder="What needs to be done?"
                    />
                </div>
                {/* Row One */}
                <div className="border-t-2 border-gray-100 text-2xl">
                    <div className="group flex flex-row items-center">
                        <button className="flex w-12 flex-col items-center justify-center text-green-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <path d="m9 11 3 3L22 4" />
                            </svg>
                        </button>
                        <label className="flex min-w-0 flex-1 items-center break-all p-2 text-gray-500 line-through">
                            Completed Task
                        </label>
                        <button className="w-12 text-red-700 opacity-0 group-hover:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Row Two */}
                <div className="border-t-2 border-gray-100 text-2xl">
                    <div className="group flex flex-row items-center">
                        <button className="flex w-12 flex-col items-center justify-center text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle"
                            >
                                <circle cx={12} cy={12} r={10} />
                            </svg>
                        </button>
                        <label className="flex min-w-0 flex-1 items-center break-all p-2 text-gray-800">
                            Normal Task
                        </label>
                        <button className="w-12 text-red-700 opacity-0 group-hover:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap items-center border-t-2 border-gray-100 p-2 font-light sm:flex-nowrap">
                    <div className="order-1 flex flex-1 flex-row justify-start">2 items left</div>
                    <div className="order-2 flex flex-1 flex-row justify-end sm:order-3">
                        <button className="font-light hover:underline">Clear Completed</button>
                    </div>
                    <div className="order-3 flex min-w-full flex-1 flex-row justify-center sm:order-2 sm:min-w-min">
                        <button className="mx-2 rounded border border-red-900 px-1">All</button>
                        <button className="mx-2 rounded border border-transparent px-1 hover:border-red-100">
                            Active
                        </button>
                        <button className="mx-2 rounded border border-transparent px-1 hover:border-red-100">
                            Completed
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
