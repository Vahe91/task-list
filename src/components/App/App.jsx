import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Context from "../../Context";

import TaskBoard from "../taskBoard/TaskBoard";
import AddTaskBoard from "../addTaskBoard/AddTaskBoard";
import DescriptionBoard from "../descriptionBoard/DescriptionBoard";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('pending');

    return (
        <Context.Provider value={{tasks, setTasks, filter, setFilter}}>
            <Routes>
                <Route path="/" element={<TaskBoard />} />
                <Route path="/add_task" element={<AddTaskBoard />} />
                <Route path="task_description/:taskId" element={<DescriptionBoard />} />
            </Routes>
        </Context.Provider>
    );
}

export default App;