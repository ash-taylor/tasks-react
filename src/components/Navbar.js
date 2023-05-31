import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex as="nav" p="2" alignItems="flex-start" gap="4" boxShadow="base">
      <Heading as="h1">Task List</Heading>
      <Text fontSize="xl" mt="12px">
        A simple task list application
      </Text>
      <Spacer />
      <HStack spacing="20px" alignItems="center">
        <Box bg="gray.200" p="10px" borderRadius="40%">
          A
        </Box>
        <Text>ash@tasklist.com</Text>
        <Button colorScheme="blue">Logout</Button>
      </HStack>
    </Flex>
  );
}
