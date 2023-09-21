import { useState } from 'react';
import MealPlanForm from '../meal-plan-form/meal-plan-form';

function MealPlanGenerator() {
  const [formData, setFormData] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [gptResponse, setGptResponse] = useState("");

  function handleFormChange(event) {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    const regex = /^(\w+\s*,\s*)*\w+$/;
    setIsValid(regex.test(value));
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
      const response = await fetch('http://localhost:8000/api/mealplan', { // when we deploy, we'll change this to the deployed backend URL saved as an ENV variable
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Request was successful');
        setGptResponse(await data["gptResponse"])
        handleButtonClick();
      } else {
        console.log('Request was unsuccessful:', data);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* <h1>Create your Meal Plan</h1> */}
      <MealPlanForm onChange={handleFormChange} onSubmit={handleFormSubmit} isValid={isValid} clickCount={clickCount}/>
      <p className='gpt-response'>{gptResponse}</p>
    </div>
  );
}

export default MealPlanGenerator;
