import SimpleCard from "./Cards";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const InboundMaker = () => {
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
    const classes = useStyles();
    let imageWrapper = {
        overflow: 'auto', /* adds scrollbars */
        zoom:'auto',
        height: '70%',
        position: 'relative',

    };
    let image={
        height: '300%',
        width:'100%', /* probably looks neater if auto // double width image to show only first quarter */
        verticalAlign: 'bottom'
    };
    let viewer =  {
        height: "100%"
    }


    return (
        <>
            <div className="flexbox-container">
            <div className='col-6'>
                <div className = "container" style={viewer}>
                    <div className='tradeImage' style={imageWrapper}>
                        <img style={image}
                            src="https://imgv2-1-f.scribdassets.com/img/document/38804102/original/cc53a312d2/1625853510?v=1"
                            loading="details" alt="Trade Confirmation PDF" />
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className = "container" style = {viewer}>
                    <div className='tradeImage' style={imageWrapper}>
                        <img style={image}
                            src="https://imgv2-1-f.scribdassets.com/img/document/38804102/original/cc53a312d2/1625853510?v=1"
                            loading="details" alt="Trade Confirmation PDF" />
                    </div>
                </div>
            </div>
              
        </div>
        <div style = {{marginTop:"-100px"}}>
        <button type="button" class="btn btn-success">Send to checker</button>
            <button style = {{marginLeft:"10px"}} type="button" class="btn btn-danger">Reject Trade</button> 
        </div>
            
            </>
        
        
    );
}

 
export default InboundMaker;