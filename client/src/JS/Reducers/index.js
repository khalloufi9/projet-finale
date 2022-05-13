import { combineReducers } from "redux"
import userReducer from "./userReducer"
import shoesReducer from "./shoesReducer"
import panierReducer from "./panierReducer"
const rootReducer = combineReducers({ userReducer,shoesReducer,panierReducer })
export default rootReducer