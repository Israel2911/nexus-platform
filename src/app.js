const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// FIX: Use process.cwd() to find the public folder reliably
app.use(express.static(path.join(process.cwd(), 'public')));

// API for policy updates
app.get('/api/regulatory-feed', (req, res) => {
    res.json([
        { country: "Canada", message: "PAL Allocations Updated (BC/ON)" },
        { country: "India", message: "New Mobility Agreement Signed" },
        { country: "Vietnam", message: "Tech Talent Priority Stream Active" }
    ]);
});

// FIX: Serve index.html for the root route explicitly
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Catch-all route for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Nexus Platform running on port ${port}`);
});
