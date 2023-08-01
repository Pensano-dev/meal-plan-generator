function MealPlanForm({ onChange, onSubmit, isValid }) {
  return (
    <>
    <p>Choose your options:</p>
      <form>
        <p>Which age group is your meal plan for?</p>
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
    </>
  );
}



export default MealPlanForm;