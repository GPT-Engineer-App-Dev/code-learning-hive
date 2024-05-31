import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import CodeEditor from "../components/CodeEditor";
import { Link } from "react-router-dom";

const Index = () => {
  const handleSave = (code) => {
    localStorage.setItem("savedCode", code);
  };

  const handleRun = (code) => {
    console.log("Running code:", code);
    // Here you would typically send the code to a server for execution
  };
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">CodeMaster</Heading>
        <Text fontSize="lg">Your Ultimate Online Learning Platform for Coding</Text>
        <Box boxSize="sm">
          <Image src="/images/learning-platform.png" alt="Online Learning Platform" />
        </Box>
        <Button as={Link} to="/courses" colorScheme="blue" size="lg">Explore Courses</Button>
      <CodeEditor initialCode={localStorage.getItem("savedCode") || ""} language="javascript" onSave={handleSave} onRun={handleRun} />
      </VStack>
    </Container>
  );
};

export default Index;