import { useState } from "react";

import AddProcess from "./AddProcess";
import AlgorithmTabs from "./AlgorithmTabs";
import ProcessTable from "./ProcessTable";
import GanttChart from "./GanttChart";
import ResultTable from "./ResultTable";

import fcfs from "../../../backend/algorithms/fcfs";
import sjf from "../../../backend/algorithms/sjf";
import rr from "../../../backend/algorithms/rr";
import priority from "../../../backend/algorithms/priority";

function Simulator(){

const [processes,setProcesses] = useState([]);
const [algorithm,setAlgorithm] = useState("FCFS");
const [result,setResult] = useState(null);

const addProcess = (process)=>{

setProcesses([...processes,process]);

};

const simulate = ()=>{

let output;

if(algorithm==="FCFS") output = fcfs(processes);
if(algorithm==="SJF") output = sjf(processes);
if(algorithm==="RR") output = rr(processes,2);
if(algorithm==="PRIORITY") output = priority(processes);

setResult(output);

};

return(

<div className="simulator">

<div className="left">

<AddProcess addProcess={addProcess} algorithm={algorithm}/>

<ProcessTable processes={processes}/>

<button onClick={simulate}>
Simulate
</button>

</div>

<div className="right">

<AlgorithmTabs
algorithm={algorithm}
setAlgorithm={setAlgorithm}
/>

{result && (

<>

<GanttChart gantt={result.gantt}/>

<ResultTable
processes={result.processes}
avgWaiting={result.avgWaiting}
avgTurnaround={result.avgTurnaround}
/>

</>

)}

</div>

</div>

);

}

export default Simulator;