import {combineReducers} from "redux";
import { connectRoutes } from "redux-first-router";
import routePaths from "./routePaths";

const {reducer: location } = connectRoutes(routePaths)

const rootReducer = combineReducers({location})

export default rootReducer;