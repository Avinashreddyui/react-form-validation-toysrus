
import React from 'react';
import Axios from 'axios';
import InputField from '../ReusableComponents/InputField';
import {connect} from 'react-redux'
import * as search from './AppDucksReducer';
import OutputFrom from './OutputFromRedux';

class FormContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state={
          userName:''
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
       Axios.get('/api')
           .then(res=>{
              this.setState({userName:res.data.userName})
           });
    }
    handleSubmit(){

    }
    render(){
        const isEnabled=this.props.email.length>0 && this.props.phoneNumber.length>0;
        let button=null;
            if(this.props.errors===false){
                button = <span>please enter valid email id</span>
            }else{
                button = null
            }
        return(
            <div>
            <form className="container centre_div" onSubmit={this.handleForm}>
                <div className="col-md-12 form-group">
                    <label className="form-label">USER:{this.state.userName}</label>
                </div>
                    <InputField
                        label="Email"
                        inputType="text"
                        name="email"
                        controlFunc={(e)=>this.props.changeParameters(e)}
                        content={this.props.email}
                        pattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$"
                        placeHolder="Please enter you email"
                        onBlur={(e)=>this.props.changeErrors(e)}
                    />
                    {button}
                    <InputField
                        label="Phone Number"
                        inputType="number"
                        name="phoneNumber"
                        controlFunc={(e)=>this.props.changeParameters(e)}
                        content={this.props.phoneNumber}
                        placeHolder="Please enter you Number"
                    />
                <input className="btn btn-primary" aria-disabled={!isEnabled} type="submit" disabled={!isEnabled} />
            </form>
                <OutputFrom/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        email:state.search.email,
        phoneNumber:state.search.phoneNumber,
        errors:state.search.emailErrors
    }
};
const mapDispatchToProps=(dispatch)=>{
     return {
    changeParameters:(e)=>dispatch(search.changeParameters(e)),
         changeErrors:(e)=>dispatch(search.errorToDisplay(e))
     }
};
export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);