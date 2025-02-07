const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res, next) => {
  try {
    await doSomethingAsync();
    res.send('Hello World!');
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
});

async function doSomethingAsync() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Something went wrong!');
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});