import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Title() {
  return (
    <Box>
      <Heading as="h1" textAlign={'center'} fontSize="4xl" mt="20px">
        Task List
      </Heading>
      <Text fontSize="xl" textAlign="center" mt="10px" mb="5">
        A simple task list application
      </Text>
    </Box>
  );
}
