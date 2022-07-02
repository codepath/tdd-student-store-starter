const app = require("./app");

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port);
});

// Wire up the appropriate middleware and error handlers in the app.js file
// Create a single GET request handler at the / endpoint. It should respond to all GET requests with a JSON object and a 200 status code. The JSON response should contain a single key of ping that stores the string value: pong. For example: { "ping": "pong" }.
// Have a server.js file that starts the app by listening on port 3001.
