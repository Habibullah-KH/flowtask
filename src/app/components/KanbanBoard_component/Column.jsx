// column.jsx
"use client";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import { useState } from "react";
import { Droppable } from "@hello-pangea/dnd";
import ButtonBorder from "../Buttons/Button_border/ButtonBorder";

const Column = ({ status, tasks, setTasks }) => {
  const [showForm, setShowForm] = useState(false);

  const titles = {
    todo: "To Do",
    inprogress: "In Progress",
    completed: "Completed",
  };

  const handleCreate = async (newTask) => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newTask, status: "todo" }),
    });

    const data = await res.json();
    setTasks((prev) => [...prev, data.task]);
    setShowForm(false);
  };


  const handleEditTask = async (taskId) => {
    try{
      await fetch(`/api/tasks/edit/${taskId}`,{
        method: "PUT",
      })
    }
     catch (error) {
        alert("Error deleting task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
        await fetch(`/api/tasks/${taskId}`, {
            method: "DELETE",
        });

        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
        alert("Error deleting task:", error);
    }
  };



  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-gray-100 dark:bg-neutral-800 rounded-lg p-4 shadow min-h-[400px]"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">{titles[status]}</h2>
            {status === "todo" && (
              <button
                onClick={() => setShowForm(true)}
                className="text-blue-300 text-sm hover:text-white duration-1000"
              >
              <ButtonBorder>
                + Add Task
              </ButtonBorder>
              </button>
            )}
          </div>

          {tasks.map((task, index) => (
            <TaskCard
              key={task._id}
              task={task}
              index={index}
              status={status} 
              onEdit={handleEditTask} 
              onDelete={handleDeleteTask} 
            />
          ))}
          {provided.placeholder}

          {showForm && <TaskForm onSubmit={handleCreate} onClose={() => setShowForm(false)} />}
        </div>
      )}
    </Droppable>
  );
};

export default Column;