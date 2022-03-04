import path from 'path';

//Get current working directory
const appdir = process.cwd();

const availableImages: string[] = [
    'fjord',
    'encenadaport',
    'palmtunnel',
    'santamonica',
    'icelandwaterfall'
];

//Get the path to the image file
const existingImgPath = path.join(appdir, `/assets/images`);

//get the path to where the new image will be stored
const generatedImgPath = path.join(appdir, `/assets/images/thumbnails`);

export default {
    availableImages,
    existingImgPath,
    generatedImgPath
};
