import React, { useState } from 'react';
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  ListItem,
} from '@chakra-ui/react';
import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

export default function Task({ task, setTasks, inputText, setEditInputText }) {
  const [taskEditable, setTaskEditable] = useState(false);

  function initEdit() {
    setEditInputText(task.value);
    setTaskEditable(true);
  }

  function handleInput(event) {
    setEditInputText(event.target.value);
  }

  function handleSave(id) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            value: inputText ? inputText : task.value,
            id: task.id,
          };
        } else {
          return task;
        }
      })
    );
  }

  function handleRemove(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <ListItem key={task.id}>
      <Flex direction="row">
        <IconButton
          onClick={() => handleRemove(task.id)}
          size="xs"
          variant="solid"
          colorScheme="blue"
          aria-label="task complete"
          icon={<DeleteIcon />}
          mr="2"
        />
        <IconButton
          onClick={initEdit}
          size="xs"
          variant="solid"
          colorScheme="blue"
          aria-label="edit task"
          icon={<EditIcon />}
          mr="2"
        />
        {taskEditable ? (
          <InputGroup>
            <Input
              variant="flushed"
              focusBorderColor="pink.400"
              width="auto"
              size="xs"
              onChange={handleInput}
              value={inputText}
            />
            <IconButton
              onClick={() => {
                handleSave(task.id);
                setTaskEditable(false);
              }}
              size="xs"
              variant="solid"
              colorScheme="blue"
              aria-label="save task"
              icon={<CheckIcon />}
              mr="2"
            />
          </InputGroup>
        ) : (
          task.value
        )}
      </Flex>
    </ListItem>
  );
}
