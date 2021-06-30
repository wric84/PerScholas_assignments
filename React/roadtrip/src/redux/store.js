import { createStore, combineReducers} from "redux";
import { logReducer } from "./reducers";

const store = createStore(combineReducers({isLogin:logReducer}))

export default store