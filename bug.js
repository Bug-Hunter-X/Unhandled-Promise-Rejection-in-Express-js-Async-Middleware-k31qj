const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Handle the error improperly, causing an unhandled promise rejection
    console.error('Error:', err);
  });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might throw an error
  // For example, database query or external API call
  // This might throw an error
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Something went wrong!');
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});