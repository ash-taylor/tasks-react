import React, { useState } from 'react';
import { Box, Flex, Divider } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editInputText, setEditInputText] = useState('');

  function handleInput(e) {
    setInputText(e.target.value);
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

  return (
    <>
      <Navbar />
      <Flex
        width={'100vw'}
        height={'100vh'}
        alignContent={'center'}
        justifyContent={'center'}
        mt="5"
      >
        <Box maxW={'2xl'} m={'0 auto'}>
          <TaskForm
            handleInput={handleInput}
            inputText={inputText}
            handleSubmit={handleSubmit}
          />
          {tasks.length > 0 && <Divider mt="2" />}
          <Overview
            tasks={tasks}
            setTasks={setTasks}
            editInputText={editInputText}
            setEditInputText={setEditInputText}
          />
        </Box>
      </Flex>
    </>
  );
}

export default App;
