import express, { Request, Response } from 'express';

//import caching from caching
import caching from '../../utilities/caching';

//import path from 'path';
import filepath from '../../utilities/filepath';

const imageRoute = express.Router();

//fetch image with provide width and height
imageRoute.get('/image', async (req: Request, res: Response) => {
    try {
        //Get values from the request object
        const imageName = req.query.filename as string;
        const width = parseInt(req.query.width as string, 10);
        const height = parseInt(req.query.height as string, 10);
        //check for available images
        if (filepath.availableImages.indexOf(imageName) === -1) {
            return res.send({
                status: 404,
                message:
                    'ops! sorry not included in the offered pictures please choose from [ fjord,encenadaport,palmtunnel,santamonica,icelandwaterfall]'
            });
        }
        //check if image detail are provided on the query parameters
        if (
            imageName === undefined ||
            width === undefined ||
            height === undefined
        ) {
            return res.send({
                status: 404,
                message: 'query parameters cannot be empty'
            });
        }
        //check if width and height are specified
        if (Number.isNaN(width) || Number.isNaN(height)) {
            return res.send({
                status: 404,
                message: 'image width or height must be specified'
            });
        }
        //pass values to the resize function and resize the image
        const imagePath = await caching.cachedImage(imageName, width, height);

        //send response
        return res.send({ status: 200, message: 'success', imagePath });
    } catch (err) {
        res.send(`oops,something went wrong! ${err}`);
    }
});

export default imageRoute;
