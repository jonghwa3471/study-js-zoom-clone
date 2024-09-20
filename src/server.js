import express from "express";

const app = express();

console.log("hello");

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:3000 🚀`);

app.listen(3000, handleListening);
