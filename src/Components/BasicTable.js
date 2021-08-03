import React, { useState, useEffect } from 'react';
//import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Modal} from "react-bootstrap";
import Trade_Data from './Trade_Data.json';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
//import './table.css'
//import Search from './Search'
import {CSVLink} from 'react-csv'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
// import { useHistory,Redirect } from 'react-router-dom';



const BasicTable = ()=> {
    const [data, setData] = useState(Trade_Data);
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [show,setShow] = useState(false);
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true); 
    
    const [isSearching, Set_isSearching] = useState(false);
    const handleSearch = ()=>Set_isSearching(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    


    var results = [];
    const handleChange = (e) => {
        Set_isSearching(true);
        setSearchTerm(e.target.value);
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
        {dataField: "Trade_ID", text: "Trade ID", sort:true},  
        {dataField: "Client_Name", text: "Client Name", sort:true},
        {dataField: "Trade_Date", text: "Trade Date",  sort:true},
        {dataField: "Action Required", text: "Action Required", sort:true}
    ];
    
    const rowEvents = {
        onClick: (e, row)=>{
            console.log(row)
            setModalInfo(row)
            toggle()
        },
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
                    <Button variant = "contained" color = "primary" >Download Trade Details</Button>
                    <br/>
                    <Link to = "/outbound/maker">
                    <Button style = {{marginTop:"4%"}}variant="contained" color = "secondary" onClick={()=>{handleActionRequired(table_Data)}}>Proceed Action</Button>
                    </Link>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleClose}>Close</Button>
                </Modal.Footer> 
            </Modal>
        )
    }

    const defaultSorted = [{
        dataField: 'Trade_ID',
        order: 'desc'
      }];

    const pagination = paginationFactory({
        page: 2,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        }
      });

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
        <div>
            <h1 style={{textAlign:'center', marginTop:"10px"}}>Trade Dashboard</h1>
            <div style={{marginLeft:"1050px"}}>
            <input type="text" placeholder="Search.." onChange={handleChange}/>
            </div>
            <BootstrapTable className='table'
            striped
            hover
            bordered
            wrapperClasses
            headerClasses
            pagination
            insertRow
            deleteRow
            search
            rowEvents={rowEvents}
            headerStyle= { {backgroundColor: 'green'} }
            actions = {[
                {icon: ()=><button>Export</button>}
            ]}
            rowClasses="custom-row-class" 
            rowStyle={ { border: '1px solid black'} }
            bootstrap4 keyField='id' data={data} columns={columns} defaultSorted={defaultSorted} pagination={pagination} />
            {show ? <ModalContent title={data}/> : null} 
            {<Button style = {{marginLeft:'45%'}}variant = "contained"><CSVLink {...csvReport}>Export to CSV</CSVLink></Button>}
        </div>
    );
}

export default BasicTable;