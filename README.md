

CPU Scheduling Simulator
A web-based simulator that demonstrates different CPU Scheduling Algorithms used in Operating Systems.
The application allows users to input processes and simulate scheduling algorithms while visualizing results through a Gantt Chart and performance metrics.

Features
Simulate multiple CPU scheduling algorithms:
First Come First Serve (FCFS)
Shortest Job First (SJF)
Round Robin (RR)
Priority Scheduling

Add multiple processes dynamically
Input Arrival Time, Burst Time, and Priority
Time Quantum support for Round Robin

How It Works
User enters process details (Arrival Time, Burst Time, Priority).
User selects a scheduling algorithm.
When Simulate is clicked:
React sends a request to the backend API.
The backend runs the selected scheduling algorithm.
Results are returned as JSON.
Frontend displays:Gantt Chart
Scheduling metrics table
