# Unhandled Promise Rejection in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous middleware.  When an asynchronous operation within a route handler throws an error and isn't properly caught, the application may crash without informative error messages.

The `bug.js` file contains code that reproduces this issue. The `bugSolution.js` shows how to fix this by properly handling promise rejections using a centralized error handler or within the async function itself.  See the solutions for details.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install express` to install the required packages.
4. Run `node bug.js`. You'll see a crash due to the unhandled promise rejection.
5. Run `node bugSolution.js` to see the corrected implementation.