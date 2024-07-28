import { useState } from 'react';
import { Employee } from '../models/Employee';

interface TableProps {
    data: Employee[];
}

export function Table({data}: TableProps) {
    const [displayData, setDisplayData] = useState<Employee[]>(data);


    const handleSearchType = (event: React.KeyboardEvent) => {
        const input = event.target as HTMLInputElement;
        const phrase = input.value.toLowerCase();
        const d = data.filter(item => {
            return item.firstName.toLowerCase().includes(phrase) || 
            item.lastName.toLowerCase().includes(phrase) || 
            item.phoneNumber.toLowerCase().includes(phrase)
        });
        setDisplayData(d);
    }
    return (
    <>
    <div className='mb-3'><input onKeyUp={handleSearchType} 
    type="search" placeholder="search..." className="form-control"/></div>
    <table className="table">
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
          {displayData.map(item => <tr>
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
      </table></>)
}