import swaggerUI from 'swagger-ui-express';
import express from 'express';
import path from 'path';
import YAML from 'yamljs';
import { fileURLToPath } from 'url';
import crypto from 'node:crypto';

console.log(crypto.randomUUID());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { userRouter } from './resources/users/user.router.js';
import { boardRouter } from './resources/boards/board.router.js';
import { taskRouter } from './resources/tasks/task.router.js';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks',taskRouter)
export { app };
