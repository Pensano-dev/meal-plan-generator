import * as React from "react";
function MealPlanForm({ onChange, onSubmit, isValid, clickCount }) {
  // inline CSS for now but may need to move this out to a separate file if we have more later
  const requiredStyle = {
    color: "red",
    flex: 1,
    marginLeft: "5px",
  };

  const containerStyle = {
    display: "flex",
  };

  return (
    <>
      <h1>Welcome to the 7-Day Meal Plan Generator</h1>

      <p>This program will take into account:</p>
      <p>
        • age group
        <br />
        • food allergies and/or intolerances
        <br />
        • having the three food groups at every meal to support blood sugar balance
      </p>
      <h2>Let's Get Started!</h2>
      <p>Choose your options:</p>
      <form>
        <div style={containerStyle}>
          <p>Which age group is your meal plan for?</p>
          <p style={requiredStyle}>*</p>
        </div>
        <input
          type="radio"
          id="age1"
          name="age"
          value="6-24"
          required
          onChange={onChange}
        />
        <label htmlFor="age">6-24 months</label>
        <input
          type="radio"
          id="age2"
          name="age"
          value="3-12"
          onChange={onChange}
        />
        <label htmlFor="age">3-12 years old</label>
        <input
          type="radio"
          id="age3"
          name="age"
          value="12+"
          onChange={onChange}
        />
        <label htmlFor="age">12+ years old</label>

        <p>Any food allergies or intolerances?</p>

        <input
          type="checkbox"
          id="allergies"
          value="eggs"
          onChange={onChange}
        />
        <label htmlFor="allergies">Eggs</label>
        <input
          type="checkbox"
          id="allergies"
          value="fish"
          onChange={onChange}
        />
        <label htmlFor="allergies">Fish</label>
        <input
          type="checkbox"
          id="allergies"
          value="gluten"
          onChange={onChange}
        />
        <label htmlFor="allergies">Gluten</label>
        <input
          type="checkbox"
          id="allergies"
          value="milk"
          onChange={onChange}
        />
        <label htmlFor="allergies">Milk</label>
        <input
          type="checkbox"
          id="allergies"
          value="peanuts"
          onChange={onChange}
        />
        <label htmlFor="allergies">Peanuts</label>
        <input
          type="checkbox"
          id="allergies"
          value="shellfish"
          onChange={onChange}
        />
        <label htmlFor="allergies">Shellfish</label>
        <input type="checkbox" id="allergies" value="soy" onChange={onChange} />
        <label htmlFor="allergies">Soy</label>
        <input
          type="checkbox"
          id="allergies"
          value="treenuts"
          onChange={onChange}
        />
        <label htmlFor="allergies">Tree nuts</label>

        <p>Please input any other intolerances</p>
        <input
          type="text"
          id="other-food-intolerances"
          name="other-food-intolerance"
          placeholder="Enter foods here separated by commas"
          onChange={onChange}
          style={{ border: isValid ? "" : "1px solid red" }}
        />

        <p>Please tick which boxes relate to the person's current diet:</p>
        <input type="checkbox" id="diet" value="mixed" onChange={onChange} />
        <label htmlFor="diet">
          Mixed food diet (animal and vegetable sources)
        </label>
        <input
          type="checkbox"
          id="diet"
          value="pescatarian"
          onChange={onChange}
        />
        <label htmlFor="diet">Pescetarian</label>
        <input type="checkbox" id="diet" value="starch" onChange={onChange} />
        <label htmlFor="diet">Low carb</label>
        <input type="checkbox" id="diet" value="vegan" onChange={onChange} />
        <label htmlFor="diet">Vegan</label>
        <input
          type="checkbox"
          id="diet"
          value="vegetarian"
          onChange={onChange}
        />
        <label htmlFor="diet">Vegetarian</label>
        <input type="checkbox" id="diet" value="paleo" onChange={onChange} />
        <label htmlFor="diet">Paleo</label>

        <p>
          Are there any foods which you want the mealplan to include? (separated
          by comma ",")
        </p>
        <input
          type="text"
          id="other-food-include"
          name="other-food-include"
          placeholder="Enter foods here separated by commas"
          onChange={onChange}
          style={{ border: isValid ? "" : "1px solid red" }}
        />

        <p>Please submit when ready</p>
        <button type="submit" onClick={onSubmit}>
          Generate Meal Plan ({clickCount} generated)
        </button>
      </form>
    </>
  );
}

export default MealPlanForm;
