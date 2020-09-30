import { cartReducer} from "./reducers/cartReducer";
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';


export const store = createStore(cartReducer, composeWithDevTools(applyMiddleware(thunk)));