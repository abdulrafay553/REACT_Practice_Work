import { createStore } from "redux";
import { myReducer } from "./reducer";

const mystore = createStore(myReducer)

export default mystore