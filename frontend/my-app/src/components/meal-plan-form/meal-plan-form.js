function MealPlanForm({ onChange, onSubmit }) {
  return (
    <>
    <p>Choose your options:</p>
      <form>
        <p>Which age group is your meal plan for?</p>
        <input type="checkbox" id="age" value="6-24" onChange={onChange}/>
        <label for="age">6-24 months</label>
        <input type="checkbox" id="age" value="3-12" onChange={onChange}/>
        <label for="age">3-12 years old</label>
        <input type="checkbox" id="age" value="12+" onChange={onChange}/>
        <label for="age">12+ years old</label>

        <p>Any food allergies or intolerances?</p>
        <input type="checkbox" id="allergies" value="shellfish" onChange={onChange}/>
        <label for="allergies">Crustacean shellfish (eg. crab, lobster)</label>
        <input type="checkbox" id="allergies" value="eggs" onChange={onChange}/>
        <label for="allergies">Eggs</label>
        <input type="checkbox" id="allergies" value="fish" onChange={onChange}/>
        <label for="allergies">Fish (eg. bass, flounder, cod)</label>
        <input type="checkbox" id="allergies" value="gluten" onChange={onChange}/>
        <label for="allergies">Gluten</label>
        <input type="checkbox" id="allergies" value="lactose" onChange={onChange}/>
        <label for="allergies">Lactose</label>
        <input type="checkbox" id="allergies" value="peanuts" onChange={onChange}/>
        <label for="allergies">Peanuts</label>
        <input type="checkbox" id="allergies" value="sesmae" onChange={onChange}/>
        <label for="allergies">Sesame</label>
        <input type="checkbox" id="allergies" value="soybeans" onChange={onChange}/>
        <label for="allergies">Soybeans</label>
        <input type="checkbox" id="allergies" value="treenuts" onChange={onChange}/>
        <label for="allergies">Tree nuts (eg. almonds, walnuts, peacans)</label>
        <input type="checkbox" id="allergies" value="wheat" onChange={onChange}/>
        <label for="allergies">Wheat</label>
        <p>Please input any other intolerances</p>
        <input type="text" id="other-food-intolerances" name="other-food-intolerance" placeholder="Enter foods here separated by commas" onChange={onChange}/>

        <p>Please tick which boxes relate to your current diet</p>
        <input type="checkbox" id="diet" value="mixed" onChange={onChange}/>
        <label for="diet">Mixed food diet (animal and vegetable sources)</label>
        <input type="checkbox" id="diet" value="pescatarian" onChange={onChange}/>
        <label for="diet">Pescatarian</label>
        <input type="checkbox" id="diet" value="starch" onChange={onChange}/>
        <label for="diet">Starch/Carbohydrate rescriction (low carb)</label>
        <input type="checkbox" id="diet" value="vegan" onChange={onChange}/>
        <label for="diet">Vegan</label>
        <input type="checkbox" id="diet" value="vegetarian" onChange={onChange}/>
        <label for="diet">Vegetarian</label>
        <input type="checkbox" id="diet" value="paleo" onChange={onChange}/>
        <label for="diet">Paleo</label>

        <p>Are there any foods which you want the mealplan to include? (separate by comma ",")</p>
        <input type="text" id="other-food-include" name="other-food-include" placeholder="Enter foods here separated by commas" onChange={onChange} />

        <p>Please submit when ready</p>
        <button type="submit" onClick={onSubmit}>Submit</button>
      </form>
    </>
  );
}

export default MealPlanForm;