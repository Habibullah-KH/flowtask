"use client"
import { DragDropContext } from '@hello-pangea/dnd';
import React, { useEffect, useState } from 'react'
import Column from './Column';

export default function KanbanBoard() {
   const [tasks, setTasks] = useState([]);

useEffect(() => {
  fetch("/api/dbTest")
    .then((res) => res.json())
    .then((data) => {
      setTasks(data.tasks);
    })
    .catch((err) => console.error("Fetch error:", err));
}, []);

const handleDragEnd = async (result) => {
  const { source, destination, draggableId } = result;
  console.log(source);
  if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
    const updatedTasks = tasks.map((task) =>
      task._id === draggableId
        ? { ...task, status: destination.droppableId }
        : task
    );
    setTasks(updatedTasks);

        await fetch(`/api/tasks/${draggableId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: destination.droppableId }),
    });
  }
};

  const statuses = ["todo", "inprogress", "completed"];

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {statuses.map((status) => (
          <Column
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
            setTasks={setTasks}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
