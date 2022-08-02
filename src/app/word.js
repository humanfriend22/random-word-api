import { readFileSync as read } from 'node:fs';
import path from 'word-list';

let words = {};
const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

// Functions
const rand = (array) => array[Math.floor(Math.random() * array.length)];

// Setup Words Object
for (const letter of alphabet) words[letter] = [];
for (const word of read(path, 'utf-8').split('\n')) {
    words[word.charAt(0)].push(word);
};


export const validateRequest = (query) => alphabet.includes(query.letter);
export const generateWord = (letter) => rand(words[letter]);
export const generateRandomWord = () => rand(words[rand(alphabet)]);