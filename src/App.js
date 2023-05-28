import React, { useState } from 'react';
import { Box, Flex, Divider } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import Overview from './components/Overview';
import Title from './components/Title';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editInputText, setEditInputText] = useState('');

  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleEditInput(event) {
    setEditInputText(event.target.value);
  }

  function handleEditSave(id) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            value: editInputText ? editInputText : task.value,
            id: task.id,
          };
        } else {
          return task;
        }
      })
    );
    setEditInputText('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputText) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          value: inputText,
          id: nanoid(),
        },
      ]);
      setInputText('');
    }
  }

  function removeTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <Flex
      width={'100vw'}
      height={'100vh'}
      alignContent={'center'}
      justifyContent={'center'}
    >
      <Box maxW={'2xl'} m={'0 auto'}>
        <Title />
        <TaskForm
          handleInput={handleInput}
          inputText={inputText}
          handleSubmit={handleSubmit}
        />
        {tasks.length > 0 && <Divider mt="2" />}
        <Overview
          tasks={tasks}
          handleRemove={removeTask}
          handleEditInput={handleEditInput}
          handleEditSave={handleEditSave}
          editInputText={editInputText}
        />
      </Box>
    </Flex>
  );
}

export default App;
