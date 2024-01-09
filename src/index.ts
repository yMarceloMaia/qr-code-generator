import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors"
import schema from "./generated/schema";
import { graphqlHTTP } from "koa-graphql"
import "dotenv/config"

const app = new Koa();

app.use(cors())
app.use(bodyParser());

app.use(graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
