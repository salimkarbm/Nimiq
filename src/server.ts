import express from 'express';
import path from 'path';

//import image routes
import routes from './routes/index';

//Get current woking directory
const appdir = process.cwd();

//initialised express
const app = express();

//middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(appdir, '/views'));
app.use(express.static(`assets`));

//image route middleware
app.use('/api/v1', routes);

//create port
const PORT = 3000;

//lisyen for server connection on port
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

export default app;
