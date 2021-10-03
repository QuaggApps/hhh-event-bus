import express from 'express';
import axios from 'axios';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);
    
    axios.post('http://localhost:4000/events', event);
    
    res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, () => {
    console.log('Listening to port 4005');
});