import * as React from "react";
import "./meal-plan-form.css";
import {
  EggIcon,
  FishIcon,
  MilkIcon,
  PeanutIcon,
  SoyaIcon,
  MolluscIcon,
  NutsIcon,
  GlutenIcon,
} from "react-allergens";
import { Icon as IconComponent } from "@chakra-ui/react";
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
  const [clickCount, setClickCount] = React.useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };
  return (
    <ChakraProvider>
      <Container textAlign="right" maxW="container.md">
        <Heading as="h1" size="xl" my={8} textAlign="center">
          7-Day Meal Plan Generator
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
            • age group
            <br />
            • food allergies and/or intolerances
            <br />
            • dietary preferences <br />
            • having the three food groups at every meal to support blood sugar
            balance
            <br />
          </Text>
          <Text fontSize="lg" color="black" mt={2}>
            All presented for you as a neat plan of three main meals and an
            optional snack.
          </Text>
        </Box>

        <Text
          my={8}
          fontSize="lg"
          padding="5px"
          textAlign="center"
          bg="#cea0e4"
          borderRadius="3xl"
        >
          Let's Get Started!
        </Text>

        {/* <Button bg="#ffb301" mt={8} borderRadius="3xl">
          Lets Get Started!
        </Button> */}
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
          <Flex>
            <ul>
              <li>
                <input type="checkbox" id="eggs" />
                <label
                  for="eggs"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IconComponent
                    as={EggIcon}
                    style={{ fontSize: "70px", marginRight: "10px" }}
                  />
                  Eggs
                </label>
              </li>
              <li>
                <input type="checkbox" id="fish" />
                <label
                  for="fish"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IconComponent
                    as={FishIcon}
                    style={{ fontSize: "70px", marginRight: "10px" }}
                  />
                  Fish
                </label>
              </li>
              <li>
                <input type="checkbox" id="milk" />
                <label
                  for="milk"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IconComponent
                    as={MilkIcon}
                    style={{ fontSize: "70px", marginRight: "10px" }}
                  />
                  Milk
                </label>
              </li>
              <li>
                <input type="checkbox" id="peanuts" />
                <label
                  for="peanuts"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IconComponent
                    as={PeanutIcon}
                    style={{ fontSize: "70px", marginRight: "10px" }}
                  />
                  Peanuts
                </label>
              </li>
            </ul>
            
          </Flex>
        </FormControl>
        
        {/* Checkboxes - Option 2 */}
        <FormControl mb={4}>
          <Heading my={4}>02</Heading>
          <FormLabel mb={4}>Any food allergies or intolerances?</FormLabel>
          <Flex spacing={6} direction="row" mb={6}>
            <Checkbox w="150px">
              <IconComponent
                as={EggIcon}
                style={{ fontSize: "70px", marginRight: "50px" }} // Adjust the margin value here
              />
              Eggs
            </Checkbox>
            <Checkbox w="150px">
              <IconComponent
                as={FishIcon}
                style={{ fontSize: "70px", marginRight: "10px" }}
              />
              Fish
            </Checkbox>
            <Checkbox w="150px">
              <IconComponent
                as={MilkIcon}
                style={{ fontSize: "70px", marginRight: "10px" }}
              />
              Milk
            </Checkbox>
            <Checkbox w="150px">
              <IconComponent
                as={PeanutIcon}
                style={{ fontSize: "70px", marginRight: "10px" }}
              />
              Peanuts
            </Checkbox>
          </Flex>
          <Flex spacing={6} direction="row" mb={6}>
            <Checkbox w="150px">
              <IconComponent
                as={SoyaIcon}
                style={{ fontSize: "70px", marginRight: "10px" }}
              />
              Soy
            </Checkbox>
            <Checkbox w="150px">
              <IconComponent
                as={MolluscIcon}
                style={{ fontSize: "70px", marginRight: "10px" }}
              />
              Shellfish
            </Checkbox>
            <Checkbox w="150px">
              <IconComponent
                as={NutsIcon}
                style={{ fontSize: "70px", marginRight: "10px" }}
              />
              Tree nuts
            </Checkbox>
            <Checkbox w="150px">
              <IconComponent
                as={GlutenIcon}
                style={{ fontSize: "70px", marginRight: "10px" }}
              />
              Wheat
            </Checkbox>
          </Flex>
          <Text mb={4}>
            Other (please separate each food item with a comma ",")
          </Text>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <Heading my={4}>03</Heading>
          <FormLabel mb={4}>Tick the boxes which apply to you:</FormLabel>
          <Flex spacing={6} direction="row" mb={6}>
            <Checkbox w="200px">Low Carb</Checkbox>
            <Checkbox w="200px">Mixed Food Diet</Checkbox>
            <Checkbox w="200px">Paleo</Checkbox>
          </Flex>
          <Flex spacing={6} direction="row" mb={6}>
            <Checkbox w="200px">Pescatarian</Checkbox>
            <Checkbox w="200px">Vegan</Checkbox>
            <Checkbox w="200px">Vegetarian</Checkbox>
          </Flex>
          <Text mb={4}>
            Any food that you want to include (please separate each food item
            with a comma ",")
          </Text>
          <Input type="text"></Input>
        </FormControl>
        <Center my={10}>
          <Button bg="#ffb301" borderRadius="3xl" onClick={handleButtonClick}>
            CREATE YOUR MEAL PLAN
          </Button>
        </Center>
        {/* DISPLAY MEAL PLAN HERE */}
        <Center my={10}>
          <Button bg="#ffb301" borderRadius="3xl" onClick={handleButtonClick}>
            DOWNLOAD YOUR MEAL PLAN
          </Button>
          <Text ml={3}>({clickCount} downloads)</Text>
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default MealPlanForm;
