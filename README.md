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

3. Ensure nodemon is installed by running

```bash
npm install nodemon --global
```

4. Install the "react-allergens" package using the package manager of your choice, such as npm or yarn.
   To install "react-allergens" using npm:

```bash
npm install react-allergens
```

To install "react-allergens" using yarn:

```bash
yarn add react-allergens
```

5. Get a ChatGPT API key - you will need it later. If your team does not have one, you will have to sign in to your ChatGPT account, go to the API keys page and click the “Create new secret key” button. This key should not be visible on GitHub, so we will use a .env file to keep it hidden. Publicly exposing your key can result in your account being compromised, which could lead to unexpected charges on your account.

6. Confirm that `.env` has been added to your `.gitignore` dir

7. Install dotenv:

```bash
  npm install dotenv --save
```

8. Create a `.env` file in the backend dir and add `OPENAI_API_KEY=` followed by your ChatGPT API key. It should look like this:

```
PROJECT_API_KEY=3ebf52c0-3ebf52c0
```

### Running

1.  To start the frontend and backend servers at the same time:

```bash
cd backend
npm start
```

2. To start the frontend only:

```bash
cd frontend
npm start
```

3. To start the backend only:

```bash
cd backend
npm run server
```

### Resources

- [MERN Stack: A Comprehensive Guide](https://blog.nextideatech.com/how-to-get-started-with-the-mern-stack-a-comprehensive-guide/)
- [Keeping your API keys secret with dotenv](https://jonathansoma.com/lede/foundations-2019/classes/apis/keeping-api-keys-secret/)
- [dotenv](https://www.npmjs.com/package/dotenv)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
