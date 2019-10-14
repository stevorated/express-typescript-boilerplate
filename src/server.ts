import http from 'http';
import express from 'express';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import { applyMiddleware, applyRoutes } from './utils';
import routes from './routes';

process.on('uncaughtException', e => {
  console.log('uncaughtException:', e);
  process.exit(1);
});
process.on('unhandledRejection', e => {
  console.log('uncaughtException', e);
  process.exit(1);
});

const PORT = process.env.PORT || 3000;

const app = express();

applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}.`);
});
