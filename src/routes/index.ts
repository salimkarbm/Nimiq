import express, { Request, Response } from 'express';

import imageRouter from './apis/image';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
    res.send('<h1>Image Processing Api</h1>');
});

routes.use(imageRouter);

export default routes;
