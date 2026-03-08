function fcfs(processes) {

  processes.sort((a, b) => a.arrival - b.arrival);

  let time = 0;
  let totalWaiting = 0;
  let totalTurnaround = 0;

  const gantt = [];
  const results = [];

  processes.forEach((p) => {

    const start = Math.max(time, p.arrival);
    const completion = start + p.burst;

    const turnaround = completion - p.arrival;
    const waiting = turnaround - p.burst;

    totalWaiting += waiting;
    totalTurnaround += turnaround;

    gantt.push({
      pid: p.pid,
      start: start,
      end: completion
    });

    results.push({
      pid: p.pid,
      completion: completion,
      turnaround: turnaround,
      waiting: waiting
    });

    time = completion;

  });

  const avgWaiting = totalWaiting / processes.length;
  const avgTurnaround = totalTurnaround / processes.length;

  return {
    processes: results,
    avgWaiting,
    avgTurnaround,
    gantt
  };

}

module.exports = fcfs;