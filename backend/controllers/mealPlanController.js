const openai = require("../config/openaiConfig");

const mealPlanController = {
  //   generateMealPlan: (req, res) => {
  //     try {
  //       const mealInputs = req.body;
  //       console.log('Here are your meal inputs:', mealInputs);
  //       res.status(200).json({ message: 'Meal plan generated successfully.' });
  //       // Your meal plan generation code using OpenAI can go here
  //       // For now, we're just logging the meal inputs

  //     } catch (error) {
  //       console.error('Error:', error);
  //       res.status(500).json({ error: 'Failed to generate meal plan. Please try again later.' });
  //     }
  //   }
  // };

  // const generateMealPlan = async (mealInputs) => {
  generateMealPlan: async (req, res) => {
    try {
      const mealInputs = req.body;
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `I am a nutritional therapist. You are an assistant that helps me to generate 7-day meal 
            plans for my clients. I want the meal plan to be in a table, with the days of the week across the 
            top and the meals on the left-hand column. The meals should include breakfast, lunch, dinner and 
            one snack per day. I would like each meal suggestion to include the three food groups of protein, carbohydrates 
            and healthy fats. Please adapt the meal plan according to the client's characteristics and 
            preferences.`,
          },
        ],
      });
      // 7-day plan, table format, with the days on top, with an optional snack,and each meal should have the three food groups (protein, carbohydrates and healthy fats)
      console.log('Here are your meal inputs:', mealInputs);
      console.log(response.data.choices[0].message.content);

      // Send a response back to the client
      res.status(200).json({ message: "Meal plan generated successfully" });
    } catch (error) {
      console.error("Error generating meal plan:", error);
      res
        .status(500)
        .json({ error: "An error occurred while generating the meal plan" });
    }
  },
};

//   // Extract the chat response from the API response
//   const chatResponse = response.data?.choices?.[0]?.message?.content || '';

//   console.log(chatResponse);
//   // return chatResponse;
// } catch (error) {
//   console.error('OpenAI API Error:', error);

//   throw new Error('Failed to generate meal plan. Please try again later.');
//   }
// }

module.exports = mealPlanController;
