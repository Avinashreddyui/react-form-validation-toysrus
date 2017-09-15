
import React from 'react';

class OutputFrom extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.email}</p>
                <p>{this.props.phoneNumber}</p>
            </div>
        )
    }
}

export default OutputFrom;
