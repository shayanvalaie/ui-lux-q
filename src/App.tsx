import React, { useState } from 'react';

import EmployeeQueue from './components/EmployeeQueue';

function App() {
  return (
    <div className="App">
      {/* <CustomerComponent customer={customer} assignEmployee={assignEmployee} /> */}
      <EmployeeQueue />
    </div>
  );
}

export default App;
