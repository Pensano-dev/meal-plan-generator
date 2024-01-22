import { useState } from 'react';
// import MealPlanForm from '../meal-plan-form/meal-plan-form';
import MealPlanForm from '../meal-plan-form/meal-plan-form';
import Mealplan from '../Mealplan/Mealplan';

function MealPlanGenerator() {
  const [formData, setFormData] = useState({
    age: "",
    allergies: [],
    intolerances: "",
    diets: [],
    otherfood: ""
  });
  const [isValid, setIsValid] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [mealplanData, setMealplanData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleFormChange(event) { // onChange in MealPlanForm
    const regex = /^(\w+\s*,\s*)*\w+$/;
    const { name, value, type, checked } = event.target;
    console.log(name, 'value is', value)
    let textValue = value;
    if (type === 'checkbox') {
      // Handle checkboxes (e.g., allergies and diets)
      setFormData((prevFormData) => {
        const updatedData = { ...prevFormData };
        if (checked) {
          updatedData[name] = [...updatedData[name], value];
        } else {
          updatedData[name] = updatedData[name].filter((item) => item !== value);
        }
        return updatedData;
      });
    } else if (type === 'radio') {
      // Handle radio buttons (e.g., age group)
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else if (type === 'text') {
      if (value === "") {
        textValue = null
      }
      setIsValid(regex.test(textValue));
      // Handle text inputs (e.g., other intolerances, food to include)
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }

    // console.log('formData object is ', formData)

    
  }

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if(!isValid) {
      alert('Invalid input format. Please enter words separated by a comma and a space.');
      return;
    }

    try {
      setIsLoading(true);
      console.log(isLoading);
      const response = await fetch('http://localhost:8000/api/mealplan', { // when we deploy, we'll change this to the deployed backend URL saved as an ENV variable
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Raw data:', data.gptResponse)
      const dataObject = await JSON.parse(data.gptResponse)

      console.log('data returned is:', data)
      console.log('mealplan is:', dataObject)

      if (response.ok) {
        console.log('Request was successful');
        setMealplanData(dataObject)
        handleButtonClick();
      } else {
        console.log('Request was unsuccessful:', data);
      }

    } catch (error) {
      console.log('In catch block')
      console.error('Error:', error);
    }
    setIsLoading(false);
    console.log(isLoading);
  };

  return (
    <div>
      <MealPlanForm onChange={handleFormChange} onSubmit={handleFormSubmit} isValid={isValid} clickCount={clickCount} isLoading={isLoading} />
      {mealplanData.length && <Mealplan mealplanData={mealplanData} />}

    </div>
  );
}

export default MealPlanGenerator;
