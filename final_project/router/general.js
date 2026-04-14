const axios = require("axios");
const express = require("express");
const router = express.Router();

const BASE_URL = "http://localhost:5000/books";

// Get all books
router.get("/", async (req, res) => {
    const data = await axios.get(BASE_URL);
    res.json(data.data);
});

// Get by ISBN
router.get("/isbn/:isbn", async (req, res) => {
    const data = await axios.get(`${BASE_URL}/isbn/${req.params.isbn}`);
    res.json(data.data);
});

// Get by Author
router.get("/author/:author", async (req, res) => {
    const data = await axios.get(`${BASE_URL}/author/${req.params.author}`);
    res.json(data.data);
});

// Get by Title
router.get("/title/:title", async (req, res) => {
    const data = await axios.get(`${BASE_URL}/title/${req.params.title}`);
    res.json(data.data);
});

module.exports = router;