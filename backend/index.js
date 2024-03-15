const express = require('express');
const connection = require('./config/db');

const app = express();
const PORT = 8080;

//Routes
app.post('/api/favorites/add', (req, res) => {
    const { userId, recipeId } = req.body;
    const sql = `INSERT INTO favorites (userId, recipeId) VALUES (?, ?)`;
    connection.query(sql, [userId, recipeId], (err, result) => {
        if (err) {
            console.error('Error adding favorite:', err);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
            return;
        }
        console.log('Favorite added successfully');
        res.status(200).json({ success: true });
    });
});

// Remove recipe from favorites
app.post('/api/favorites/remove', (req, res) => {
    const { userId, recipeId } = req.body;
    const sql = `DELETE FROM favorites WHERE userId = ? AND recipeId = ?`;
    connection.query(sql, [userId, recipeId], (err, result) => {
        if (err) {
            console.error('Error removing favorite:', err);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
            return;
        }
        console.log('Favorite removed successfully');
        res.status(200).json({ success: true });
    });
});

// Get user's favorite recipes
app.get('/api/favorites/:userId', (req, res) => {
    const { userId } = req.params;
    const sql = `SELECT * FROM favorites WHERE userId = ?`;
    connection.query(sql, [userId], (err, rows) => {
        if (err) {
            console.error('Error fetching favorites:', err);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
            return;
        }
        console.log('Favorites fetched successfully');
        res.status(200).json(rows);
    });
});


// Start server
app.listen(PORT, () => {
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

    console.log(`Server is running on port ${PORT}`);
});
