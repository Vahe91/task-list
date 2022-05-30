import React, { useContext } from "react";
import { Link } from "react-router-dom";
import context from "../../Context";

import check from "../../img/check.svg";
import checkFill from "../../img/check-fill.svg";

import styles from "./list.module.css";

const List = () => {
    const tasks = useContext(context).tasks;
    const setTasks = useContext(context).setTasks;
    const filter = useContext(context).filter;

    const taskList = tasks.filter(task => task.status === filter);

    const handleClick = (task) => {
        task.status = task.status === 'pending' ? 'completed' : 'pending';
        setTasks([...tasks]);
    }

    const cropTitle = (title) => {
        if(title.length <= 120) {
            return title;
        } else {
            return title.substr(0, 120) + '...';
        }
    }

    return (
        <>
            {

                (filter === 'all' ? tasks : taskList).map(task => {
                    return (
                        <div key={task.id} className={styles.task}>
                            <img src={task.status === 'pending' ? check : checkFill} alt='check' className={styles.check} onClick={() => handleClick(task)} />
                            <Link to={`/task_description/${task.id}`} className={styles.name}>{ cropTitle(task.name !== '' ? task.name : task.description) }</Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default List;