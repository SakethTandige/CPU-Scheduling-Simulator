function AlgorithmTabs({algorithm,setAlgorithm}){

return(

<div>

<button onClick={()=>setAlgorithm("FCFS")}>
FCFS
</button>

<button onClick={()=>setAlgorithm("SJF")}>
SJF
</button>

<button onClick={()=>setAlgorithm("RR")}>
Round Robin
</button>

<button onClick={()=>setAlgorithm("PRIORITY")}>
Priority
</button>

</div>

);

}

export default AlgorithmTabs;