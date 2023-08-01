const openai = require('../config/openaiConfig');

const generateMealPlan = async (mealInputs) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: 'user',
          content: `Come up with a meal plan for the inputs ${mealInputs}`
        }
      ]
    });

    // Extract the chat response from the API response
    const chatResponse = response.data?.choices?.[0]?.message?.content || '';
    
    return chatResponse;
  } catch (error) {
    console.error('OpenAI API Error:', error);

    throw new Error('Failed to generate meal plan. Please try again later.');
  }
}

module.exports = generateMealPlan;
