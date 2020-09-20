import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Content, Button } from "./styled";

const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);

    const dispatch = useDispatch();
    
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                    className={`tasks__item${
                        task.done && hideDone
                        ? " tasks__item--hidden"
                        : ""}`
                    }
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;