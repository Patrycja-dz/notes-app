import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;
app.get("/api/notes", async (req, res) => {
  res.json({ message: "Hello , sucess!" });
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
