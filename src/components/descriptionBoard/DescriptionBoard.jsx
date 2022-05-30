import React, { useContext } from "react";
import { Link, useMatch } from "react-router-dom";
import context from "../../Context";

import Header from "../header/Header";

import arrowLeft from "../../img/arrow-left.js";
import done from "../../img/done.js"
import del from "../../img/delete.js"

import styles from "./descriptionBoard.module.css";

const DescriptionBoard = () => {
    const tasks = useContext(context).tasks;
    const setTasks = useContext(context).setTasks;
    const { params: {taskId} } = useMatch('task_description/:taskId');

    const task = tasks.find(task => task.id === taskId);
    let name = task.name;
    let description = task.description;

    const handleDelete = () => {
        const deletedTask = tasks.findIndex(del => del.id === task.id);
        setTasks([...tasks.slice(0, deletedTask), ...tasks.slice(deletedTask + 1)])
    }

    const handleClick = () => {
            task.name = name;
            task.description = description;
            setTasks([...tasks]);
    }

    const handleChangeName = (e) => {
        name = e.target.value;
    }

    const handleChangeDescription = (e) => {
        description = e.target.value;
    }

    return (
        <>
            <Header name={'Task Description'} />
            <div className="container">
                <Link to={'/'} className={styles.back_btn}>
                    {arrowLeft}
                    <span>Back</span>
                </Link>
                <div className={styles.right_btn}>
                    <Link to={'/'} className={styles.done_btn} onClick={handleClick}>{done}</Link>
                    <Link to={'/'} onClick={handleDelete} className={styles.delete_btn}>{del}</Link>
                </div>
                <input 
                type="text" 
                className={styles.name} 
                placeholder='Enter the task name:' 
                defaultValue={task.name}
                onChange={(e) => handleChangeName(e)}
                 />
                <textarea 
                className={styles.description}
                placeholder='Enter the task description:'
                defaultValue={task.description}
                onChange={(e) => handleChangeDescription(e)}
                 />
            </div>
        </>
    );
}

export default DescriptionBoard;