"use client";
import { useState } from "react";

const TaskForm = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onSubmit({ title, description, dueDate });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-3 bg-white dark:bg-neutral-900 rounded shadow"
    >
      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full mb-2 p-2 border rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        className="w-full mb-3 p-2 border rounded"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-gray-400 text-white px-3 py-1 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;