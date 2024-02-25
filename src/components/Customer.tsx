import React from 'react';
import { Customer, Employee } from '../models';

const CustomerComponent = ({
  customer,
  assignEmployee,
}: {
  customer: Customer;
  assignEmployee: () => Employee | null;
}) => {
  const employee = assignEmployee();
  return (
    <div>
      <h3>Customer: {customer.name}</h3>
      <p>Description: {customer.description}</p>
      {employee ? (
        <p>Assigned Employee: {employee.name}</p>
      ) : (
        <p>No available employees. Please wait.</p>
      )}
    </div>
  );
};

export default CustomerComponent;
