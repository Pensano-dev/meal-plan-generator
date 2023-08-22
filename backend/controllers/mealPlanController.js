const openai = require('../config/openaiConfig');

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

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: 'user',
          content: 'Tell me a joke, please.'
          // content: `Come up with a meal plan for the inputs ${mealInputs}`
        }
      ]
    });
    
    console.log(response.data.choices[0].message.content);

      // Send a response back to the client
      res.status(200).json({ message: 'Meal plan generated successfully' });
    } catch (error) {
      console.error('Error generating meal plan:', error);
      res.status(500).json({ error: 'An error occurred while generating the meal plan' });
    }
  }
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
