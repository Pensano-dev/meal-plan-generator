import * as React from "react";
function MealPlanForm({ onChange, onSubmit, isValid }) {
  // inline CSS for now but may need to move this out to a separate file if we have more later
  const requiredStyle = {
    color: "red",
    flex: 1,
    marginLeft: "5px",
  };

  const containerStyle = {
    display: "flex",
  };

  const [clickCount, setClickCount] = React.useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <>
      <h1>Welcome to the 7-Day Meal Plan Generator</h1>

      <p>This program will take into account:</p>
      <p>
        • age group
        <br />
        • food allergies and/or intolerances
        <br />
        • having the three food groups at every meal to support blood sugar balance
      </p>
      <h2>Let's Get Started!</h2>
      <p>Choose your options:</p>
      <form>
        <div style={containerStyle}>
          <p>Which age group is your meal plan for?</p>
          <p style={requiredStyle}>*</p>
        </div>
        <input
          type="radio"
          id="age1"
          name="age"
          value="6-24"
          required
          onChange={onChange}
        />
        <label htmlFor="age">6-24 months</label>
        <input
          type="radio"
          id="age2"
          name="age"
          value="3-12"
          onChange={onChange}
        />
        <label htmlFor="age">3-12 years old</label>
        <input
          type="radio"
          id="age3"
          name="age"
          value="12+"
          onChange={onChange}
        />
        <label htmlFor="age">12+ years old</label>

        <p>Any food allergies or intolerances?</p>

        <input
          type="checkbox"
          id="allergies"
          value="eggs"
          onChange={onChange}
        />
        <label htmlFor="allergies">Eggs</label>
        <input
          type="checkbox"
          id="allergies"
          value="fish"
          onChange={onChange}
        />
        <label htmlFor="allergies">Fish</label>
        <input
          type="checkbox"
          id="allergies"
          value="gluten"
          onChange={onChange}
        />
        <label htmlFor="allergies">Gluten</label>
        <input
          type="checkbox"
          id="allergies"
          value="milk"
          onChange={onChange}
        />
        <label htmlFor="allergies">Milk</label>
        <input
          type="checkbox"
          id="allergies"
          value="peanuts"
          onChange={onChange}
        />
        <label htmlFor="allergies">Peanuts</label>
        <input
          type="checkbox"
          id="allergies"
          value="shellfish"
          onChange={onChange}
        />
        <label htmlFor="allergies">Shellfish</label>
        <input type="checkbox" id="allergies" value="soy" onChange={onChange} />
        <label htmlFor="allergies">Soy</label>
        <input
          type="checkbox"
          id="allergies"
          value="treenuts"
          onChange={onChange}
        />
        <label htmlFor="allergies">Tree nuts</label>

        <p>Please input any other intolerances</p>
        <input
          type="text"
          id="other-food-intolerances"
          name="other-food-intolerance"
          placeholder="Enter foods here separated by commas"
          onChange={onChange}
          style={{ border: isValid ? "" : "1px solid red" }}
        />

        <p>Please tick which boxes relate to the person's current diet:</p>
        <input type="checkbox" id="diet" value="mixed" onChange={onChange} />
        <label htmlFor="diet">
          Mixed food diet (animal and vegetable sources)
        </label>
        <input
          type="checkbox"
          id="diet"
          value="pescatarian"
          onChange={onChange}
        />
        <label htmlFor="diet">Pescetarian</label>
        <input type="checkbox" id="diet" value="starch" onChange={onChange} />
        <label htmlFor="diet">Low carb</label>
        <input type="checkbox" id="diet" value="vegan" onChange={onChange} />
        <label htmlFor="diet">Vegan</label>
        <input
          type="checkbox"
          id="diet"
          value="vegetarian"
          onChange={onChange}
        />
        <label htmlFor="diet">Vegetarian</label>
        <input type="checkbox" id="diet" value="paleo" onChange={onChange} />
        <label htmlFor="diet">Paleo</label>

        <p>
          Are there any foods which you want the mealplan to include? (separated
          by comma ",")
        </p>
        <input
          type="text"
          id="other-food-include"
          name="other-food-include"
          placeholder="Enter foods here separated by commas"
          onChange={onChange}
          style={{ border: isValid ? "" : "1px solid red" }}
        />

        <p>Please submit when ready</p>
        <button type="submit" onClick={[onSubmit, handleButtonClick]}>
          Generate Meal Plan ({clickCount} generated)
        </button>
      </form>
    </>
  );
}

export default MealPlanForm;

// import * as React from "react";
// import {
//   ChakraProvider,
//   Container,
//   Heading,
//   Button,
//   Box,
//   Divider,
//   Text,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   Stack,
//   Radio,
//   Checkbox,
//   Flex,
//   Input,
//   Center,
// } from "@chakra-ui/react";

