const { port } = require("./config");
const { createApp } = require("./app");

createApp().listen(port, () => {
  console.log(`Course running at http://localhost:${port}`);
});
