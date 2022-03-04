import express from 'express';

//import image routes
import routes from './routes/index';

//initialised express
const app = express();

//image route middleware
app.use('/api/v1', routes);

//create port
const PORT = 3000;

//lisyen for server connection on port
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

export default app;
