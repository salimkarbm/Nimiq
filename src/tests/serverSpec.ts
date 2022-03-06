import supertest from 'supertest';

import app from '../server';

describe('Test image endpoint /api/v1/', () => {
    it('it expects server to be running and return a status code of 200', async (): Promise<void> => {
        const request = supertest(app);
        const response = await request.get('/api/v1/');
        expect(response.status).toEqual(200);
        expect(response.ok).toEqual(true);
    });
    it('it expects to return error when url parameters are not specified', async (): Promise<void> => {
        const request = supertest(app);
        const response = await request.get('/api/v1/image');
        expect(response.body.status).toEqual(404);
        expect(response.body).toBeInstanceOf(Object);
    });
    it('it expects to return status code 200 when url parameters are define correctly', async (): Promise<void> => {
        const request = supertest(app);
        const response = await request.get(
            '/api/v1/image?filename=fjord&width=200&height=300'
        );
        expect(response.body.status).toEqual(200);
        expect(response.body.message).toEqual('success');
        expect(response.body).toBeInstanceOf(Object);
    });
    it('it return error when width or height is not specified', async (): Promise<void> => {
        const request = supertest(app);
        const response = await request.get(
            '/api/v1/image?filename=fjord&width=200&height='
        );
        expect(response.body.status).toEqual(404);
        expect(response.body).toBeInstanceOf(Object);
    });
    it('it return error when width or height parameters is not a number', async (): Promise<void> => {
        const request = supertest(app);
        const response = await request.get(
            '/api/v1/image?filename=fjord&width=image&height=300'
        );
        expect(response.body.status).toEqual(404);
        expect(response.body).toBeInstanceOf(Object);
    });
});
