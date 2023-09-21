const openai = require("../config/openaiConfig");

const mealPlanController = {
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

// const mealPlanController = {
//   generateMealPlan: (req, res) => {
//     const mealInputs = req.body;
//     const gptResponse = "this is fake data"
//     res.status(200).json({ gptResponse: gptResponse })
//   }
// }


module.exports = mealPlanController;

// messages: [
  //           {
  //             role: "system",
  //             content: `I am a nutritional therapist. You are an assistant that
  //             helps me to generate 7-day meal plans for my clients. I want the meal
  //             plan to be on a table, with the days of the week across the top and
  //             the meals on the left-hand column. The meals should include breakfast,
  //             lunch, dinner and one snack per day. I would like each meal suggestion
  //             to include the three food groups of protein, carbohydrates and healthy
  //             fats. Healthy fats include avocado, guacamole dip, salmon, trout,
  //             mackerel, sardines, chia seeds, nuts, boiled eggs, olive oil, coconut
  //             oil (for lightly frying), organic butter, ground flaxseeds, hummus,
  //             and organic milk yoghurt. You should never include processed meats
  //             (like ham, bacon and salami), biscuits, fries, fish fingers, cakes,
  //             sweeteners, desserts, soft drinks, ice cream, alcoholic drinks and
  //             chips. Please adapt the meal plan according to the client's
  //             characteristics and preferences below.`,
  //           },
  //         ],
