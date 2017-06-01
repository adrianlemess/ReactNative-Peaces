import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === {prop: 'name', value: 'jane'}
            // [action.payload.prop] -> Key interpolation -> will be replaced by name: action.payload.value
            return { ...state, [action.payload.prop]: action.payload.value }
            //Reset state after create a new Employee
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;

        default:
            return state;
    }
};