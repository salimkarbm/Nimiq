import processedImage from '../utilities/sharp';

describe('image', () => {
    it('it expects resizedImage() to resize image', async () => {
        await processedImage.resizeImage('fjord.jpeg', 300, 200);
    });
});
