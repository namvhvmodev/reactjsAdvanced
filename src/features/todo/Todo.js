import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTaskList, addTask, removeTask } from "./todoSlice";

export const Todo = () => {
    const taskList = useSelector(selectTaskList);
    const [ newTask, setNewTask ] = useState({});
    const dispatch = useDispatch();

    const handleNewTask = () => {
        if(newTask !== null) {
            dispatch(addTask(newTask));
        } else {
            return null;
        }
    }

    const handleChange = (event) => {
        setNewTask({
            id: new Date().valueOf(),
            name: event.target.value,
        });
    }

    const handleDelete = (index) => {
        dispatch(removeTask(index));
    }

    const preventDef = (event) => {
        event.target.reset();
        event.preventDefault();
        setNewTask(null);
    }

    return (
        <section className="todo-container">
            <h2 className="text-white text-3xl text-center mb-10">Todo Application</h2>
            <form onSubmit={preventDef} className="flex items-center justify-center">
                <input type="text" onChange={handleChange} className="rounded-lg h-8 w-3/4 mr-2 outline-none text-xl px-5"/>
                <input type="submit" value='Add Task' onClick={handleNewTask} className="px-4 py-1 rounded-lg cursor-pointer"/>
            </form>
            {taskList.length == 0 && <h3 className="text-center text-white text-xl mt-2">Not todos, yay!</h3>}
            <ul className="px-5 flex justify-center flex-wrap">
                {taskList.map((element, index) => (
                    <li key={index} className="todo-item">
                        <h3 className="todo-item__name">{element.name}</h3>
                        <input type="button" value='X' className="todo-item__delete" onClick={() => handleDelete(element.id)} />
                    </li>
                ))}
            </ul>
        </section>
    )
}