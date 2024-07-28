import './App.css'
import { Table } from './components/Table'
import { Employee } from './models/Employee';

function App() {
  const mockData: Employee[] = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      salary: 5000,
      status: "na urlopie",
      phoneNumber: "111-111-111",
    },
    {
      id: "2",
      firstName: "Jannet",
      lastName: "Boom",
      salary: 4500,
      status: "na urlopie",
      phoneNumber: "222-222-222",
    },
    {
      id: "3",
      firstName: "Anthon",
      lastName: "Mock",
      salary: 8000,
      status: "na urlopie",
      phoneNumber: "333-333-333",
    }
  ]
 

  return (
    <>
    <main className='container'>
      <h1 className='pt-4 pb-4'>Employees</h1>

      <Table data={mockData}></Table>
      </main>
    </>
  )
}

export default App
