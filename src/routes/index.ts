import express, { Request, Response } from 'express';

import imageRouter from './apis/image';

const routes = express.Router();

//render front page
routes.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Home' });
});

routes.use(imageRouter);

export default routes;
