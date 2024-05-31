export const runCode = (code) => {
  // This is a mock function to simulate code execution
  if (code.includes("error")) {
    throw new Error("Syntax Error: Unexpected token 'error'");
  }
  return "Code executed successfully. Output: Hello, World!";
};