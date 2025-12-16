const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// --- MOCK DATA ROUTES (For Demo Purposes) ---

// 1. Regulatory Feed API (Simulating connection to IRCC/Gov)
app.get('/api/regulatory-feed', (req, res) => {
    res.json([
        { country: "Canada", type: "Policy", message: "PAL Allocations Updated (BC/ON)" },
        { country: "India", type: "Trade", message: "New Mobility Agreement with Germany" },
        { country: "Vietnam", type: "Visa", message: "Tech Talent Priority Stream Active" }
    ]);
});

// 2. Talent Pipeline API (Simulating the Database)
app.get('/api/pipeline-stats', (req, res) => {
    res.json({
        total_students: 12405,
        ready_for_work: 842,
        top_skill: "Advanced Manufacturing"
    });
});

// Serve the Main Dashboard
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Nexus Platform running on port ${port}`);
});

