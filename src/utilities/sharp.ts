import sharp from 'sharp';
import path from 'path';

//Get current working directory
const appdir = process.cwd();

//function to resize image
const resizeImage = async (
    imageName: string,
    width: number,
    height: number
): Promise<void> => {
    try {
        //Get the path to the image file
        const existingImgPath = path.join(
            appdir,
            `/assets/images/${imageName}`
        );
        console.log(existingImgPath);
        //get the path to where the new image will be stored
        const generatedImgPath = path.join(
            appdir,
            `/assets/images/thumbnails/${imageName}_${width}_${height}.jpeg`
        );
        console.log(generatedImgPath);
        //resize image and store image in new file path
        await sharp(existingImgPath)
            .resize(width, height)
            .jpeg({ mozjpeg: true })
            .toFile(generatedImgPath);
    } catch (err) {
        console.error(err);
    }
};

export default { resizeImage };
