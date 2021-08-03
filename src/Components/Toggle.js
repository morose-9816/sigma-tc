import React from 'react'
import { AuditLogs } from './AuditLogs'

import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modalll from './Modalll';

export const Toggle = () => {
  

    return (
        <div className="container">
        <div>
            <br></br>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"dodgerblue"}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav nav">
            <a className="nav-item nav-link active" data-toggle="tab" role="tab" href="#features"><b>Trade Details</b>
              <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" data-toggle="tab" role="tab" href="#eligibility">Trade Events</a>
            <a className="nav-item nav-link" data-toggle="tab" role="tab" href="#termsandconditions">Review Case</a>
            <a className="nav-item nav-link" data-toggle="tab" role="tab" href="#faq"><b>Audit Logs</b></a>
            <div className="float-right">
            <a className="nav-item nav-link" style={{marginLeft:"520px", color:"white"}} href="/#"><b>Welcome Maker</b></a>
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
            <input type="text" id="tid" class="form-control-sm" value="1785HR38BSX"/>
            </div>
            <div class="col-sm-2">
            <label for="td" class="col-form-label ml-5">Trade Date</label>
            </div>
            <div class="col-sm-2">
            <input type="text" id="td" class="form-control-sm" value="23/7/21"/>
            </div>
            <div class="col-sm-2">
            <label for="cname" class="col-form-label ml-5">Trade Type</label>
            </div>
            <div class="col-xs-2">
            <input type="text" id="cname" class="form-control-sm" value="FX"/>
            </div>
        </div>

        <br/>

        <div class="row g-3 align-items-center">
            <div class="col-sm-2">
            <label for="nc" class="col-form-label">Client Name</label>
            </div>
            <div class="col-sm-2">
            <input type="text" id="nc" class="form-control-sm" value="HSBC"/>
            </div>
            <div class="col-sm-2">
            <label for="cc" class="col-form-label ml-5">Client Account No.</label>
            </div>
            <div class="col-sm-2">
            <input type="number" id="cc" class="form-control-sm" value="178594852"/>
            </div>
            <div class="col-sm-2">
            <label for="ec" class="col-form-label ml-5">Client Address</label>
            </div>
            <div class="col-xs-2">
            <input type="textarea" id="ec" class="form-control-sm" value="452 5th Ave, New York, NY 10018, United States"/>
            </div>
        </div>

        <br/>

        <div class="row g-3 align-items-center">
            <div class="col-sm-2">
            <label for="nc" class="col-form-label">Call Currency</label>
            </div>
            <div class="col-sm-2">
            <input type="text" id="nc" class="form-control-sm" value="Dollar"/>
            </div>
            <div class="col-sm-2">
            <label for="cc" class="col-form-label ml-5">Put Currency</label>
            </div>
            <div class="col-sm-2">
            <input type="text" id="cc" class="form-control-sm" value="Euros"/>
            </div>
            <div class="col-sm-2">
            <label for="ec" class="col-form-label ml-5">Exchange Rate</label>
            </div>
            <div class="col-xs-2">
            <input type="number" id="ec" class="form-control-sm" value="1.2"/>
            </div>
        </div>

        <br></br>

        <div class="row g-3 align-items-center">
            <div class="col-sm-2">
            <label for="nc" class="col-form-label">Call Amount</label>
            </div>
            <div class="col-sm-2">
            <input type="number" id="nc" class="form-control-sm" value="2450000"/>
            </div>
            <div class="col-sm-2">
            <label for="cc" class="col-form-label ml-5">Put Amount</label>
            </div>
            <div class="col-sm-2">
            <input type="number" id="cc" class="form-control-sm" value="3200000"/>
            </div>
            <div class="col-sm-2">
            <label for="ec" class="col-form-label ml-5">Product Type</label>
            </div>
            <div class="col-xs-2">
            <input type="text" id="ec" class="form-control-sm" value="FX"/>
            </div>
        </div>

        <br/>

        <div class="row g-3 align-items-center">
            <div class="col-sm-2">
            <label for="nc" class="col-form-label">Benefeciary Name</label>
            </div>
            <div class="col-sm-2">
            <input type="text" id="nc" class="form-control-sm" value="Microsoft"/>
            </div>
            <div class="col-sm-2">
            <label for="cc" class="col-form-label ml-5">Benefeciary Account No.</label>
            </div>
            <div class="col-sm-2">
            <input type="text" id="cc" class="form-control-sm" value="185200025"/>
            </div>
            <div class="col-sm-2">
            <label for="ec" class="col-form-label ml-5">Benefeciary Address</label>
            </div>
            <div class="col-xs-2">
            <input type="textarea" id="ec" class="form-control-sm" value="7000 State Highway 161, Building LC1, Irving, TX 75039, United States"/>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

         {/* Button */}

        <div className ="row" style={{marginLeft:"170px"}}>
          <div className="col">
        <button type="button" className="btn btn-primary btn-sm">Generate Details from XML</button>
          </div>
          <div className="col">
          <Modalll/>
          </div>  
          <div className="col"> 
        <button style={{marginLeft:"50px", marginBottom:"100px"}} type="button" className="btn btn-danger btn-sm">Reject</button>
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