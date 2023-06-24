const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database(':memory:');
const cors = require('cors');

// ...

app.use(cors());

app.use(express.json()); // Adaugă middleware pentru a analiza corpul cererii JSON

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Inițializează datele cu 0 like-uri
db.run('CREATE TABLE likes (id INT, count INT)', () => {
  for (let i = 1; i <= 6; i++) {
    db.run('INSERT INTO likes (id, count) VALUES (?, ?)', [i, 0]);
  }
});

app.get('/likes/:id', (req, res) => {
  db.get('SELECT count FROM likes WHERE id = ?', [req.params.id], (err, row) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    
    if (!row) {
      res.status(404).json({"error": "Product not found"});
      return;
    }
    
    res.json({"count": row.count});
  });
});

app.post('/likes/:id', (req, res) => {
  db.run('UPDATE likes SET count = count + 1 WHERE id = ?', [req.params.id], (err) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }

    db.get('SELECT count FROM likes WHERE id = ?', [req.params.id], (err, row) => {
      if (err) {
        res.status(400).json({"error": err.message});
        return;
      }

      res.json({"count": row.count});
    });
  });
});

