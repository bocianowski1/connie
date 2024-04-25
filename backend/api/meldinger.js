const express = require("express");

const meldingerRoute = express.Router()

const messages = ["hallo", "verden"]

meldingerRoute.post("/", async (req, res) => {
  const message = req.body.message

  messages.push(message)
  return res.json({ messages })
});

meldingerRoute.get("/", async (req, res) => {
  return res.json({ messages })
})

module.exports = meldingerRoute