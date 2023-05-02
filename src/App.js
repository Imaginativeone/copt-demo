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
		{ 
      "ROFO/ROFR": "100", 
      "Notification Data Sent": "4/10/2023", 
      "Days to Respond": "15",
      "Notification Delivered": "4/11/2023",
      "Notification Response Deadline": "4/26/2023",
      "Tenant Response Date": "",
      "Tenant Response": "",
      "ROFO/ROFR No...": ""
    },
		{ 
      "ROFO/ROFR": "100", 
      "Notification Data Sent": "4/20/2023", 
      "Days to Respond": "10",
      "Notification Delivered": "",
      "Notification Response Deadline": "",
      "Tenant Response Date": "",
      "Tenant Response": "",
      "ROFO/ROFR No...": ""
    },
	]);

	const [columnDefs, setColumnDefs] = useState([
		{ field: "ROFO/ROFR", editable: true, sortable: true, filter: true },
		{ field: "Notification Data Sent" },
		{ field: "Days to Respond" },
		{ field: "Notification Delivered" },
		{ field: "Notification Response Deadline" },
		{ field: "Tenant Response Date" },
		{ field: "Tenant Response" },
		{ field: "ROFO/ROFR No..." },
	]);

  // Suppress the JavaScript Context Menu
  window.addEventListener("contextmenu", (e) => {e.preventDefault()});

  const cellClickedListener = useCallback(e => {
    console.log('Cell Clicked', e);
  }, []);
  
  const cellRightClickedListener = useCallback(e => {
    console.log('Cell Right Clicked', e);
    console.log(e.data); // Send this to the modal
    handleShow(); // Present the modal (research useState arguments)
  }, []);

  // API Access Example
	// useEffect(() => {
	// 	fetch("https://www.ag-grid.com/example-assets/row-data.json")
	// 		.then((result) => result.json())
	// 		.then((rowData) => setRowData(rowData))
	// 		.catch((e) => console.log(e));
	// }, []);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
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
