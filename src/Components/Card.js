import React from 'react';

function Card (props){
    
        
        const tclr = "text-xs font-weight-bold text-"+props.color+" text-uppercase mb-1"
        const bclr = "card border-left-"+props.color+" shadow h-100 py-2"
        return(
                <div style={{margin:"10px auto", width:"400px"}}>
                <div>
                    <div class={bclr}>
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col">
                                    <div class={tclr} style={{fontSize:"23px",marginLeft:"74px"}}>{props.type}</div>
                                    {/* <div class="h5 mb-0 font-weight-bold text-gray-800">{props.value}</div> */}
                                </div>
                                <div class="col-auto">
                                    
                                    {/* <i class={cls}></i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
        )
    
}

export default Card;