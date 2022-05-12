const router = require("./router/olumpics_router");
const port = process.env.PORT || 8000;
const express = require("express");
require("./db/olumpics_con");
const app = express();
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`listenging to port ${port}`);
});
