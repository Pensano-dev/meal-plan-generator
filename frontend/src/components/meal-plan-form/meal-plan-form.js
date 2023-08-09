import * as React from 'react'
import { ChakraProvider, Container, Heading, Button, Box, Divider, Text, Spacer } from '@chakra-ui/react'

function MealPlanForm({ onChange, onSubmit, isValid }) {

  return (
    <ChakraProvider>
      <Container textAlign='right' maxW="container.md">
        <Heading as="h1" size="xl" mb={4} textAlign="center">Weekly meal plan generator</Heading>
        <Box bg="gray.300" textAlign="justify" borderRadius='2xl' padding={8}>
          <Text fontSize="lg" color="black" mb={2}>  
            Welcome to the meal plan generator. 
          </Text>
          <Text fontSize="lg" color="black" mb={2}>
            It generates a personalised 7-day plan that meets your dietary wants and requirements.
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
        All presented for you as a neat plan of three main meals and an optional
        snack 
        </Text>
      </Box>

      <Button bg='#ffb301' mt={8} borderRadius='3xl'>Lets Get Started!</Button>
         <Divider mt={10} mb={-3}/> 
      <Box as="button" size='lg' borderRadius='3xl' bg='gray.300' color='gray.600' px={4} position="relative" zIndex="2">User options</Box>
      
      </Container>
      
    </ChakraProvider> 
  );
}



export default MealPlanForm;

// inline CSS for now but may need to move this out to a separate file if we have more later
  // const requiredStyle = {
  //   color: 'red',
  //   flex: 1,
  //   marginLeft: '5px',
  // };

  // const containerStyle = {
  //   display: 'flex',
  // };

{/* <> 
    <p>Choose your options:</p>
      <form>
        <div style={containerStyle}>
          <p>Which age group is your meal plan for?</p><p style={requiredStyle}>*</p>
        </div>
        <input type="radio" id="age1" name="age" value="6-24" required onChange={onChange}/>
        <label htmlFor="age">6-24 months</label>
        <input type="radio" id="age2" name="age" value="3-12" onChange={onChange}/>
        <label htmlFor="age">3-12 years old</label>
        <input type="radio" id="age3" name="age" value="12+" onChange={onChange}/>
        <label htmlFor="age">12+ years old</label>

        <p>Any food allergies or intolerances?</p>
        <input type="checkbox" id="allergies" value="shellfish" onChange={onChange}/>
        <label htmlFor="allergies">Crustacean shellfish (eg. crab, lobster)</label>
        <input type="checkbox" id="allergies" value="eggs" onChange={onChange}/>
        <label htmlFor="allergies">Eggs</label>
        <input type="checkbox" id="allergies" value="fish" onChange={onChange}/>
        <label htmlFor="allergies">Fish (eg. bass, flounder, cod)</label>
        <input type="checkbox" id="allergies" value="gluten" onChange={onChange}/>
        <label htmlFor="allergies">Gluten</label>
        <input type="checkbox" id="allergies" value="lactose" onChange={onChange}/>
        <label htmlFor="allergies">Lactose</label>
        <input type="checkbox" id="allergies" value="peanuts" onChange={onChange}/>
        <label htmlFor="allergies">Peanuts</label>
        <input type="checkbox" id="allergies" value="sesame" onChange={onChange}/>
        <label htmlFor="allergies">Sesame</label>
        <input type="checkbox" id="allergies" value="soybeans" onChange={onChange}/>
        <label htmlFor="allergies">Soybeans</label>
        <input type="checkbox" id="allergies" value="treenuts" onChange={onChange}/>
        <label htmlFor="allergies">Tree nuts (eg. almonds, walnuts, peacans)</label>
        <input type="checkbox" id="allergies" value="wheat" onChange={onChange}/>
        <label htmlFor="allergies">Wheat</label>
        <p>Please input any other intolerances</p>
        <input type="text" id="other-food-intolerances" name="other-food-intolerance" placeholder="Enter foods here separated by commas" onChange={onChange} style={{ border: isValid ? '' : '1px solid red' }} />

        <p>Please tick which boxes relate to your current diet</p>
        <input type="checkbox" id="diet" value="mixed" onChange={onChange}/>
        <label htmlFor="diet">Mixed food diet (animal and vegetable sources)</label>
        <input type="checkbox" id="diet" value="pescatarian" onChange={onChange}/>
        <label htmlFor="diet">Pescatarian</label>
        <input type="checkbox" id="diet" value="starch" onChange={onChange}/>
        <label htmlFor="diet">Starch/Carbohydrate rescriction (low carb)</label>
        <input type="checkbox" id="diet" value="vegan" onChange={onChange}/>
        <label htmlFor="diet">Vegan</label>
        <input type="checkbox" id="diet" value="vegetarian" onChange={onChange}/>
        <label htmlFor="diet">Vegetarian</label>
        <input type="checkbox" id="diet" value="paleo" onChange={onChange}/>
        <label htmlFor="diet">Paleo</label>

        <p>Are there any foods which you want the mealplan to include? (separated by comma ",")</p>
        <input type="text" id="other-food-include" name="other-food-include" placeholder="Enter foods here separated by commas" onChange={onChange} style={{ border: isValid ? '' : '1px solid red' }} />

        <p>Please submit when ready</p>
        <button type="submit" onClick={onSubmit}>Submit</button>
      </form>
    </>  */}