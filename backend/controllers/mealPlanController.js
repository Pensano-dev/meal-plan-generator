const openai = require("../config/openaiConfig");

// const useOpenAiApi = false; // set to false to use fake data
const useOpenAiApi = true; // set to false to use fake data

let mealPlanController;

if (useOpenAiApi) {
  mealPlanController = {
    generateMealPlan: async (req, res) => {

      let { age, allergies, intolerances, diets, otherfood } = req.body;

      if (intolerances !== "") {
        const intolerancesArray = intolerances.split(", ")
        allergies.push(...intolerancesArray)
      }

      allergies = allergies.length === 0 ? "no food allergies" : allergies
      diets = diets.length === 0 ? "no special diet" : diets
      otherfood = otherfood === "" && "no additional foods to include"

      console.log('allergies is', allergies, 'diets is', diets, 'otherfood is', otherfood)

      try {

        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `I am a nutritional therapist. You are an assistant that
            helps me to generate 7-day meal plans for my clients.`,
            },
            {
              role: "system",
              content: `Your response should only include the 7-day meal plan. Please don't respond with any other words.`,
            },
            {
              role: "system",
              content: `The response should be in the form of an array of 7 JavaScript objects.`,
            },
            {
              role: "system",
              content: `Each  JavaScript object in the response array represents one day's meals, e.g. {breakfast: 'Deatails of breakfast', lunch: 'details of lunch', dinner: 'details of dinner', snack: 'details of snack'}`,
            },
            {
              role: "system",
              content: `The meals should include breakfast,
            lunch, dinner and one snack per day.`,
            },
            {
              role: "system",
              content: `I would like each meal suggestion
            to include the three food groups of protein, carbohydrates and healthy
            fats. Healthy fats include avocado, guacamole dip, salmon, trout,
            mackerel, sardines, chia seeds, nuts, boiled eggs, olive oil, coconut
            oil (for lightly frying), organic butter, ground flaxseeds, hummus,
            and organic milk yoghurt.`,
            },
            {
              role: "system",
              content: `You should never include processed meats
            (like ham, bacon and salami), biscuits, fries, fish fingers, cakes,
            sweeteners, desserts, soft drinks, ice cream, alcoholic drinks and
            chips. `,
            },
            {
              role: "system",
              content: `Please adapt the meal plan according to the client's
            characteristics and preferences below.`,
            },
            {
              role: "system",
              content: `The client is ${age}.`,
            },
            {
              role: "system",
              content: `Do not include any of the following or any foods that contain them: ${allergies}`
            },
            {
              role: "system",
              content: `The client has the following dietary requirements: ${diets}`,
            },
            {
              role: "system",
              content: `Please include the following foods: ${otherfood}`,
            }
          ],
        });
        // 7-day plan, table format, with the days on top, with an optional snack,and each meal should have the three food groups (protein, carbohydrates and healthy fats)

        // Send a response back to the client
        const gptResponse = response.data.choices[0].message.content
        res.status(200).json({ gptResponse: gptResponse });
      } catch (error) {
        console.error("Error generating meal plan:", error);
        res
          .status(500)
          .json({ error: "An error occurred while generating the meal plan, please try again later." });
      }
    },
  };
} else {
  mealPlanController = {
    generateMealPlan: (req, res) => {
      const mealInputs = req.body;
      const gptResponse = JSON.stringify([
        {
          "breakfast": "Fake eggs with spinach and tomatoes, served with whole grain toast",
          "lunch": "Fake green salad with grilled chicken, avocado, and a citrus vinaigrette",
          "dinner": "Fake salmon with roasted vegetables and quinoa",
          "snack": "Fake yogurt with berries and a sprinkle of chia seeds"
        },
        {
          "breakfast": "Fake oatmeal topped with sliced banana, almonds, and a drizzle of honey",
          "lunch": "Fake quinoa and black bean salad with roasted sweet potatoes and a lime-cilantro dressing",
          "dinner": "Fake chicken breast with steamed broccoli and brown rice",
          "snack": "Fake carrot sticks with hummus"
        },
        {
          "breakfast": "Whole grain toast with almond butter and sliced strawberries",
          "lunch": "Spinach and feta stuffed chicken breast with a side of roasted asparagus",
          "dinner": "Turkey meatballs with zucchini noodles and marinara sauce",
          "snack": "Hard-boiled eggs"
        },
        {
          "breakfast": "Smoothie made with spinach, banana, almond milk, and a scoop of protein powder",
          "lunch": "Quinoa and vegetable stir-fry with tofu",
          "dinner": "Grilled shrimp skewers with quinoa salad",
          "snack": "Mixed nuts"
        },
        {
          "breakfast": "Greek yogurt with granola and mixed berries",
          "lunch": "Lentil and vegetable soup with a side of whole grain bread",
          "dinner": "Baked chicken breast with roasted Brussels sprouts and sweet potato fries",
          "snack": "Apple slices with almond butter"
        },
        {
          "breakfast": "Vegetable omelette with a side of whole grain toast",
          "lunch": "Tuna salad lettuce wraps with cucumber and tomato",
          "dinner": "Baked cod with quinoa and steamed asparagus",
          "snack": "Celery sticks with peanut butter"
        },
        {
          "breakfast": "Whole grain pancakes topped with mixed berries and a drizzle of maple syrup",
          "lunch": "Grilled vegetable and goat cheese wrap with a side of mixed greens",
          "dinner": "Stir-fried beef with broccoli and brown rice",
          "snack": "Cottage cheese with sliced peaches"
        }
      ])
      res.status(200).json({ gptResponse: gptResponse })
    }
  };
}

module.exports = mealPlanController;
