const openai = require('../config/openaiConfig');

const mealPlanController = {
  generateMealPlan: async (req, res) => {
    try {
      const mealInputs = req.body;
      console.log('Here are your meal inputs:', mealInputs);

      // Your meal plan generation code using OpenAI can go here
      // For now, we're just logging the meal inputs

      res.json({ message: 'Meal plan generated successfully.' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to generate meal plan. Please try again later.' });
    }
  }
};


// const generateMealPlan = async (mealInputs) => {
//   await console.log('Here are your meal inputs')
  // try {
  //   const response = await openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: 'user',
  //         content: `Come up with a meal plan for the inputs ${mealInputs}`
  //       }
  //     ]
  //   });

  //   // Extract the chat response from the API response
  //   const chatResponse = response.data?.choices?.[0]?.message?.content || '';
    
  //   return chatResponse;
  // } catch (error) {
  //   console.error('OpenAI API Error:', error);

  //   throw new Error('Failed to generate meal plan. Please try again later.');
  // }
// }

module.exports = mealPlanController;