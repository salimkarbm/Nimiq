import express from 'express';

//import image routes
import imageRoute from './routes/index';

//initialised express
const app = express();

app.use('/api/v1/', imageRoute);

//create port
const PORT = 3000;

//lisyen for server connection on port
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

export default app;
