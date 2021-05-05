import { Router } from "express";

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: "Nilderson Henrique Sales Nunes" })
});

export default routes;