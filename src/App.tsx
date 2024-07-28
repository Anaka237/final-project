import './App.css'
import { Table } from './components/Table'

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  salary: number;
  status: string;
}

function App() {
  const mockData: Employee[] = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      salary: 5000,
      status: "na urlopie"
    },
    {
      id: "2",
      firstName: "Jannet",
      lastName: "Boom",
      salary: 4500,
      status: "na urlopie"
    },
    {
      id: "3",
      firstName: "Anthon",
      lastName: "Mock",
      salary: 8000,
      status: "na urlopie"
    }
  ]
 

  return (
    <>
      <h1>Employees</h1>
      <Table data={mockData}></Table>

    </>
  )
}

export default App
