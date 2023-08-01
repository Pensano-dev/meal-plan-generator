import { useState } from 'react';
import MealPlanForm from '../meal-plan-form/meal-plan-form';

function MealPlanGenerator() {
  const [formData, setFormData] = useState({});

  function handleFormChange(event) {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

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
      <MealPlanForm onChange={handleFormChange} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default MealPlanGenerator;
