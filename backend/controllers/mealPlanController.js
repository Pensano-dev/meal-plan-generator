const openai = require("../config/openaiConfig");

// const mealPlanController = {
//   generateMealPlan: async (req, res) => {
//     try {
//       const mealInputs = req.body;
//       const response = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [
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
//       });
//       // 7-day plan, table format, with the days on top, with an optional snack,and each meal should have the three food groups (protein, carbohydrates and healthy fats)
//       console.log("Here are your meal inputs:", mealInputs);

//       // Send a response back to the client
//       const gptResponse = response.data.choices[0].message.content
//       res.status(200).json({ gptResponse: gptResponse });
//     } catch (error) {
//       console.error("Error generating meal plan:", error);
//       res
//         .status(500)
//         .json({ error: "An error occurred while generating the meal plan, please try again later." });
//     }
//   },
// };

const mealPlanController = {
  generateMealPlan: (req, res) => {
    const mealInputs = req.body;
    const gptResponse = "this is fake data"
    res.status(200).json({ gptResponse: gptResponse })
  }
}


module.exports = mealPlanController;
