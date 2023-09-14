# The 7-Day Meal Plan Generator

This online, login-free, program was developed to support Nutritional Therapy students and practitioners to deliver a 7-day meal plan to their clients.
With our technology, you will add a few dietary requirements and have a meal plan ready to be downloaded in less than a minute. As this is an experimental, AI-generated plan, we suggest it be considered a starting point, so please remember to go through the recommendations and confirm they match your client's needs.

### Disclaimer

While we have taken all reasonable steps to ensure the accuracy and completeness of the information presented in this program, we cannot guarantee its correctness or usefulness for any particular purpose. The information provided by the 7-Day Meal Plan Generator is intended for educational and informational purposes only and should not be construed as medical advice or a substitute for professional healthcare services. Any reliance on the information presented in this program is strictly at your own risk, and we shall not be held liable for any damages, losses, or expenses arising from the use of the 7-Day Meal Plan Generator or the information presented herein. By using the 7-Day Meal Plan Generator, you agree to these terms and conditions.

# Meet the Team

At Pensano Developers, we are committed to giving back to our community and supporting initiatives that promote positive social impact. We believe that technology has the power to change lives and make a difference, which is why we are proud to support tech for good projects. As a socially responsible team, we actively seek out opportunities to collaborate with organizations that align with our values and share our vision for creating a better world. We believe that by using our skills and expertise to support worthy causes, we can make a meaningful impact and help create a brighter future for all.

We work in agile environments, test-driven development, object-oriented programming, and quickly adapting to new tech stacks. We aim to deliver software that meets the needs of the customer, is flexible and adaptable to change, and is delivered efficiently and with high quality.

# Getting started
1. Clone the repo
2. Install Node.js dependencies for both front and backend directories

  ```bash
  cd backend
  npm install
  cd ../frontend
  npm install
  ```
3. Install the "react-allergens" package using the package manager of your choice, such as npm or yarn.

To install "react-allergens" using npm:
  ```bash
  npm install react-allergens
  ```
To install "react-allergens" using yarn:
  ```bash
  yarn add react-allergens
  ```
4. Get a ChatGPT API key - you will need it later. If your team does not have one, you will have to sign in to your ChatGPT account, go to the API keys page and click the “Create new secret key” button. This key should not be visible on GitHub, so we will use a .env file to keep it hidden. Publicly exposing your key can result in your account being compromised, which could lead to unexpected charges on your account.   

5. Confirm that `.env` has been added to your `.gitignore` dir

6. Install dotenv:
```bash
  npm install dotenv --save
  ```
7. Create a `.env` file in the backend dir and add `OPENAI_API_KEY=` followed by your ChatGPT API key. It should look like this:
  ```
  PROJECT_API_KEY=3ebf52c0-3ebf52c0
  ```

### Running
1.  Start the frontend in a new terminal session:
  ```bash
  cd frontend
  npm start
  ```
2. Start the backend in a new terminal session:
  ```bash
  cd backend
  npm start
  ```
You should now be able to open your browser and go to `http://localhost:3000/`

### Resources
- [MERN Stack: A Comprehensive Guide](https://blog.nextideatech.com/how-to-get-started-with-the-mern-stack-a-comprehensive-guide/)
- [Keeping your API keys secret with dotenv](https://jonathansoma.com/lede/foundations-2019/classes/apis/keeping-api-keys-secret/)
- [dotenv](https://www.npmjs.com/package/dotenv)
