
import React from 'react';
import FormContainer from './FormContainer';
import OutputFrom from './OutputFromRedux'
import {connect} from 'react-redux';

class App extends React.Component{
    render(){
        return(
            <div className="jumbotron vertical-center">
                <FormContainer />
                <OutputFrom
                email={this.props.email}
                phoneNumber={this.props.phoneNumber}
                />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        email:state.search.email,
        phoneNumber:state.search.phoneNumber
    }
};
export default connect(mapStateToProps,null)(App);
