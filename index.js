// const server = require("./api/server.js");

// const port = 5000;
// server.listen(port, () => {
//   console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
// });

require('dotenv').config();
const server = require('./api/server.js');

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});

