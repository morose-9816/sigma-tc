import React, { useState, useEffect } from 'react';
//import BootstrapTable from "react-bootstrap-table-next";
//import paginationFactory from "react-bootstrap-table2-paginator";
import {Modal, Button, Container} from "react-bootstrap";
import Trade_Data from './Trade_Data.json';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import {CSVLink} from 'react-csv'
import {container} from '@material-ui/core/Container';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiDataGrid-columnsContainer": {
            backgroundColor: theme.palette.type === "light" ? "#067fda" : "#1d1d1d",
            color: 'white',
        },
        "& .super-app-theme--header": {
            backgroundColor: "#067fda"
        }
    },
}));



const BasicTable = ()=> {
    const [data, setData] = useState(Trade_Data);
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [show,setShow] = useState(false);
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true); 
    const [searchResults, setSearchResults] = useState([]);
    const classes = useStyles();


    var results = [];
    const handleChange = (e) => {
        console.log(e,e.target, e.target.value, typeof e.target.value);
        results = Trade_Data.filter(d=> (
            (d['Trade_ID'] == e.target.value) || (d['Client_Name'].toLowerCase() == e.target.value.toLowerCase()) || d['Trade_Date']== e.target.value || d['Action Required']==e.target.value)
            );
        console.log("results", results);
        console.log(typeof results);
        ChangeData(results);
    };

    const ChangeData = (results)=>{
        console.log("inside ChangeData", results)
        setSearchResults(results);
        setData(results);
        if(Object.keys(results).length===0){
            console.log("its empty", results, data)
            setData(Trade_Data);
        }
    }
    useEffect(()=> {
        console.log("UseEffect");
        },[data]
    )

    const columns = [
        
        {field: "Trade_ID", 
        headerName: "Trade ID",  
        width:320,
        headerClassName: 'super-app-theme--header',
        },  

        {field: "Client_Name", 
        headerName: "Client Name",  
        width:400,
        headerClassName: 'super-app-theme--header',
         },

        {field: "Trade_Date", 
        headerName: "Trade Date",  
        width:300, 
        headerClassName: 'super-app-theme--header',},

        {field: "Action Required", 
        headerName: "Action Required",  
        width:365,
        headerClassName: 'super-app-theme--header',
        renderCell: (params) => (
            <strong>
              <Link to="/outbound/maker"> 
              <Button
                variant="link"
                color="green"
                size="small"
                style={{margin:"0px auto" , justifyContent:"center"}}
                >
                    {params["row"]["Action_Required"]}
                </Button>
                </Link>
            </strong>
          ),
    },

    ];
    
    const handleRowClick = (param, event) => {
        console.log("Row:");
        console.log(param);
        console.log(event);
        setModalInfo(param.row)
        toggle()
      };

    const toggle = ()=>{
        setShowModal(handleShow);
    };
    
    const handleActionRequired = (e)=>{
        console.log("inside handleActionRequired", e["title"]);
        var tabledata = e["title"];
        // console.log(tabledata);
        tabledata.map((row)=>{
            //console.log(row['Action Required'], typeof row['Action Required']);
            if(row['Action Required']==='Accepted'){
                //window.location.assign('http://github.com');
                console.log("ACCEPTEDDDDD");
            }   
         })
    }   

    const ModalContent = (table_Data) =>{
        console.log("inside ModalContent",table_Data)
        return(
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Trade_ID: {modalInfo.Trade_ID}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href="#">Downloadpdf</a>
                    <Button style = {{marginTop:"4%"}} variant="contained" color = "secondary" onClick={()=>{handleActionRequired(table_Data)}}>Proceed Action</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer> 
            </Modal>
        )
    }

    const defaultSorted = [{
        dataField: 'Trade_ID',
        order: 'desc'
      }];
    

    var selectRowProp = {
        mode: "checkbox",
        clickToSelect: true,
        bgColor: "rgb(238, 193, 213)" 
    };

    //for CSV Data
    const headers = [
        {label:'Trade ID', key:'Trade_ID'},
        {label:'Client Name', key:'Client_Name'},
        {label:'Trade Date', key:'Trade_Date'},
        {label:'Action Required', key:'Action Required'}
    ];
    
    const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: data
    };

    return (
        <>
        <div style={{marginTop:"-40px"}}>
            <input style={{ marginLeft:"1280px"}} type="text" placeholder="Search" onChange={handleChange}/>
        </div>
            <div className={classes.root} style={{height: 550, width: '91.5%', backgroundColor: 'white', position: 'absolute',marginLeft:'60px', top: '170px', boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)', transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;' }}>
                <DataGrid
                    columns={columns}
                    rows={data}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                />
            </div>
        </>
    );
}

export default BasicTable;