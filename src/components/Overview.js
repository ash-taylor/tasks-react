import React from 'react';
import { IconButton, List, ListItem } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export default function Overview({ tasks, handleRemove }) {
  const listElements = tasks.map((task) => (
    <ListItem key={task.id}>
      <IconButton
        onClick={() => handleRemove(task.id)}
        size="xs"
        variant="outline"
        colorScheme="blue"
        aria-label="task complete"
        icon={<DeleteIcon />}
        mr="2"
      />
      {task.value}
    </ListItem>
  ));

  return (
    <List spacing="2" mt="2">
      {listElements}
    </List>
  );
}
