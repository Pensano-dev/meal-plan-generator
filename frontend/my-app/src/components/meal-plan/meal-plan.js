import { useState, useEffect } from 'react';

function MealPlanForm() {

  const [checkboxChoices, setCheckboxChoices] = useState([]); 
  const [formData, setFormData] = useState({});

  function handleCheckboxChange(event) {
    const {option, value} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData, 
      [option]:value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
      )
}


