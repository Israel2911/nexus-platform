const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

// API for the frontend to fetch policy updates
app.get('/api/regulatory-feed', (req, res) => {
    res.json([
        { country: "Canada", message: "PAL Allocations Updated (BC/ON)" },
        { country: "India", message: "New Mobility Agreement Signed" },
        { country: "Vietnam", message: "Tech Talent Priority Stream Active" }
    ]);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Nexus Platform running on port ${port}`);
});
