// https://www.ag-grid.com/react-data-grid/cell-editing/
import './App.css';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function App() {

  const rowData = [
    { make: 'Ford', model: 'Focus', price: '40000'},
    { make: 'Toyota', model: 'Celica', price: '45000'},
    { make: 'BMW', model: '4 Series', price: '40000'}
  ];

  const columnDefs = [

    { field: 'make', editable: true },
    { field: 'model' },
    { field: 'price' }
  ];

  return (
    <div className='ag-theme-alpine' style={{ height: 500 }}>
      <AgGridReact 
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
}

export default App;
