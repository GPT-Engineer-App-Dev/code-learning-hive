import { useState } from "react";
import { Box, Button, HStack, Textarea, useToast } from "@chakra-ui/react";
import { runCode } from "../utils/codeRunner";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const toast = useToast();

  const handleRun = () => {
    try {
      const output = runCode(code);
      toast({
        title: "Code Executed",
        description: output,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} width="100%">
      <HStack spacing={4} mb={4}>
        <Button colorScheme="blue" onClick={handleRun}>Run</Button>
      </HStack>
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        rows={20}
        width="100%"
      />
    </Box>
  );
};

export default CodeEditor;