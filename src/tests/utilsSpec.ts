import processedImage from '../utilities/sharp';

describe('image', () => {
    it('it expects resizedImage() to resize image', async (): Promise<void> => {
        await expectAsync(
            processedImage.resizeImage('palmtunnel', 300, 200)
        ).toBeResolved();
    });

    it('it return error when an image that does not exist is passed', async (): Promise<void> => {
        processedImage
            .resizeImage('image that does not exist', 300, 200)
            .catch((err) => {
                expect(err.Error).toBe(' Input file is missing');
            });
    });
});
