// https://www.ag-grid.com/react-data-grid/cell-editing/
import './App.css';

import { AgGridReact } from 'ag-grid-react';

function App() {

  const rowData = [
    { make: 'Ford', model: 'Focus', price: '40000'},
    { make: 'Toyota', model: 'Celica', price: '45000'},
    { make: 'BMW', model: '4 Series', price: '40000'}
  ];

  const columnDefs = [

    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  return (
    <div>
      <AgGridReact 
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
}

export default App;
