import express from 'express';

//initialised express
const app = express();

//create port
const PORT = 3000;

//lisyen for server connection on port
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
