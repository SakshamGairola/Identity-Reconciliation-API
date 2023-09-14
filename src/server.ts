import express from 'express';
import sequelize from '../service/connectionService.ts';

const app: express.Application = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

try {
    //con
    sequelize.authenticate();
    console.log('Success!');
} catch (err) {
    console.error(err);
}

app.listen(port, () => {
    return console.log(`Express server is listening at http://localhost:${port}`);
});