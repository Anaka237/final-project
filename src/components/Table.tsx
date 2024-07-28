import { Employee } from "../App"

export interface TableProps {
    data: Employee[];
}

export function Table(props: TableProps) {
    const {data} = props;
    return (<table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => <tr>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.salary}</td>
            <td>{item.status}</td>
          </tr>)}
        {/* {
        mockData.map((worker)=><tr>
          <td>{worker.id}</td>
          <td>{worker.firstName}</td>
          <td>{worker.lastName}</td>
          <td>{worker.sallary}</td>
          <td>{worker.status}</td>
        </tr>)} */}
        </tbody>
      </table>)
}