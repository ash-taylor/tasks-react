import { Button, Center, Input, Stack } from '@chakra-ui/react';
import React from 'react';

export default function TaskForm({ handleInput, inputText, handleSubmit }) {
  return (
    <Stack spacing="2" direction="column" align="center">
      <Input
        placeholder="Enter your task..."
        size="md"
        onChange={handleInput}
        value={inputText}
      />
      <Center>
        <Button onClick={handleSubmit} value="Submit" colorScheme="blue">
          Add Task
        </Button>
      </Center>
    </Stack>
  );
}
