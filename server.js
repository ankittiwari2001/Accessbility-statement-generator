const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
