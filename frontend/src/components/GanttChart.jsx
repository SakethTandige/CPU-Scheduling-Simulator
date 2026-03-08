import React from "react";
import "./gantt.css";

function GanttChart({ gantt }) {
  if (!gantt || gantt.length === 0) return null;

  return (
    <div className="gantt-container">

      <h3>Gantt Chart</h3>

      <div className="gantt-row">
        {gantt.map((block, index) => (
          <div className="gantt-box" key={index}>
            <div className="pid">P{block.pid}</div>
          </div>
        ))}
      </div>

      <div className="time-row">
        {gantt.map((block, index) => (
          <div className="time-box" key={index}>
            <span>{block.start}</span>
            {index === gantt.length - 1 && <span>{block.end}</span>}
          </div>
        ))}
      </div>

    </div>
  );
}

export default GanttChart;