const app = require("./app");
const { serverPort } = require("./secret");
const connectDatabase = require("./config/db");

// Start the server
app.listen(serverPort, async () => {
  try {
    await connectDatabase();
    console.log(`Server is running at: http://localhost:${serverPort}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
});
