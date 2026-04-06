import express from 'express';
import router from './routes/router.js';
import db from './database/database.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', router);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
