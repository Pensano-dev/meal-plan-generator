import * as React from 'react';
import { useState } from 'react';
import './meal-plan-form.css';
import {
  foodAllergies,
  foodAllergyIcons,
  ageGroups,
  ageGroupNames,
  currentDiets,
  currentDietValues,
} from './lists';



function MealPlanForm({ onChange, onSubmit, isValid, clickCount, isLoading}) {

  const [requiredQuestionsAnswered, setRequiredQuestionsAnswered] = useState(false);

  const answered = (requiredQuestionsAnswered) => {
    setRequiredQuestionsAnswered(!requiredQuestionsAnswered)
  }

  return (
    <div className='whole-form-component'>
      <h1 id="form-title">Welcome to the 7-Day Meal Plan Generator</h1>
      <div className="grey-panel form-intro">
        <h3>This program will take into account:</h3>
        <p>
          • age group
          <br />
          • food allergies and/or intolerances
          <br />• having the three food groups at every meal to support blood
          sugar balance
        </p>
      </div>
      <h2>Let's Get Started!</h2>
      {/* <h3 className='grey-panel'>Choose your options:</h3> */}
      <form>
        <h1>01</h1>
        <div className='container'>
          <h3>Which age group is your meal plan for?</h3>
          <p className='required'>*</p>
        </div>

        <div className="age-selector" selected={requiredQuestionsAnswered}>
        {ageGroups.map((age, index) => {
          return (
            <label key={index} className='age-panel grey-panel'>
              <input
                type='radio'
                id={`age${index}`}
                className='age-checkbox'
                name='age'
                value={age}
                required
                onClick={answered}
                onChange={onChange}
              />
              <div className='age-label'>
                <h3>{ageGroupNames[index]}</h3>
                <p>{age} {age === '6-24' ? 'months' : 'years old'}</p>
              </div>
            </label>
          );
        })}
        </div>

        <h1>02</h1>
        <h3 id='allergies-title'>Any food allergies or intolerances?</h3>
        <div className='allergy-selection'>
          {foodAllergies.map((allergy, index) => {
            return (
              <div key={index} className='allergy-panel'>
                <input
                  id={`allergy-${index}`}
                  type='checkbox'
                  className='allergy-checkbox'
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

        <h3>Please input any other intolerances:</h3>
        <input
          type='text'
          className='other-food-intolerances'
          name='intolerances'
          placeholder='Enter foods here separated by commas'
          onChange={onChange}
          style={{ border: isValid ? '' : '1px solid red' }}
        />

        <h1>03</h1>
        <div className='container'>
          <h3>Please select the appropriate option if the person has a special diet:</h3>
        </div>

        <div className="diet-section">
          {currentDiets.map((diet, index) => {
            return (
              <label key={index} className='diet-panel grey-panel'>
                <input
                  id={`diet-${index}`}
                  type='checkbox'
                  className='diet-checkbox'
                  name='diets'
                  value={currentDietValues[index]}
                  onChange={onChange}
                />
                <div className='diet-label'>
                  <h3>{diet}</h3>
                </div>
              </label>
            );
          })}
        </div>

        <h3>
          Are there any foods which you want the meal plan to include?
        </h3>
        <p>
          (separated by commas)
        </p>
        <input
          type='text'
          id='other-food-include'
          name='otherfood'
          placeholder='Enter foods here separated by commas'
          onChange={onChange}
          style={{ border: isValid ? '' : '1px solid red' }}
        />

        <h3 className="submit-section">Please submit when ready</h3>
        {isLoading ? (
          <button type='submit' className='generate-plan-button loading-button' disabled>
            Loading...
          </button>
        ) : (
          <button
            type='submit'
            disabled={!requiredQuestionsAnswered}
            className='generate-plan-button'
            onClick={onSubmit}>
              Generate Meal Plan
              {/* ({clickCount} generated) */}
          </button>
        )}
      </form>
    </div>
  );
}

export default MealPlanForm;
