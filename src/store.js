//entry point to redux store
import { createStore, applyMiddleware, compose } from "redux"; //compose used for wrapping the redex tools in this compose function
import { thunk } from "redux-thunk"; //is a middleware
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
