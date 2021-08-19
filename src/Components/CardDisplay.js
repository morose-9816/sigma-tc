import React from 'react';
import Card from './Card';


class CardDisplay extends React.Component {
    render() {
            
        return (
            <div class="row">
                <Card type="Trade Dashboard" color="primary"></Card>
                {/* <Card type="Earnings (Annuaal)" value="$215,000" icon="dollar-sign" color="success"></Card>
                <Card type="Pending Request" value="18" icon="comments" color="warning"></Card> */}
            </div>
        )
    }
}

export default CardDisplay;