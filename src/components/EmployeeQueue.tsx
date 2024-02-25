import React, { useState, useEffect } from 'react';
import { Employee } from '../models'; // Adjust the path as necessary
import Employees from './Employee.json';

const EmployeeQueue = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [queue, setQueue] = useState<Employee[]>([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | ''>('');

  // Load employees from the JSON file
  useEffect(() => {
    setEmployees(Employees);
  }, []);

  // Handle selecting an employee
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEmployeeId(Number(event.target.value));
  };

  // Handle adding an employee to the queue
  const handleAddToQueue = () => {
    if (!selectedEmployeeId) return;
    const employeeToAdd = employees.find(
      (emp) => emp.id === selectedEmployeeId
    );
    if (employeeToAdd) {
      setQueue([...queue, employeeToAdd]);
    }
  };
  const handleRemoveFromQueue = (id: number) => {
    setQueue(queue.filter((employee) => employee.id !== id));
  };

  return (
    <div>
      <select
        value={selectedEmployeeId.toString()}
        onChange={handleSelectChange}
      >
        <option value="">Select an Employee</option>
        {employees.map((employee) => (
          <option key={employee.id} value={employee.id}>
            {employee.name} ({employee.status})
          </option>
        ))}
      </select>
      <button onClick={handleAddToQueue}>Add to Queue</button>
      <div>
        {queue.map((employee) => (
          <div
            key={employee.id}
            style={{
              border: '1px solid black',
              margin: '10px',
              padding: '10px',
            }}
          >
            <p>Name: {employee.name}</p>
            <p>Status: {employee.status}</p>
            <button onClick={() => handleRemoveFromQueue(employee.id)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeQueue;
