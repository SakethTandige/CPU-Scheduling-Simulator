function rr(processes, quantum) {

  let time = 0;
  let completed = 0;

  const gantt = [];
  const queue = [];

  const remaining = {};
  const results = [];

  let totalWaiting = 0;
  let totalTurnaround = 0;

  processes.forEach(p => {
    remaining[p.pid] = p.burst;
  });

  // sort by arrival time
  processes.sort((a, b) => a.arrival - b.arrival);

  let i = 0;

  while (completed < processes.length) {

    // add arrived processes
    while (i < processes.length && processes[i].arrival <= time) {
      queue.push(processes[i]);
      i++;
    }

    if (queue.length === 0) {
      time++;
      continue;
    }

    const p = queue.shift();

    const exec = Math.min(quantum, remaining[p.pid]);

    const start = time;
    const end = time + exec;

    gantt.push({
      pid: p.pid,
      start,
      end
    });

    time = end;
    remaining[p.pid] -= exec;

    // check newly arrived processes
    while (i < processes.length && processes[i].arrival <= time) {
      queue.push(processes[i]);
      i++;
    }

    if (remaining[p.pid] > 0) {
      queue.push(p);
    } 
    else {

      completed++;

      const completion = time;
      const turnaround = completion - p.arrival;
      const waiting = turnaround - p.burst;

      totalTurnaround += turnaround;
      totalWaiting += waiting;

      results.push({
        pid: p.pid,
        completion,
        turnaround,
        waiting
      });
    }
  }

  return {
    processes: results,
    avgWaiting: totalWaiting / processes.length,
    avgTurnaround: totalTurnaround / processes.length,
    gantt
  };
}

module.exports = rr;