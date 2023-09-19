import * as React from 'react';
import './meal-plan-form.css';
import {
  foodAllergies,
  foodAllergyIcons,
  ageGroups,
  currentDiets,
  currentDietValues,
} from './lists';

function MealPlanForm({ onChange, onSubmit, isValid, clickCount, isLoading }) {
  return (
    <div className='whole-form-component'>
      <h1 className="form-title">Welcome to the 7-Day Meal Plan Generator</h1>
      <div className="form-intro">
        <p>This program will take into account:</p>
        <p>
          • age group
          <br />
          • food allergies and/or intolerances
          <br />• having the three food groups at every meal to support blood
          sugar balance
        </p>  
      </div>
      <h2>Let's Get Started!</h2>
      <p>Choose your options:</p>
      <form>
        <div className='container'>
          <p>Which age group is your meal plan for?</p>
          <p className='required'>*</p>
        </div>
        {ageGroups.map((age, index) => {
          return (
            <div key={index}>
              <input
                type='radio'
                id={`age${index}`}
                name='age'
                value={age}
                required
                onChange={onChange}
              />
              <label htmlFor='age'>
                {age} {age === '6-24' ? 'months' : 'years old'}
              </label>
            </div>
          );
        })}

        <p>Any food allergies or intolerances?</p>
        <div className='allergy-selection'>
          {foodAllergies.map((allergy, index) => {
            return (
              <div key={index} className='allergy-panel'>
                <input
                  id={`allergy-${index}`}
                  type='checkbox'
                  className='allergies'
                  name='allergies'
                  value={allergy.toLocaleLowerCase()}
                  onChange={onChange}
                />
                <label htmlFor={`allergy-${index}`} className='allergy-label'>
                  {foodAllergyIcons[index]}
                  <p>{allergy}</p>
                </label>
              </div>
            );
          })}
        </div>

        <p>Please input any other intolerances</p>
        <input
          type='text'
          className='other-food-intolerances'
          name='intolerances'
          placeholder='Enter foods here separated by commas'
          onChange={onChange}
          style={{ border: isValid ? '' : '1px solid red' }}
        />

        <p>Please tick which boxes relate to the person's current diet:</p>

        {currentDiets.map((diet, index) => {
          return (
            <div key={index}>
              <input
                type='checkbox'
                className='diets'
                name='diets'
                value={currentDietValues[index]}
                onChange={onChange}
              />
              <label htmlFor='diets'>{diet}</label>
            </div>
          );
        })}

        <p>
          Are there any foods which you want the meal plan to include?
          (separated by comma ",")
        </p>
        <input
          type='text'
          id='other-food-include'
          name='otherfood'
          placeholder='Enter foods here separated by commas'
          onChange={onChange}
          style={{ border: isValid ? '' : '1px solid red' }}
        />

        <p>Please submit when ready</p>
        {isLoading ? (
          <button type='submit' className='loading-button' disabled>
            Loading
          </button>
        ) : (
          <button
            type='submit'
            className='generate-plan-button'
            onClick={onSubmit}>
            Generate Meal Plan ({clickCount} generated)
          </button>
        )}
      </form>
    </div>
  );
}

export default MealPlanForm;
