// https://www.ag-grid.com/react-data-grid/cell-editing/
import './App.css';

import { useState, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [rowData, setRowData] = useState([
    { make: 'Ford', model: 'Focus', price: '40000'},
    { make: 'Toyota', model: 'Celica', price: '45000'},
    { make: 'BMW', model: '4 Series', price: '40000'}
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { field: 'make', editable: true, sortable: true, filter: true },
    { field: 'model' },
    { field: 'price' }
  ]);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
    .catch(e => console.log(e))
  }, [])

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
