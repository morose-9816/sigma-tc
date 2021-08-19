import React from 'react'
import { AuditLogs } from './AuditLogs'

import ReactDOM from 'react-dom';
import Modalll from './Modalll';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export const Toggle = () => {

  const classes = useStyles();


    return (
        <div className="container" style={{marginLeft:"280px"}}>
          <br></br>
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"dodgerblue"}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav nav">
            <a className="nav-item nav-link active" data-toggle="tab" role="tab" href="#features"><b>Trade Details</b>
              <span className="sr-only">(current)</span></a>
            {/* <a className="nav-item nav-link" data-toggle="tab" role="tab" href="#eligibility">Trade Events</a>
            <a className="nav-item nav-link" data-toggle="tab" role="tab" href="#termsandconditions">Review Case</a> */}
            <a className="nav-item nav-link" data-toggle="tab" role="tab" href="#faq"><b>Audit Logs</b></a>
            <div className="float-right">
            <a className="nav-item nav-link" style={{marginLeft:"720px", color:"white"}} href="/#"><b>Welcome Maker</b></a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    {/* Form  */}
    <div className="tab-content my-1">
        <br/>
        <div className="tab-pane active" id="features" role="tabpanel">
        <div class="row g-3 align-items-center">
            <div class="col-sm-2">
            <label for="tid" class="col-form-label">Trade ID</label>
            </div>
            <div class="col-sm-2">
            <TextField id="standard-basic"  defaultValue="17BX548HSC" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div class="col-sm-2">
            <label for="td" class="col-form-label ml-5">Trade Date</label>
            </div>
            <div class="col-sm-2">
            <TextField id="standard-basic"  defaultValue="23/7/21" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div class="col-sm-2">
            <label for="cname" class="col-form-label ml-5">Trade Type</label>
            </div>
            <div class="col-xs-2">
            <TextField id="standard-basic"  defaultValue="FX" InputProps={{
            readOnly: true,
          }} />
            </div>
        </div>

        <br/>

        <div class="row g-3 align-items-center">
            <div class="col-sm-2">
            <label for="nc" class="col-form-label">Client Name</label>
            </div>
            <div class="col-sm-2">
            <TextField id="standard-basic"  defaultValue="HSBC" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div class="col-sm-2">
            <label for="cc" class="col-form-label ml-5">Client Account No.</label>
            </div>
            <div class="col-sm-2">
            <TextField id="standard-basic"  defaultValue="17852975482" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div class="col-sm-2">
            <label for="ec" class="col-form-label ml-5">Client Address</label>
            </div>
            <div class="col-xs-2">
            <TextField id="standard-basic"  defaultValue="452 5th Ave, New York, NY 10018, United States" InputProps={{
            readOnly: true,
          }} />
            </div>
        </div>

        <br/>

        <div class="row g-3 align-items-center">
            <div class="col-sm-2">
            <label for="nc" class="col-form-label">Call Currency</label>
            </div>
            <div class="col-sm-2">
            <TextField id="standard-basic"  defaultValue="Dollar" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div class="col-sm-2">
            <label for="cc" class="col-form-label ml-5">Put Currency</label>
            </div>
            <div class="col-sm-2">
            <TextField id="standard-basic"  defaultValue="Euros" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div class="col-sm-2">
            <label for="ec" class="col-form-label ml-5">Exchange Rate</label>
            </div>
            <div class="col-xs-2">
            <TextField id="standard-basic"  defaultValue="1.2" InputProps={{
            readOnly: true,
          }} />
            </div>
        </div>

        <br></br>

        <div class="row g-3 align-items-center">
            <div class="col-sm-2">
            <label for="nc" class="col-form-label">Call Amount</label>
            </div>
            <div class="col-sm-2">
            <TextField id="standard-basic"  defaultValue="2450000" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div class="col-sm-2">
            <label for="cc" class="col-form-label ml-5">Put Amount</label>
            </div>
            <div class="col-sm-2">
            <TextField id="standard-basic"  defaultValue="3200000" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div class="col-sm-2">
            <label for="ec" class="col-form-label ml-5">Product Type</label>
            </div>
            <div class="col-xs-2">
            <TextField id="standard-basic"  defaultValue="FX" InputProps={{
            readOnly: true,
          }} />
            </div>
        </div>

        <br/>

        <div class="row g-3 align-items-center">
            <div class="col-sm-2">
            <label for="nc" class="col-form-label">Benefeciary Name</label>
            </div>
            <div class="col-sm-2">
            <TextField id="standard-basic"  defaultValue="Microsoft" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div class="col-sm-2">
            <label for="cc" class="col-form-label ml-5">Benefeciary Account No.</label>
            </div>
            <div class="col-sm-2">
            <TextField id="standard-basic"  defaultValue="1814750000" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div class="col-sm-2">
            <label for="ec" class="col-form-label ml-5">Benefeciary Address</label>
            </div>
            <div class="col-xs-2">
            <TextField id="standard-basic"  defaultValue="7000 State Highway 161, Building LC1, Irving, TX 75039, United States"InputProps={{
            readOnly: true,
          }}/>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>


         {/* Button */}

        <div className ="row">
          <div>
        <button type="button" style={{marginLeft:"710px"}} className="btn btn-primary btn-sm">Generate Details from XML</button>
          </div>
          <div>
          <Modalll/>
          </div>  
          <div> 
        <button type="button" className="btn btn-danger btn-sm" style={{marginLeft:"0px"}}>Reject Trade</button>
        </div>
        </div>

        <br/>


        </div>

        <div className="tab-pane" id="faq" role="tabpanel">
        <div class="row g-3 align-items-center">
            <AuditLogs/>
        </div>
        </div>
        </div>

    </div>
    )
}