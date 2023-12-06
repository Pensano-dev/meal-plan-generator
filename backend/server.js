const app = require("./app");

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
