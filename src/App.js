import "./App.css";

import { useState, useEffect, useCallback } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
	const [rowData, setRowData] = useState([
		{ make: "Ford", model: "Focus", price: "40000" },
		{ make: "Toyota", model: "Celica", price: "45000" },
		{ make: "BMW", model: "4 Series", price: "40000" }
	]);

  // const gridOptions = {
  //   // onCellContextMenu: (event) => console.log('Right-Clicked')
  //   suppressContextMenu: true
  // }

  // Suppress the JavaScript Context Menu
  window.addEventListener("contextmenu", (e) => {e.preventDefault()});

  const cellClickedListener = useCallback(e => {
    console.log('Cell Clicked', e);
  }, []);
  
  const cellRightClickedListener = useCallback(e => {
    // e.preventDefault();
    console.log('Cell Right Clicked', e);
    handleShow();
  }, []);

	const [columnDefs, setColumnDefs] = useState([
		{ field: "make", editable: true, sortable: true, filter: true },
		{ field: "model" },
		{ field: "price" }
	]);

	useEffect(() => {
		fetch("https://www.ag-grid.com/example-assets/row-data.json")
			.then((result) => result.json())
			.then((rowData) => setRowData(rowData))
			.catch((e) => console.log(e));
	}, []);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<div className="mb-3">
						<label htmlFor="exampleFormControlTextarea1" className="form-label">
							Example textarea
						</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
						></textarea>
					</div>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			<div className="ag-theme-alpine" style={{ height: 500 }}>
				<AgGridReact 
          rowData={rowData} 
          columnDefs={columnDefs} 
          onCellClicked = { cellClickedListener }
          onCellContextMenu = { cellRightClickedListener }
          />
			</div>
		</>
	);
}

export default App;
