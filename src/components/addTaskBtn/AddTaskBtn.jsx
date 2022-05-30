import React from "react";
import { Link } from "react-router-dom";

import plus from "../../img/plus.svg";

import styles from "./addTaskBtn.module.css";

const AddTaskBtn = () => {
    return (
        <>
            <Link to="/add_task" className={styles.add_btn}>
                <img src={plus} alt="add" />
                <span className={styles.name}>Add Task</span>
            </Link>
        </>
    );
}

export default AddTaskBtn;