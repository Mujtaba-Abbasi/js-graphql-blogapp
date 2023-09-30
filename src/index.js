import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import mongoose from "mongoose";
import dotenv from "dotenv";
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

async function startServer() {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  await server.start();

  app.use(express.json());
  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => {
    mongoose
      .connect(DB_URL)
      .then(() => {
        console.log(`Server has started: ${PORT}`);
      })
      .catch((e) => console.log({ e }));
  });
}
startServer();
