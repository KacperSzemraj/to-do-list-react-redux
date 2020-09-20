import React from 'react';
import { useSelector } from 'react-redux';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import { selectTasks } from './tasksSlice';


function Tasks() {
  const { tasks } = useSelector(selectTasks);

  const {
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container className="container">
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList
            tasks={tasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone} />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;