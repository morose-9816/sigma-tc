import React from 'react';
import { Checkbox,FormGroup,FormControlLabel, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Snackbar from '@material-ui/core/Snackbar';
import PDFViewer from './PDFViewer';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import  {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


export default function OutboundCheck() {

    const[sent, setSent] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);
    

    const handleClose = () => {
        setOpen(false);
      };
      const handleCloseDialog = () => {
        setOpenDialog(false);
      };
      const handleClick = () => {
        setOpen(true);
      };
      const handleClickOpenDialog = () => {
        setOpenDialog(true);
      };
    
      const handleOpenConfirmDialog = () => {
        setOpenConfirmDialog(true);
      };
      const handleCloseConfirmDialog = () =>{
        setOpenConfirmDialog(false);
      };
    
      const handleConfirmTradeDialog = () =>{
        setOpenConfirmDialog(false);
        handleClick();
    
      };


    let tradestyle = {
        width: '100%',
        height: '550px',
        backgroundColor: 'rgb(213,242,248)',
        display:'flex',
        flexWrap:'wrap'
        // justifyContent:'space-evenly'
    };
    let imageWrapper = {
        overflow: 'auto', /* adds scrollbars */
        height: '540px',
        width:'800px',
        position: 'relative',
        marginTop:'5px',
        marginLeft:'15px'

    };
    let image={
        height: '300%',
        width:'100%', /* probably looks neater if auto *//* double width image to show only first quarter */
        verticalAlign: 'bottom'
    };
    let check={
        margin:'auto auto',
        paddingLeft:'10px',
        borderRadius:'7px',
        width:'150px',
        display:'flex',
        flexWrap:'wrap'
    };
    let btn={
        margin:'10px auto'
    };

    const [state, setState] = React.useState({
        tradeId: false,
        tradeDate:false,
        tradeType:false,
        clientName:false,
        clientAddress:false,
        callCurrency:false,
        exchangeRate:false,
        callAmount:false,
        putAmount:false,
        preductType:false
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if(state.tradeId &&
            state.tradeDate &&
            state.tradeType &&
            state.clientName &&
            state.clientAddress &&
            state.callCurrency &&
            state.exchangeRate &&
            state.callAmount &&
            state.putAmount &&
            state.productType)
            {
                setSent(true); 
            }
        else{
            alert('All checkboxes are not checked so form cannot be submitted')
        }
      }

    return (
        <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist" >
                <li class="nav-item">
                    <a class="nav-link active" id="tradeDetails-tab" data-toggle="tab" href="#tradeDetails" role="tab" aria-controls="tradeDetails" aria-selected="true">Trade Details</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="tradeEvents-tab" data-toggle="tab" href="#tradeEvents" role="tab" aria-controls="tradeEvents" aria-selected="false">Trade Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="reviewCase-tab" data-toggle="tab" href="#reviewCase" role="tab" aria-controls="reviewCase" aria-selected="false">Review Case</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="auditLogs-tab" data-toggle="tab" href="#auditLogs" role="tab" aria-controls="auditLogs" aria-selected="false">Audit Logs</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="tradeDetails" role="tabpanel" aria-labelledby="tradeDetails-tab"><div className='tradeContainer' style={tradestyle} id="tradedetails">
                        <div className='tradeImage' style={imageWrapper}>
                            <PDFViewer />
                        {/* <img style={image}
                            src="https://imgv2-1-f.scribdassets.com/img/document/38804102/original/cc53a312d2/1625853510?v=1"
                            loading="details" alt="Trade Confirmation PDF" /> */}
                        </div>
                        <form onSubmit={handleSubmit} validate style={{margin:'auto auto',height:'325px',padding:'10px 10px'}}>
                            <FormGroup row  >
                                <FormGroup >
                                    <FormControlLabel control={<Checkbox checked={state.tradeId} onChange={handleChange} name="tradeId" color='primary' />} label="Trade Id" />
                                    <FormControlLabel control={<Checkbox checked={state.tradeDate} onChange={handleChange} name="tradeDate" color='primary' />} label="Trade Date" />
                                    <FormControlLabel control={<Checkbox checked={state.tradeType} onChange={handleChange} name="tradeType" color='primary' />} label="Trade Type" />
                                    <FormControlLabel control={<Checkbox checked={state.ClientName} onChange={handleChange} name="clientName" color='primary' />} label="Client Name" />
                                    <FormControlLabel control={<Checkbox checked={state.clientAddress} onChange={handleChange} name="clientAddress" color='primary' />} label="Client Address" />
                                    
                                </FormGroup>   
                                <FormGroup style={{marginLeft:'10px'}}>
                                    <FormControlLabel control={<Checkbox checked={state.callCurrency} onChange={handleChange} name="callCurrency" color='primary' />} label="Call Currency" />
                                    <FormControlLabel control={<Checkbox checked={state.exchangeRate} onChange={handleChange} name="exchangeRate" color='primary' />} label="Exchange Rate" />
                                    <FormControlLabel control={<Checkbox checked={state.callAmount} onChange={handleChange} name="callAmount" color='primary' />} label="Call Amount" />
                                    <FormControlLabel control={<Checkbox checked={state.putAmount} onChange={handleChange} name="putAmount" color='primary' />} label="Put Amount" />
                                    <FormControlLabel control={<Checkbox checked={state.productType} onChange={handleChange} name="productType" color='primary' />} label="Product Type" />
                                    
                                </FormGroup>   
                            </FormGroup>
                            
                            
                            <Button type='submit' variant="contained" onClick = {handleOpenConfirmDialog} color="primary" size="large" endIcon={<KeyboardArrowRightIcon />}>Send Mail</Button>
                            
                            <Dialog
        open={openConfirmDialog}
        onClose={handleCloseConfirmDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-send-mail">{"Are you sure you want to send this PDF as a mail ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-confirm-trade-dialog-description">
            You cannot reverse this action. Confirming this would mean closing the ticket.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog} color="secondary">
            Check Trade Again
          </Button>
          <Link to = "/inbound/maker">
          <Button onClick={handleConfirmTradeDialog} color="primary" autoFocus>
            Confirm Trade
          </Button>
          </Link>
          
        </DialogActions>
      </Dialog>
      <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Reject Trade</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Trade Rejection Details
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Feedback"
            type="paragraph"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Send to admin
          </Button>
        </DialogActions>
      </Dialog>
                            
                            
                            
                            
                            
                            <Button onClick={handleClickOpenDialog} variant="contained" color="secondary" size="large" style={{marginLeft:'35px'}}>Reject</Button>
                            
                         </form>
                </div>
            </div>
                <div class="tab-pane fade" id="tradeEvents" role="tabpanel" aria-labelledby="tradeEvents-tab">...</div>
                <div class="tab-pane fade" id="reviewCase" role="tabpanel" aria-labelledby="reviewCase-tab">...</div>
                <div class="tab-pane fade" id="auditLogs" role="tabpanel" aria-labelledby="auditLogs-tab">...</div>
            </div>
        </div>
    )
}
