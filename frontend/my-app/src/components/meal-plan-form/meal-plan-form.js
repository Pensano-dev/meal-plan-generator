function MealPlanForm() {
  return (
    <>
    <p>Choose your options:</p>
      <form>
        <p>Which age group is your meal plan for?</p>
        <input type="checkbox" id="6-24" value="6-24"></input>
        <label for="6-24">6-24 months</label>
        <input type="checkbox" id="3-12" value="3-12"></input>
        <label for="3-12">3-12 years old</label>
        <input type="checkbox" id="12+" value="12+"></input>
        <label for="12+">12+ years old</label>

        <p>Any food allergies or intolerances?</p>
        <input type="checkbox" id="shellfish" value="shellfish"></input>
        <label for="shellfish">Crustacean shellfish (eg. crab, lobster)</label>
        <input type="checkbox" id="eggs" value="eggs"></input>
        <label for="eggs">Eggs</label>
        <input type="checkbox" id="fish" value="fish"></input>
        <label for="fish">Fish (eg. bass, flounder, cod)</label>
        <input type="checkbox" id="gluten" value="gluten"></input>
        <label for="gluten">Gluten</label>
        <input type="checkbox" id="lactose" value="lactose"></input>
        <label for="lactose">Lactose</label>
        <input type="checkbox" id="peanuts" value="peanuts"></input>
        <label for="peanuts">Peanuts</label>
        <input type="checkbox" id="sesame" value="sesmae"></input>
        <label for="sesame">Sesame</label>
        <input type="checkbox" id="soybeans" value="soybeans"></input>
        <label for="soybeans">Soybeans</label>
        <input type="checkbox" id="treenuts" value="treenuts"></input>
        <label for="treenuts">Tree nuts (eg. almonds, walnuts, peacans)</label>
        <input type="checkbox" id="wheat" value="wheat"></input>
        <label for="wheat">Wheat</label>
        <p>Please input any other intolerances</p>
        <input type="text" id="other-food-intolerances" name="other-food-intolerance" placeholder="Enter foods here separated by commas" />

        <p>Please tick which boxes relate to your current diet</p>
        <input type="checkbox" id="mixed" value="mixed"></input>
        <label for="mixed">Mixed food diet (animal and vegetable sources)</label>
        <input type="checkbox" id="pescatarian" value="pescatarian"></input>
        <label for="pescatarian">Pescatarian</label>
        <input type="checkbox" id="starch" value="starch"></input>
        <label for="starch">Starch/Carbohydrate rescriction (low carb)</label>
        <input type="checkbox" id="vegan" value="vegan"></input>
        <label for="vegan">Vegan</label>
        <input type="checkbox" id="vegetation" value="vegetarian"></input>
        <label for="vegetarian">Vegetarian</label>
        <input type="checkbox" id="paleo" value="paleo"></input>
        <label for="paleo">Paleo</label>

        <p>Are there any foods which you want the mealplan to include? (separate by comma ",")</p>
        <input type="text" id="other-food-include" name="other-food-include" placeholder="Enter foods here separated by commas" />

        <p>Please submit when ready</p>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default MealPlanForm;