import express from "express";
const app = express();
const port = 8000;

let count = 0;

app.get("/counter", (req, res) => {
  res.send(count.toString());
});

app.post("/counter", (req, res) => {
  count++;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
