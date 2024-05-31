import { useState } from "react";
import { Container, VStack, Heading, Button, Box, Text } from "@chakra-ui/react";

const coursesData = [
  { id: 1, title: "Introduction to JavaScript", enrolled: false },
  { id: 2, title: "Advanced React Development", enrolled: false },
  { id: 3, title: "Python for Data Science", enrolled: false },
];

const Courses = () => {
  const [courses, setCourses] = useState(coursesData);
  const [message, setMessage] = useState("");

  const handleEnroll = (id) => {
    setCourses(courses.map(course => {
      if (course.id === id) {
        return { ...course, enrolled: true };
      }
      return course;
    }));
    setMessage("You have successfully enrolled in the course!");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">Available Courses</Heading>
        {courses.map(course => (
          <Box key={course.id} borderWidth="1px" borderRadius="lg" p={4} width="100%">
            <Heading as="h2" size="md">{course.title}</Heading>
            {course.enrolled ? (
              <Text color="green.500" mt={2}>Enrolled</Text>
            ) : (
              <Button colorScheme="blue" mt={4} onClick={() => handleEnroll(course.id)}>Enroll</Button>
            )}
          </Box>
        ))}
        {message && <Text color="green.500" fontSize="lg">{message}</Text>}
      </VStack>
    </Container>
  );
};

export default Courses;