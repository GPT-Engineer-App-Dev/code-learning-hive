import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import CodeEditor from "../components/CodeEditor.jsx";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">CodeMaster</Heading>
        <Text fontSize="lg">Your Ultimate Online Learning Platform for Coding</Text>
        <CodeEditor />
        <Button as={Link} to="/editor" colorScheme="blue" size="lg">Try the Code Editor</Button>
      </VStack>
    </Container>
  );
};

export default Index;