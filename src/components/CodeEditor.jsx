import React, { useState } from "react";
import { Box, Button, HStack, Textarea, useToast } from "@chakra-ui/react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/sql/sql";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/clike/clike";
import "codemirror/mode/php/php";
import "codemirror/mode/go/go";
import "codemirror/mode/rust/rust";
import "codemirror/mode/swift/swift";
import "codemirror/mode/ruby/ruby";
import "codemirror/mode/perl/perl";
import "codemirror/mode/r/r";
import "codemirror/mode/shell/shell";
import "codemirror/mode/clojure/clojure";
import "codemirror/mode/coffeescript/coffeescript";
import "codemirror/mode/haskell/haskell";
import "codemirror/mode/julia/julia";
import "codemirror/mode/kotlin/kotlin";
import "codemirror/mode/lua/lua";
import "codemirror/mode/scheme/scheme";
import "codemirror/mode/smalltalk/smalltalk";
import "codemirror/mode/tcl/tcl";
import "codemirror/mode/vb/vb";
import "codemirror/mode/verilog/verilog";
import "codemirror/mode/vhdl/vhdl";

const CodeEditor = ({ initialCode, language, onSave, onRun }) => {
  const [code, setCode] = useState(initialCode);
  const toast = useToast();

  const handleSave = () => {
    onSave(code);
    toast({
      title: "Code saved.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRun = () => {
    onRun(code);
  };

  return (
    <Box>
      <HStack mb={4}>
        <Button colorScheme="blue" onClick={handleSave}>Save</Button>
        <Button colorScheme="green" onClick={handleRun}>Run</Button>
      </HStack>
      <CodeMirror
        value={code}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
        options={{
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Box>
  );
};

export default CodeEditor;