// function MealPlanForm({ onChange, onSubmit, isValid }) {
//   return (
//     <ChakraProvider>
//       <Container textAlign="right" maxW="container.md">
//         <Heading as="h1" size="xl" my={8} textAlign="center">
//           7-Day Meal Plan Generator
//         </Heading>
//         <Box bg="gray.300" textAlign="justify" borderRadius="2xl" padding={8}>
//           <Text fontSize="lg" color="black" mb={2}>
//             Welcome to the meal plan generator.
//           </Text>
//           <Text fontSize="lg" color="black" mb={2}>
//             It generates a personalised 7-day plan that meets your dietary wants
//             and requirements.
//           </Text>
//           <Text fontSize="lg" color="black">
//             Taking into account:
//           </Text>
//           <Text>
//             • age group<br />
//             • food allergies and/or intolerances<br />
//             • dietary preferences <br />
//             • having the three food groups at every meal to support blood sugar balance<br />

//           </Text>
//           <Text fontSize="lg" color="black" mt={2}>
//             All presented for you as a neat plan of three main meals and an
//             optional snack.
//           </Text>
//         </Box>

//         <Text my={8} fontSize="lg" padding="5px" textAlign="center" bg="#cea0e4" borderRadius="3xl">
//         Let's Get Started!
//         </Text>

//         {/* <Button bg="#ffb301" mt={8} borderRadius="3xl">
//           Lets Get Started!
//         </Button> */}
//         <Divider mt={10} mb={-3} />
//         <Box
//           as="button"
//           size="lg"
//           borderRadius="3xl"
//           bg="gray.300"
//           color="gray.600"
//           px={4}
//           position="relative"
//           zIndex="2"
//         >
//           User options
//         </Box>
//       </Container>

//       {/* Form below */}
//       <Container maxW="container.md">
//         <FormControl mb={6}>
//           <Heading my={4}>01</Heading>
//           <FormLabel mb={4}>What age group is your meal plan for?</FormLabel>
//           <RadioGroup onChange={onChange}>
//             <Stack spacing={4} direction="row">
//               {/* values need to be double-checked */}
//               <Radio value="infant">6-24 months</Radio>
//               <Radio value="child">3-12 years</Radio>
//               <Radio value="adult">over 12 years</Radio>
//             </Stack>
//           </RadioGroup>
//         </FormControl>

//         <FormControl mb={4}>
//           <Heading my={4}>02</Heading>
//           <FormLabel mb={4}>Any food allergies or intolerances?</FormLabel>
//           <Flex spacing={6} direction="row" mb={6}>
//             <Checkbox w="150px">Lactose</Checkbox>
//             <Checkbox w="150px">Gluten</Checkbox>
//             <Checkbox w="150px">Wheat</Checkbox>
//             <Checkbox w="150px">Eggs</Checkbox>
//             <Checkbox w="150px">Peanuts</Checkbox>
//           </Flex>
//           <Flex spacing={6} direction="row" mb={6}>
//             <Checkbox w="150px">Tree nuts</Checkbox>
//             <Checkbox w="150px">Soybeans</Checkbox>
//             <Checkbox w="150px">Sesame seeds</Checkbox>
//             <Checkbox w="150px">Shellfish</Checkbox>
//             <Checkbox w="150px">Fish</Checkbox>
//           </Flex>
//           <Text mb={4}>
//             Other (please separate each food item with a comma ",")
//           </Text>
//           <Input type="text"></Input>
//         </FormControl>
//         <FormControl>
//           <Heading my={4}>03</Heading>
//           <FormLabel mb={4}>Tick the boxes which apply to you:</FormLabel>
//           <Flex spacing={6} direction="row" mb={6}>
//             <Checkbox w="200px">Low Carb</Checkbox>
//             <Checkbox w="200px">Mixed Food Diet</Checkbox>
//             <Checkbox w="200px">Paleo</Checkbox>
//           </Flex>
//           <Flex spacing={6} direction="row" mb={6}>
//             <Checkbox w="200px">Pescatarian</Checkbox>
//             <Checkbox w="200px">Vegan</Checkbox>
//             <Checkbox w="200px">Vegetarian</Checkbox>
//           </Flex>
//           <Text mb={4}>
//             Any food that you want to include (please separate each food item
//             with a comma ",")
//           </Text>
//           <Input type="text"></Input>
//         </FormControl>
//         <Center my={10}>
//           <Button bg="#ffb301" borderRadius="3xl">
//             CREATE YOUR MEAL PLAN
//           </Button>
//         </Center>
//       </Container>
//     </ChakraProvider>
//   );
// }

// export default MealPlanForm;
