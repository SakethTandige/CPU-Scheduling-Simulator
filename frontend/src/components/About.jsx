function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">CPU Scheduling Algorithms</h1>

      <div className="algo-card">
        <h2>FCFS</h2>
        <p>First Come First Serve schedules processes in arrival order.</p>
      </div>

      <div className="algo-card">
        <h2>SJF</h2>
        <p>Shortest Job First runs the process with the smallest burst time.</p>
      </div>

      <div className="algo-card">
        <h2>Priority</h2>
        <p>Processes execute according to their priority level.</p>
      </div>

      <div className="algo-card">
        <h2>Round Robin</h2>
        <p>Each process gets a fixed time quantum in cyclic order.</p>
      </div>

    </div>
  );
}

export default About;