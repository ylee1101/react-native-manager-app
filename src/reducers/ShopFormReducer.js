//For add section
import {
    SHOP_UPDATE,
    SHOP_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOP_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case SHOP_CREATE:
            return INITIAL_STATE

        default:
            return state;
    }
}