import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddeleware from 'redux-saga';
const sagaMiddleWare = createSagaMiddeleware();
import SagaData from "./saga";
const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleWare]
});
sagaMiddleWare.run(SagaData);
export default store;