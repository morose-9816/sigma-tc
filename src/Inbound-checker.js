import SimpleCard from "./Cards";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert'
import PDFViewer from "./PDFViewer";
import Card from '@material-ui/core/Card';


const InboundChecker = () => {
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
    const classes = useStyles();
    // let imageWrapper = {
    //     overflow: 'auto', /* adds scrollbars */
    //     zoom:'auto',
    //     height: '70%',
    //     position: 'relative',

    // };
    // let image={
    //     height: '300%',
    //     width:'100%', /* probably looks neater if auto // double width image to show only first quarter */
    //     verticalAlign: 'bottom'
    // };
    // let viewer =  {
    //     height: "100%"
    // }

    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };



  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleClick = () => {
    setOpen(true);
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




    return (
        <>
            <h1 class="display-3">Inbound Checker
            </h1>
            <h3>
            <small class="text-muted">Trade ID : 34567AN345</small>
                </h3>
            <br/>
            <div className="pdf-viewer">
            <div className='col-6'>
                <h6 class =  "display-6">Outbound Document</h6>
                <Card raised="true" >
                <PDFViewer/>
                </Card>
                
            </div>
            <div className='col-6'>
                <h6 class = "display-6">Inbound Document</h6>
                <Card raised="true">
                <PDFViewer/>
                </Card>
            </div>
            </div>
            
        <div style = {{marginTop:"7%", marginBottom:"5%"}}>
            
        <Button style = {{marginRight:"1%"}}variant="contained" color = "primary" onClick={handleOpenConfirmDialog}>
            Confirm Trade
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
                The trade is confirmed
            </Alert>
        </Snackbar>
            <Button style = {{marginLeft:"1%"}}variant="contained" color="secondary" onClick={handleClickOpenDialog}>
                Reject Trade
            </Button> 
        </div>

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


      <Dialog
        open={openConfirmDialog}
        onClose={handleCloseConfirmDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-confirm-trade">{"Are you sure you want to confirm this trade ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-confirm-trade-dialog-description">
            You cannot reverse this action. Confirming this would mean closing the ticket.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog} color="secondary">
            Check Trade Again
          </Button>
          <Button onClick={handleConfirmTradeDialog} color="primary" autoFocus>
            Confirm Trade
          </Button>
        </DialogActions>
      </Dialog>
            
            </>
        
        
    );
}

 
export default InboundChecker;