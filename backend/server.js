const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is your backend!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
