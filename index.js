import express from 'express';
import bodyParser from 'body-parser';
import user_Routes from './routes/user.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/user', user_Routes);

app.get('/', (req, res) => {
	res.send('hi');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))