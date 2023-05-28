import React from 'react';
import { List } from '@chakra-ui/react';
import Task from './Task';

export default function Overview({
  tasks,
  setTasks,
  editInputText,
  setEditInputText,
}) {
  const listElements = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      setTasks={setTasks}
      inputText={editInputText}
      setEditInputText={setEditInputText}
    />
  ));

  return (
    <List spacing="2" mt="2">
      {listElements}
    </List>
  );
}
