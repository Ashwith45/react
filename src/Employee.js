import react,{ useState } from "react";
import './employee.css';
import { Button } from "./Button"; 


function Employee() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [employees, setEmployees] = useState([
    { id: 1, name: "Arjun", role: "Developer" },
    { id: 2, name: "Yudhister", role: "Project Manager" },
    { id: 3, name: "Bheema", role: "Backend Developer" },
    { id: 4, name: "Nakul", role: "Frontend Developer" },
    { id: 5, name: "Sahadev", role: "QA Engineer" },
  ]);

  const addEmployee = () => {
    const newEmployee = { id: employees.length + 1, name: "New Employee", role: "Intern" };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="container">
      <h1 className="title">Employee Management App</h1>
      <ul className="list">
        {employees.map(emp => (
          <li key={emp.id} className="list-item">{emp.name} - {emp.role}</li>
        ))}
      </ul>
      <Button onClick={addEmployee} className="button">
        Add Employee
      </Button>
    </div>
  );
}

export default Employee;