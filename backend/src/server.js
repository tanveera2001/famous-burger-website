const app = require("./app");
const { serverPort } = require("./secret");
const connectDatabase = require("./config/db");






app.listen(serverPort, async () => {
    console.log(`Server is running at http://localhost:${serverPort}`);
    await connectDatabase();
});