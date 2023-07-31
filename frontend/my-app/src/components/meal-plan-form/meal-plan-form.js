function MealPlanForm({ onChange, onSubmit }) {
  return (
    <>
    <p>Choose your options:</p>
      <form>
        <p>Which age group is your meal plan for?</p>
        <input type="checkbox" id="6-24" value="6-24" onChange={onChange}/>
        <label for="6-24">6-24 months</label>
        <input type="checkbox" id="3-12" value="3-12" onChange={onChange}/>
        <label for="3-12">3-12 years old</label>
        <input type="checkbox" id="12+" value="12+" onChange={onChange}/>
        <label for="12+">12+ years old</label>

        <p>Any food allergies or intolerances?</p>
        <input type="checkbox" id="shellfish" value="shellfish" onChange={onChange}/>
        <label for="shellfish">Crustacean shellfish (eg. crab, lobster)</label>
        <input type="checkbox" id="eggs" value="eggs" onChange={onChange}/>
        <label for="eggs">Eggs</label>
        <input type="checkbox" id="fish" value="fish" onChange={onChange}/>
        <label for="fish">Fish (eg. bass, flounder, cod)</label>
        <input type="checkbox" id="gluten" value="gluten" onChange={onChange}/>
        <label for="gluten">Gluten</label>
        <input type="checkbox" id="lactose" value="lactose" onChange={onChange}/>
        <label for="lactose">Lactose</label>
        <input type="checkbox" id="peanuts" value="peanuts" onChange={onChange}/>
        <label for="peanuts">Peanuts</label>
        <input type="checkbox" id="sesame" value="sesmae" onChange={onChange}/>
        <label for="sesame">Sesame</label>
        <input type="checkbox" id="soybeans" value="soybeans" onChange={onChange}/>
        <label for="soybeans">Soybeans</label>
        <input type="checkbox" id="treenuts" value="treenuts" onChange={onChange}/>
        <label for="treenuts">Tree nuts (eg. almonds, walnuts, peacans)</label>
        <input type="checkbox" id="wheat" value="wheat" onChange={onChange}/>
        <label for="wheat">Wheat</label>
        <p>Please input any other intolerances</p>
        <input type="text" id="other-food-intolerances" name="other-food-intolerance" placeholder="Enter foods here separated by commas" onChange={onChange}/>

        <p>Please tick which boxes relate to your current diet</p>
        <input type="checkbox" id="mixed" value="mixed" onChange={onChange}/>
        <label for="mixed">Mixed food diet (animal and vegetable sources)</label>
        <input type="checkbox" id="pescatarian" value="pescatarian" onChange={onChange}/>
        <label for="pescatarian">Pescatarian</label>
        <input type="checkbox" id="starch" value="starch" onChange={onChange}/>
        <label for="starch">Starch/Carbohydrate rescriction (low carb)</label>
        <input type="checkbox" id="vegan" value="vegan" onChange={onChange}/>
        <label for="vegan">Vegan</label>
        <input type="checkbox" id="vegetation" value="vegetarian" onChange={onChange}/>
        <label for="vegetarian">Vegetarian</label>
        <input type="checkbox" id="paleo" value="paleo" onChange={onChange}/>
        <label for="paleo">Paleo</label>

        <p>Are there any foods which you want the mealplan to include? (separate by comma ",")</p>
        <input type="text" id="other-food-include" name="other-food-include" placeholder="Enter foods here separated by commas" onChange={onChange} />

        <p>Please submit when ready</p>
        <button type="submit" onClick={onSubmit}>Submit</button>
      </form>
    </>
  );
}

export default MealPlanForm;