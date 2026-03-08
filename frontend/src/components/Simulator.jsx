import React, { useState } from "react";
import axios from "axios";
import "../styles/Simulator.css";
import GanttChart from "../components/GanttChart";
import ResultTable from "../components/ResultTable";
import { Link } from "react-router-dom";

const Simulator = () => {

  const [algorithm, setAlgorithm] = useState("FCFS");
  const [processes, setProcesses] = useState([]);
  const [result, setResult] = useState(null);

  const [pid, setPid] = useState("");
  const [arrival, setArrival] = useState("");
  const [burst, setBurst] = useState("");
  const [priority, setPriority] = useState("");
  const [quantum, setQuantum] = useState("");

  const addProcess = () => {

    if (!pid || !arrival || !burst) {
      alert("Fill all fields");
      return;
    }

    const newProcess = {
      pid,
      arrival: Number(arrival),
      burst: Number(burst),
      priority: Number(priority)
    };

    setProcesses([...processes, newProcess]);

    setPid("");
    setArrival("");
    setBurst("");
    setPriority("");
  };

  const simulate = async () => {

    if (processes.length === 0) {
      alert("Add processes first");
      return;
    }

    try {

      const response = await axios.post("http://localhost:5000/simulate", {
        algorithm,
        processes,
        quantum: Number(quantum)
      });

      setResult(response.data);

    } catch (err) {
      console.error(err);
      alert("Simulation error");
    }
  };

  return (
    <div>

      <div className="navbar">
        <h1 className="logo">CPU Scheduling Simulator</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/simulator">Simulator</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="top-controls">

        <label>Algorithm</label>

        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="FCFS">FCFS</option>
          <option value="SJF">SJF</option>
          <option value="RR">Round Robin</option>
          <option value="PRIORITY">Priority</option>
        </select>

        {algorithm === "RR" && (
          <>
            <label>Quantum</label>
            <input
              type="number"
              value={quantum}
              onChange={(e) => setQuantum(e.target.value)}
            />
          </>
        )}

      </div>

      <div className="process-section">

        <h3 className="addpro">Add Process</h3>

        <input
          placeholder="Process ID"
          value={pid}
          onChange={(e) => setPid(e.target.value)}
        />

        <input
          placeholder="Arrival Time"
          type="number"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />

        <input
          placeholder="Burst Time"
          type="number"
          value={burst}
          onChange={(e) => setBurst(e.target.value)}
        />

        {algorithm === "PRIORITY" && (
          <input
            placeholder="Priority"
            type="number"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        )}

        <button className="add-process-btn" onClick={addProcess}>
          Add Process
        </button>

      </div>

      <h3 className="processtab">Process Table</h3>

      <table>

        <thead>
          <tr>
            <th>PID</th>
            <th>Arrival</th>
            <th>Burst</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>

          {processes.map((p, index) => (
            <tr key={index}>
              <td>{p.pid}</td>
              <td>{p.arrival}</td>
              <td>{p.burst}</td>
              <td>{p.priority}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <button className="simulate-btn" onClick={simulate}>
        Simulate
      </button>

      {result && (

        <div className="results">

          <h2 className="res">Results</h2>

          <div className="avg-times">

            <div className="avg-card">
              <h4>Average Waiting Time</h4>
              <p>{result.avgWaiting}</p>
            </div>

            <div className="avg-card">
              <h4>Average Turnaround Time</h4>
              <p>{result.avgTurnaround}</p>
            </div>

          </div>

          {/* Result Table */}
          <ResultTable results={result.processes} />

          <h2 className="gantttext">Gantt Chart</h2>

          <div className="gantt-container">

            <div className="gantt-row">

              {result.gantt.map((g, i) => (
                <div className="gantt-box" key={i}>
                  P{g.pid}
                </div>
              ))}

            </div>

            <div className="time-row">

              {result.gantt.map((g, i) => (
                <div className="time-box" key={i}>
                  {g.start}
                </div>
              ))}

              <div className="time-box">
                {result.gantt[result.gantt.length - 1].end}
              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Simulator;