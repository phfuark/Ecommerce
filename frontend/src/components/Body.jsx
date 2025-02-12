import { useEffect, useState } from "react";



export default function Body(){
    return(
        <div className="w-[80%] h-screen flex flex-col gap-16 p-7">
            <header className="flex flex-row items-end gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#0ea5e9" className="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
                <p className="text-3xl text-sky-500 font-bold">Tasks</p>
            </header>

            <div className="bg-white rounded-[0.2rem] flex overflow-x-auto p-2 shadow-md">
                <p>All Tasks</p>
            </div>

            <div className="flex ml-7 border-b-[1px] border-gray-400 gap-6 pb-2">
                <div className="flex flex-row items-center gap-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                    </svg>
                    <p>Finished Tasks</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}


