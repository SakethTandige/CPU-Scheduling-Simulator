function priority(processes) {

  // lower number = higher priority
  processes.sort((a, b) => a.priority - b.priority);

  let time = 0;

  let totalWaiting = 0;
  let totalTurnaround = 0;

  const gantt = [];
  const results = [];

  processes.forEach(p => {

    const start = Math.max(time, p.arrival);
    const completion = start + p.burst;

    const turnaround = completion - p.arrival;
    const waiting = turnaround - p.burst;

    totalWaiting += waiting;
    totalTurnaround += turnaround;

    gantt.push({
      pid: p.pid,
      start,
      end: completion
    });

    results.push({
      pid: p.pid,
      completion,
      turnaround,
      waiting
    });

    time = completion;

  });

  return {
    processes: results,
    avgWaiting: totalWaiting / processes.length,
    avgTurnaround: totalTurnaround / processes.length,
    gantt
  };
}

module.exports = priority;