const express = require("express");
const cors = require("cors");

const fcfs = require("./algorithms/fcfs");
const sjf = require("./algorithms/sjf");
const rr = require("./algorithms/rr");
const priority = require("./algorithms/priority");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/simulate", (req, res) => {

  console.log("Request received:", req.body); // debugging

  const { algorithm, processes, quantum } = req.body;

  try {

    let result;

    switch (algorithm) {

      case "FCFS":
        result = fcfs(processes);
        break;

      case "SJF":
        result = sjf(processes);
        break;

      case "RR":
        result = rr(processes, quantum);
        break;

      case "PRIORITY":
        result = priority(processes);
        break;

      default:
        return res.status(400).json({ error: "Invalid Algorithm" });

    }

    console.log("Result:", result); // debugging

    res.json(result);

  } catch (error) {

    console.error("Simulation Error:", error);

    res.status(500).json({
      error: "Simulation failed",
      message: error.message
    });

  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});