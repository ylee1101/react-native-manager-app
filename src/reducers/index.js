import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ShopFormReducer from './ShopFormReducer'; //For add section
import ShopReducer from './ShopReducer'; //For add section

export default combineReducers({
    auth: AuthReducer,
    shopForm: ShopFormReducer, //For add section
    shops: ShopReducer //For add section
});