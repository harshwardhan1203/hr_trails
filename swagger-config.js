const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "company management",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["server.js", "./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);
module.exports = (app) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};
