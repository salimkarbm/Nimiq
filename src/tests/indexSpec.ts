import supertest from 'supertest';

import app from '../index';

describe('Test image endpoint', () => {
    it('it fetch image with the provided width and height', async (): Promise<void> => {
        const request = supertest(app);
        const response = await request.get('/api/v1/image');
        expect(response.status).toEqual(200);
    });
});
