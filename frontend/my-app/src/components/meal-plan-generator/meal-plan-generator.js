import { useState } from 'react';
import MealPlanForm from '../meal-plan-form/meal-plan-form';

function MealPlanGenerator() {
  const [formData, setFormData] = useState({});
  const [isValid, setIsValid] = useState(true);

  function handleFormChange(event) {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    const regex = /^(\w+\s*,\s*)*\w+$/;
    setIsValid(regex.test(value));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if(!isValid) {
      alert('Invalid input format. Please enter words separated by a comma and a space.');
      return;
    }

    fetch('/api/mealplan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <h1>Create your Meal Plan</h1>
      <MealPlanForm onChange={handleFormChange} onSubmit={handleFormSubmit} isValid={isValid} />
    </div>
  );
}

export default MealPlanGenerator;
