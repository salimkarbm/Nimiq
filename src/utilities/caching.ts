import fs from 'fs';
import sharp from './sharp';
import filepath from './filepath';

const cachedImage = async (
    imageName: string,
    width: number,
    height: number
): Promise<string | undefined> => {
    try {
        const existingImgPath = `${filepath.existingImgPath}/${imageName}.jpeg`;
        const generatedImgPath = `${filepath.generatedImgPath}/${imageName}_${width}_${height}.jpeg`;

        //check if the image exists if it exists return it
        if (fs.existsSync(generatedImgPath)) {
            return generatedImgPath;
        }
        //check if the image exists and dimensions are not equal to zero resize image and return it
        if (fs.existsSync(existingImgPath) && width !== 0 && height !== 0) {
            await sharp.resizeImage(imageName, width, height);
            return generatedImgPath;
        }
    } catch (err) {
        throw new Error(`image does not exits, please check file path ${err}`);
    }
};

export default { cachedImage };
