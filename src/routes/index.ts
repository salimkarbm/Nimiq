import express from 'express';

const router = express.Router();

//fetch image with provide width and height
router.get('/image', (req, res) => {
    res.send({ status: 200, message: 'success' });
});

export default router;
