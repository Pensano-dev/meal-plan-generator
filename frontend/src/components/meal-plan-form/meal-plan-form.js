import * as React from "react";
import {
  ChakraProvider,
  Container,
  Heading,
  Button,
  Box,
  Divider,
  Text,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
  Checkbox,
  Flex,
  Input,
  Center,
} from "@chakra-ui/react";

function MealPlanForm({ onChange, onSubmit, isValid }) {
  return (
    <ChakraProvider>
      <Container textAlign="right" maxW="container.md">
        <Heading as="h1" size="xl" my={8} textAlign="center">
          Weekly meal plan generator
        </Heading>
        <Box bg="gray.300" textAlign="justify" borderRadius="2xl" padding={8}>
          <Text fontSize="lg" color="black" mb={2}>
            Welcome to the meal plan generator.
          </Text>
          <Text fontSize="lg" color="black" mb={2}>
            It generates a personalised 7-day plan that meets your dietary wants
            and requirements.
          </Text>
          <Text fontSize="lg" color="black">
            Taking into account:
          </Text>
          <Text>
            • your preferences <br />
            • having three food groups at every meal <br />
            • the concept of "good fats <br />
            • the concepts of blood sugar balance (sugar restriction) <br />
          </Text>
          <Text fontSize="lg" color="black" mt={2}>
            All presented for you as a neat plan of three main meals and an
            optional snack
          </Text>
        </Box>

        <Button bg="#ffb301" mt={8} borderRadius="3xl">
          Lets Get Started!
        </Button>
        <Divider mt={10} mb={-3} />
        <Box
          as="button"
          size="lg"
          borderRadius="3xl"
          bg="gray.300"
          color="gray.600"
          px={4}
          position="relative"
          zIndex="2"
        >
          User options
        </Box>
      </Container>

      {/* Form below */}
      <Container maxW="container.md">
        <FormControl mb={6}>
          <Heading my={4}>01</Heading>
          <FormLabel mb={4}>What age group is your meal plan for?</FormLabel>
          <RadioGroup onChange={onChange}>
            <Stack spacing={4} direction="row">
              {/* values need to be double-checked */}
              <Radio value="infant">6-24 months</Radio>
              <Radio value="child">3-12 years</Radio>
              <Radio value="adult">over 12 years</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl mb={4}>
          <Heading my={4}>02</Heading>
          <FormLabel mb={4}>Any food allergies or intolerances?</FormLabel>
          <Flex spacing={6} direction="row" mb={6}>
            <Checkbox w="150px">Lactose</Checkbox>
            <Checkbox w="150px">Gluten</Checkbox>
            <Checkbox w="150px">Wheat</Checkbox>
            <Checkbox w="150px">Eggs</Checkbox>
            <Checkbox w="150px">Peanuts</Checkbox>
          </Flex>
          <Flex spacing={6} direction="row" mb={6}>
            <Checkbox w="150px">Tree nuts</Checkbox>
            <Checkbox w="150px">Soybeans</Checkbox>
            <Checkbox w="150px">Sesame seeds</Checkbox>
            <Checkbox w="150px">Shellfish</Checkbox>
            <Checkbox w="150px">Fish</Checkbox>
          </Flex>
          <Text mb={4}>
            Other (please separate each food item with a comma ",")
          </Text>
          <Input type="text"></Input>
        </FormControl>
        <FormControl>
          <Heading my={4}>03</Heading>
          <FormLabel mb={4}>Tick the boxes which apply to you:</FormLabel>
          <Flex spacing={6} direction="row" mb={6}>
            <Checkbox w="200px">Mixed Food Diet</Checkbox>
            <Checkbox w="200px">Paleo</Checkbox>
            <Checkbox w="200px">Vegan</Checkbox>
          </Flex>
          <Flex spacing={6} direction="row" mb={6}>
            <Checkbox w="200px">Low Carb</Checkbox>
            <Checkbox w="200px">Pescetarian</Checkbox>
            <Checkbox w="200px">Vegetarian</Checkbox>
          </Flex>
          <Text mb={4}>
            Any food that you want to include (please separate each food item
            with a comma ",")
          </Text>
          <Input type="text"></Input>
        </FormControl>
        <Center my={10}>
          <Button bg="#ffb301" borderRadius="3xl">
            CREATE YOUR MEAL PLAN
          </Button>
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default MealPlanForm;
