import React from 'react';
import { List } from '@chakra-ui/react';
import Task from './Task';

export default function Overview({
  tasks,
  handleRemove,
  handleEditInput,
  editInputText,
  handleEditSave,
}) {
  const listElements = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleRemove={handleRemove}
      handleInput={handleEditInput}
      inputText={editInputText}
      handleEditSave={handleEditSave}
    />
  ));

  return (
    <List spacing="2" mt="2">
      {listElements}
    </List>
  );
}
