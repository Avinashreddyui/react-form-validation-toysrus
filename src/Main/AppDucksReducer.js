

export const CHANGE_PARAMETERS_REQUEST="CHANGE_PARAMETERS_REQUEST";
export const CHANGE_EMAIL_ERROR_STATUS="CHANGE_EMAIL_ERROR_STATUS";
export const CHANGE_PHONE_NUMBER_ERROR_STATUS="CHANGE_PHONE_NUMBER_ERROR_STATUS";

const INITIAL_STATE={
    email:'',
    phoneNumber:'',
    emailErrors:null
};

export function AppReducer(state=INITIAL_STATE,action){
    switch(action.type) {
        case CHANGE_PARAMETERS_REQUEST:
            return {
                ...state,
            [action.fieldName]:action.fieldValue
            };
        case CHANGE_EMAIL_ERROR_STATUS:
            return {
                ...state,
                emailErrors:action.value
            };
        default:return state
    }
}
export function changeParameters(e) {
    const fieldName=e.target.name;
    const fieldValue=e.target.value;
    return function (dispatch) {
        dispatch(changeParametersRequest(fieldName,fieldValue));
    }
}

export function changeParametersRequest(fieldName,fieldValue) {
    return {
        type:CHANGE_PARAMETERS_REQUEST,
        fieldValue,
        fieldName
    }
}
export function errorToDisplay(e) {
    console.log("jyguas");
    var fieldValue=e.target.value;
    return function (dispatch) {
       dispatch(errorsTo(validateEmail(fieldValue)));
    }
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
export function errorsTo(bool) {
    console.log(bool);
    return {
        type:CHANGE_EMAIL_ERROR_STATUS,
        value:bool
    }
}
