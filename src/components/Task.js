import React, { useState } from 'react';
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  ListItem,
} from '@chakra-ui/react';
import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

export default function Task({
  task,
  handleRemove,
  handleInput,
  inputText,
  handleEditSave,
}) {
  const [taskEditable, setTaskEditable] = useState(false);

  function handleEdit() {
    setTaskEditable(true);
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
          onClick={handleEdit}
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
              value={inputText ? inputText : task.value}
            />
            <IconButton
              onClick={() => {
                handleEditSave(task.id);
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
