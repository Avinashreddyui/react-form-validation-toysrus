
import React from 'react';
import PropTypes from 'prop-types'

class InputField extends React.Component{
    render() {
        return (
            <div className="col-md-12 form-group">
                <label className="form-label">{this.props.label}</label>
            <input
                className="form-input"
                name={this.props.name}
                type={this.props.inputType}
                value={this.props.content}
                onChange={this.props.controlFunc}
                placeholder={this.props.placeHolder}
                onBlur={this.props.onBlur}
            />
        </div>
        )
    }
}

InputField.propTypes = {
    inputType: PropTypes.oneOf(['email','text', 'number']).isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    placeholder: PropTypes.string,
};

export default InputField;



