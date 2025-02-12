import { useState } from "react";

export default function TaskForm({ onClose }) {
    const [task, setTask] = useState({
        name: "",
        description: "",
        date: "",
    });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const taskData = JSON.stringify(task); // Transforma os dados em JSON

        try {
            const response = await fetch("https://seu-backend.com/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: taskData,
            });

            if (!response.ok) {
                throw new Error("Erro ao criar a tarefa");
            }

            setTask({ name: "", description: "", date: "" }); // Limpa os campos
            onClose(); // Fecha o modal após sucesso
        } catch (error) {
            console.error("Erro ao enviar tarefa:", error);
        }
    };

    const handleCancel = () => {
        setTask({ name: "", description: "", date: "" });
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md w-[360px]">
            <h2 className="text-xl font-bold">New Task</h2>
            <input
                type="text"
                name="name"
                value={task.name}
                onChange={handleChange}
                placeholder="Task Name"
                className="border p-2 rounded-md"
                required
            />
            <textarea
                name="description"
                value={task.description}
                onChange={handleChange}
                placeholder="Description"
                className="border p-2 rounded-md"
                required
            />
            <input
                type="date"
                name="date"
                value={task.date}
                onChange={handleChange}
                className="border p-2 rounded-md"
                required
            />
            <div className="flex justify-between">
                <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition w-1/2">
                    Add Task
                </button>
                <button 
                    type="button" 
                    onClick={handleCancel} 
                    className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition w-1/2 ml-2">
                    Cancel
                </button>
            </div>
        </form>
    );
}
