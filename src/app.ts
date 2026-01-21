import cors from 'cors';
import express, { type Request, type Response } from 'express';
import { studentRoutes } from '@/app/modules/student/student.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/students', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
