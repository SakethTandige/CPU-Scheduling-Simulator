function ResultTable({ results }) {

  if (!results || results.length === 0) return null;

  return (

    <div>

      <h2 className="processres">Process Results</h2>

      <table>

        <thead>

          <tr>

            <th>PID</th>
            <th>Completion</th>
            <th>Turnaround</th>
            <th>Waiting</th>

          </tr>

        </thead>

        <tbody>

          {results.map((r, i) => (

            <tr key={i}>

              <td>P{r.pid}</td>
              <td>{r.completion}</td>
              <td>{r.turnaround}</td>
              <td>{r.waiting}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default ResultTable;