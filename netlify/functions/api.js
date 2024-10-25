import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import serverless from 'serverless-http';
import { router } from '../../src/routes/index.js';
import { errorHandler } from '../../src/middleware/errorHandler.js';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/.netlify/functions/api', router);

// Error handling
app.use(errorHandler);

export const handler = serverless(app);