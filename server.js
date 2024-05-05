const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

// Sample data
let items = [];

// CRUD Routes
app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    items[id] = updatedItem;
    res.json(updatedItem);
});

app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    items.splice(id, 1);
    res.sendStatus(204);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
