const openai = require('../config/openaiConfig');

const generateMealPlan = async (mealInputs) => {

  const mealPlan = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'user',
        content: `Come up with a mealplan for the inputs ${mealInputs}`
      }
    ]
  })
}