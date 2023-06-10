const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const port = 3000;
app.listen(port,  '0.0.0.0', () => {
  console.log(`Microservice listening on port ${port}`);
});
