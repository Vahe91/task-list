import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import context from "../../Context";
import uniqId from "uniqid"

import Header from "../header/Header";

import styles from "./addTaskBoard.module.css";

const AddTaskForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const tasks = useContext(context).tasks;
    const setTasks = useContext(context).setTasks;

    const addNewTask = () => {
        
        const newTask = {
            id: uniqId(),
            name: name,
            description: description,
            status: 'pending'
        }

        setTasks([...tasks, newTask])
    }

    return (
        <>
            <Header name='Add Task' />
            <form className="container">
                <Link to={'/'} className={styles.btn}>Close</Link>
                <Link to={'/'} className={styles.btn} onClick={addNewTask}>Create</Link>
                <input 
                type="text" 
                className={styles.name} 
                placeholder='Enter the task name:'
                onChange={(e) => setName(e.target.value)}
                 />
                <textarea 
                className={styles.description} 
                placeholder='Enter the task description:'
                onChange={(e) => setDescription(e.target.value)}
                 />
            </form>
        </>
    );
}

export default AddTaskForm;