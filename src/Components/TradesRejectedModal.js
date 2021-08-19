import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PDFViewer from './PDFViewer';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import StickyHeadTable from './TradeConfirmedTable';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TradesConfirmedModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="tradesRejected">
            <a onClick={handleOpen}>
                Trades Rejected
            </a>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper} style={{ width: "75%", height: "80%"}}>
                        <div>
                        <h3 style={{alignItems:"center"}}>Trades Rejected</h3>
                        <StickyHeadTable/>
                        </div>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}