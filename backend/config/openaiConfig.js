require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // no key yet and dotenv not installed
});

const openai = new OpenAIApi(configuration);

module.exports = openai;