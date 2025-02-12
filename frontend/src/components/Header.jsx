import { useState } from "react";
import TaskForm from "./TaskForm";

export default function Header() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <div className="w-20% h-full bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">
                <div className="h-screen px-4 border-r border-gray-300">
                    <div className="h-16 flex items-center">
                        <button
                            onClick={() => setShowForm(true)}
                            className="w-48 mx-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            <p>New Task</p>
                        </button>
                    </div>

                    <div className="px-2 pt-4 pb-8 ">
                        <ul className="space-y-2">
                            <li>
                                <a className="hover:bg-gray-300 hover:bg-opacity-10 hover:text-blue-600 flex items-center justify-between text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                    <p className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                        </svg>
                                        <p>All Tasks</p>
                                    </p>
                                    <p className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">1</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-[400px]">
                        <TaskForm />
                        <button
                            onClick={() => setShowForm(false)}
                            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition duration-150"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
