import { useState, useEffect } from 'react';
import MealPlanForm from '../meal-plan-form/meal-plan-form'

function MealPlanGenerator() {
  const [checkboxChoices, setCheckboxChoices] = useState([]); 
  const [formData, setFormData] = useState({});

  function handleFormChange(event) {
    const {id, value} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData, 
      [id]: value,
    }))
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Create your Meal Plan</h1>
      <MealPlanForm onChange={handleFormChange} onSubmit={handleFormSubmit} />
    </div>
  )

}

export default MealPlanGenerator;

