// taskCard.jsx
"use client";
import { Draggable } from "@hello-pangea/dnd";
import ButtonBorder from "../Buttons/Button_border/ButtonBorder";
import { MdDeleteForever } from "react-icons/md";
import { LuFilePen } from "react-icons/lu";

const TaskCard = ({ task, index, onEdit, onDelete, status }) => {
  const isTodo = status === "todo";
  const deleteAble = status === "todo" || status === "inprogress" || status === "completed";
  const editAble = status === "todo";

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className=" p-3 rounded shadow mb-2"
        >
          <h3 className="font-medium">{task.title}</h3>
          <p className="text-xs">{task.description}</p>
          <p className="text-right text-xs mt-1">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>

          <div className="flex justify-end mt-2 space-x-2">
            {editAble && ( 
              <button
              className="text-sm text-red-300 hover:text-white duration-1000 cursor-pointer"
               onClick={() => onEdit(task._id)}>
                <ButtonBorder>
                  Delete
                </ButtonBorder>
              </button>
            )}
            {deleteAble && (
              <button
              className="text-sm text-yellow-200 hover:text-white duration-1000 cursor-pointer"
               onClick={() => onDelete(task._id)}>
                <ButtonBorder>
                  Edit
                </ButtonBorder>
              </button>
            )}
          </div>
          <div>
        
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;