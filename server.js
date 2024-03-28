import { create, router as _router, defaults } from "json-server";
const server=create();
const router=_router("db.json");
const middlewares=defaults();
const port= process.env.PORT() || 3001;

server.use(middlewares);
server.use(router);

server.listen(port)