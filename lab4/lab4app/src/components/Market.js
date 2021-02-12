import React, {Component} from 'react';
import MarketItem from './MarketItem'

class Market extends Component {
constructor(props) {
    super(props);
    this.state = {
        count: 0
    };
};
    render() {
        return(
            <div>
                <MarketItem count = {this.props.count}/>
            
            <button onClick={() => this.props({count: this.props.count +1})}>Add Item</button>
            </div>
        );
    }
    };



export default Market;
