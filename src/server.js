import express from 'express';
import { validateRequest, generateWord, generateRandomWord } from './app/word.js';

const app = express();

// Homepage
app.get('/', (req, res) => {
    // Redirect to Github repository
    res.redirect('https://github.com/humanfriend22/random-word-api');
});

// API Endpoint
app.get('/word', async ({ query }, res) => {
    res.setHeader('content-type', 'text/plain');
    res.end(
        validateRequest(query) ?
            generateWord(query.letter) : generateRandomWord()
    );
});

app.listen(process.env.PORT || 8080);