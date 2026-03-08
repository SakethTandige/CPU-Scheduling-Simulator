function ProcessTable({processes}){

return(

<table>

<thead>

<tr>
<th>ID</th>
<th>Arrival</th>
<th>Burst</th>
<th>Priority</th>
</tr>

</thead>

<tbody>

{processes.map((p,i)=>(

<tr key={i}>

<td>{p.id}</td>
<td>{p.arrival}</td>
<td>{p.burst}</td>
<td>{p.priority}</td>

</tr>

))}

</tbody>

</table>

);

}

export default ProcessTable;