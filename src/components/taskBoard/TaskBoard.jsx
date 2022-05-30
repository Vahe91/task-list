import React from "react";

import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import AddTaskBtn from "../addTaskBtn/AddTaskBtn";

import styles from "./taskBoard.module.css"
import List from "../list/List";

const TaskBoard = () => {
    return (
        <>
            <Header name='Tasks' />
            <div className="container">
                <Navbar />
                <main className={styles.main}>
                    <AddTaskBtn />
                    <List />
                </main>
            </div>
        </>
    );
}

export default TaskBoard;