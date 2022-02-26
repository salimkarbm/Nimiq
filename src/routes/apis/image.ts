import express, { Request, Response } from 'express';

import utils from '../../utilities/sharp';

const imageRoute = express.Router();

//fetch image with provide width and height
imageRoute.get('/image', (req: Request, res: Response) => {
    //Get values from the request object
    const imageName = req.query.image as string;

    const width = parseInt(req.query.width as string, 10);
    const height = parseInt(req.query.height as string, 10);

    //pass values to the resize function and resize the image
    utils.resizeImage(imageName, width, height);
    //send response
    res.send({ status: 200, message: 'success' });
});

export default imageRoute;
