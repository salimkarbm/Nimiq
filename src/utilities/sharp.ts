import sharp from 'sharp';
import filepath from './filepath';

//function to resize image
const resizeImage = async (
    imageName: string,
    width: number,
    height: number
): Promise<void> => {
    try {
        const existingImgPath = `${filepath.existingImgPath}/${imageName}.jpeg`;
        const generatedImgPath = `${filepath.generatedImgPath}/${imageName}_${width}_${height}.jpeg`;

        //resize image and store image in new directory path
        await sharp(existingImgPath)
            .resize(width, height)
            .toFile(generatedImgPath);
    } catch (err) {
        console.error(err);
    }
};

export default { resizeImage };
