const express = require("express");
const server = express();

const carsRouter = require("./routers/carsRouter.js");

server.use(express.json());
server.use("/api/cars", carsRouter);

const PORT = 8000;
server.listen(PORT, () => console.log(`Server is Running on port http://localhost:${PORT}`));