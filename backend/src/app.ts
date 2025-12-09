import express from "express";

const app = express();

// Middleware for parse JSON in the body
app.use(express.json());

app.get('/home', (req, res) => {
    res.json({status: 'ok'});
});

export default app;